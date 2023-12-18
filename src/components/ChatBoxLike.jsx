import { MdContentCopy } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FiRotateCw } from "react-icons/fi";
const ChatBoxLike = () => {

  return (
    <>
      <div className="flex mt-3 space-x-2 h-6 w-6 transition duration-200 relative bottom-0  ">
        <div className="h-7 w-7 p-1 text-2xl bg-white/30 flex items-center gap-3 rounded-full hover:bg-white/50">
          <MdContentCopy/>
        </div>
        <div className="h-7 w-7 p-1 text-2xl bg-white/30 flex items-center gap-3 rounded-full hover:bg-white/50">
          <AiOutlineLike/>
        </div>
        <div className="h-7 w-7 p-1 text-2xl bg-white/30 flex items-center gap-3 rounded-full hover:bg-white/50">
          <AiOutlineDislike/>
        </div>
        <div className="h-7 w-7 p-1 text-2xl bg-white/30 flex items-center gap-3 rounded-full hover:bg-white/50">
          <FiRotateCw/>
        </div>
      </div>
    </>
  );
};

export default ChatBoxLike;
