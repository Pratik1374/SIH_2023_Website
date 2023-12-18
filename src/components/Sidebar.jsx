import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { MdMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../src/AlgoAlliance_logo.png";
// import axios from "axios";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [chats, setChats] = useState([
    { id: 1, title: "Chat 1", chat_type: "Type A" },
    { id: 2, title: "Chat 2", chat_type: "Type B" },
    { id: 3, title: "Chat 3", chat_type: "Type C" },
    { id: 4, title: "Chat 1", chat_type: "Type A" },
    { id: 5, title: "Chat 3", chat_type: "Type C" },
    { id: 6, title: "Chat 1", chat_type: "Type A" },
    { id: 7, title: "Chat 2", chat_type: "Type B" },
    { id: 8, title: "Chat 3", chat_type: "Type C" },
    { id: 9, title: "Chat 1", chat_type: "Type A" },
    { id: 10, title: "Chat 2", chat_type: "Type B" },
    { id: 11, title: "Chat 3", chat_type: "Type C" },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("your-initial-api-endpoint")
  //     .then((response) => setChats(response.data))
  //     .catch((error) => console.error("Error fetching chats:", error));
  // }, []);

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const handleChatClick = (chatId) => {
    // Programmatically navigate to the chat page
    navigate(`/chatbot/${chatId}`);
  };

  const handleNewChatClick = () => {
    navigate("/chatbot");

    // Close the sidebar on mobile if it's open
    isTabletMid && setOpen(false);
  };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998]${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-[#101015] text-white shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed h-screen "
      >
        <div className="mx-2 my-3 px-3 py-1">
          <img src={logo} alt="" />
        </div>
        <div className="my-8 flex items-center max-w-[16rem] w-[16rem] justify-center ">
          <div className="flex items-center justify-center py-2 w-56 space-x-3 bg-[#AA69FF] hover:opacity-90 rounded-full cursor-pointer">
            <FaPlus className="text-xl relative end-10"/>
            <div
              className="flex justify-center items-center mr-[30px]"
              onClick={() => handleNewChatClick()}
            >
              <h2 className="font-bold text-lg relative end-3">New Chat</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[65vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 mx-3">
          {chats.map((chat, index) => (
            <NavLink
              key={index}
              to={`/chatbot/${chat.id}`}
              className="text-white no-underline"
            >
              <div
                className={`flex rounded-md mx-2 p-2 max-h-10 h-10 my-1 mb-2 cursor-pointer hover:bg-gray-600 ${
                  window.location.pathname === `/chatbot/${chat.id}`
                    ? "bg-[#2B2B2F]"
                    : "bg-[#19191E]"
                }`}
                onClick={() => handleChatClick(chat.id)}
              >
                <h1 className="truncate">{chat.title}</h1>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <div className="flex items-center justify-center mt-auto w-56 p-1 overflow-hidden py-2 fixed">
            <div className="flex items-center w-full bg-[#15151B] px-5 py-4 rounded-3xl">
            <img
              src="https://picsum.photos/200/300"
              alt=""
              className="rounded-full h-[50px] w-[50px] max-h-[34px]  max-w-[34px]"
            />
            <div className="overflow-hidden max-h-[50px] max-w-[140px]">
              <h1 className="ml-2 font-bold truncate text-xs">Username</h1>
              <h1 className="ml-2 font-bold truncate text-xs">user@gmail.com</h1>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
