import React from "react";
import { useContext } from "../../Contexts/GContext";

const Rightbar = () => {
  const { posts } = useContext();

  return (
    <React.Fragment>
      <div className="flex items-center gap-x-2 mt-5">
        <img
          src={
            "https://cdn.vox-cdn.com/thumbor/e1muTVNjYyNiXo90Fdvzln1K5qw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22517837/1318236188.jpg"
          }
          alt=""
          width={55}
          height={55}
          className="rounded-full border-2 border-cyan-500"
        />
        <div>
          <h3 className="font-semibold text-sm leading-none">Kaushik Dey</h3>
          <small className="dark:text-gray-500 leading-none">kaushik_dey</small>
        </div>
        <div className=" flex-auto" />
        <p className="font-semibold text-blue-600 text-xs">Switch</p>
      </div>

      <div className="flex justify-between items-center my-5">
        <p className="font-semibold tracking-wider text-gray-500">
          Suggestions For You
        </p>
        <small>See All</small>
      </div>

      {posts.slice(0, 7).map((_, i) => (
        <div key={i} className="flex items-center gap-x-2 mb-3">
          <img
            src={
              "https://cdn.vox-cdn.com/thumbor/e1muTVNjYyNiXo90Fdvzln1K5qw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22517837/1318236188.jpg"
            }
            alt=""
            width={38}
            height={38}
            className="rounded-full"
          />
          <div>
            <h3 className="font-bold text-xs leading-none">
              {_.user.full_name}
            </h3>
            <small className="dark:text-gray-500 leading-none">
              Suggested for you
            </small>
          </div>
          <div className=" flex-auto" />
          <p className="font-semibold text-blue-600 text-xs">Follow</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Rightbar;
