import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Modal } from "../../../components/Modals/Modal";
import { responsive1 } from "../../../utils/responsive";

const Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded my-5 p-4">
      <Carousel responsive={responsive1}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setOpen(true)}
            className="grid justify-center text-center cursor-pointer"
          >
            <img
              src={
                "https://cdn.vox-cdn.com/thumbor/e1muTVNjYyNiXo90Fdvzln1K5qw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22517837/1318236188.jpg"
              }
              alt="instagran story"
              width={60}
              height={60}
              className="rounded-full border-2 border-red-500"
            />
            <h3 className="text-xs font-semibold">Someone</h3>
          </div>
        ))}
      </Carousel>

      <Modal open={open} handleClose={() => setOpen(false)} clses="h-screen">
        <div>
          <img
            src={
              "https://cdn.vox-cdn.com/thumbor/e1muTVNjYyNiXo90Fdvzln1K5qw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22517837/1318236188.jpg"
            }
            alt="alternative"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Story;
