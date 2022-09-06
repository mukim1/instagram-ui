import { Fragment, useState } from "react";
import Carousel from "react-multi-carousel";
import { Modal } from "../../../components/Modals/Modal";
import PostLayout from "../../../components/Layouts/PostLayout";
import { useContext } from "../../../Contexts/GContext";
import { responsive2 } from "../../../utils/responsive";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Posts = () => {
  const { posts } = useContext();
  const [shareModal, setShareModal] = useState(false);

  return (
    <Fragment>
      {posts.map((v) => (
        <PostLayout key={v.id} post={v} setShareModal={setShareModal}>
          <Carousel responsive={responsive2} arrows={false} showDots={true}>
            <img
              src={
                "https://cdn.vox-cdn.com/thumbor/e1muTVNjYyNiXo90Fdvzln1K5qw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22517837/1318236188.jpg"
              }
              alt=""
              width={500}
              height={500}
            />
            <img
              src={
                "https://cdn.vox-cdn.com/thumbor/e1muTVNjYyNiXo90Fdvzln1K5qw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22517837/1318236188.jpg"
              }
              alt=""
              width={500}
              height={500}
            />
          </Carousel>
        </PostLayout>
      ))}

      <Modal
        open={shareModal}
        handleClose={() => setShareModal(false)}
        clses="p-3 flex justify-center gap-x-4"
      >
        <EmailShareButton url="facebook.com">
          <MdEmail />
        </EmailShareButton>
        <FacebookShareButton url="facebook.com">
          <FiFacebook />
        </FacebookShareButton>
        <TwitterShareButton url="twitter.com">
          <FiTwitter />
        </TwitterShareButton>
      </Modal>
    </Fragment>
  );
};

export default Posts;
