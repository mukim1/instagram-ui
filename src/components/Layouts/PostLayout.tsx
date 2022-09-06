import { useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdInsertEmoticon } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { ImHeart } from "react-icons/im";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Avatar } from "../Avatars/Avatar";
import { Datum } from "../../types/data";
import { useContext } from "../../Contexts/GContext";

interface Props {
  children: any;
  post: Datum;
  setShareModal: any;
}

const PostLayout = ({ children, post, setShareModal }: Props) => {
  const { setPosts, saves, setSaves } = useContext();
  const [comment, setComment] = useState("");
  const commentRef = useRef(null as any);

  const handleLike = (id: string) => {
    setPosts((p: Datum[]) =>
      p.map((v) =>
        v.id === id ? { ...v, user_has_liked: !v.user_has_liked } : v
      )
    );
  };

  const submitComment = (e: any) => {
    e.preventDefault();
    if (!comment.length) return;
    setPosts((p: Datum[]) =>
      p.map((v: Datum) =>
        v.id === post.id
          ? {
              ...v,
              comments: v.comments ? [...v.comments, comment] : [comment],
            }
          : v
      )
    );
    setComment("");
  };

  const handleSave = () => {
    setSaves((p: string[]) =>
      p.includes(post.id) ? p.filter((v) => v !== post.id) : [...p, post.id]
    );
  };

  return (
    <div className="py-5 bg-white mb-5 rounded">
      <div className="flex justify-between items-center px-2 pr-3">
        <div className="flex items-center gap-x-2 pb-2">
          <Avatar />
          <p className="font-semibold tracking-wider">{post.user.full_name}</p>
        </div>
        <BsThreeDots size={20} />
      </div>
      {children}

      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-x-4 text-2xl p-2">
          <span onClick={() => handleLike(post.id)}>
            {post.user_has_liked ? <ImHeart /> : <GrFavorite />}
          </span>
          <FaRegComment onClick={() => commentRef.current.focus()} />
          <span onClick={() => setShareModal(true)}>
            <FaTelegramPlane />
          </span>
        </div>
        <div onClick={handleSave} className=" text-2xl p-2">
          {saves.includes(post.id) ? <FaBookmark /> : <FaRegBookmark />}
        </div>
      </div>

      <div className="px-3 text-sm">
        <span className="font-semibold tracking-wider">
          {post.user.full_name} :{" "}
        </span>
        <span className="text-gray-500">{post.caption.text}</span>
      </div>

      {post.comments && (
        <div className="px-3 pt-3">
          {post.comments.map((v, i) => (
            <div key={i} className="py-0">
              <small className="bg-gray-100 text-gray-600 rounded-full px-2 py-0 tracking-wider">
                <span className=" font-semibold">Comment {i + 1}</span> :{" "}
                <span>{v}</span>
              </small>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={submitComment} className="flex items-center px-2 pt-3">
        <MdInsertEmoticon size={30} color="#999" />
        <input
          type="text"
          placeholder="Add a comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          ref={commentRef}
          className="w-full focus:border-none outline-none pl-4 text-sm"
        />
        <button className="font-sans tracking-wider text-cyan-300 text-sm">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostLayout;
