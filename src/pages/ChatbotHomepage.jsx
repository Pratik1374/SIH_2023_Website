import React from "react";
import Sidebar from "../components/Sidebar";
import { MdSend } from "react-icons/md";

const ChatbotHomepage = () => {

  const handleSendClick = () => {
    ///api call to create new chat will be made and input query will be passed to ChatbotChat component
  }; 

  return (
    <section className="flex flex-col lg:flex-row text-white">
      <Sidebar />
      {/* Option bar will be here */}
      <div className="w-full p-2">
        <div className="w-full flex justify-center items-center h-[70px] bg-gray-500">
          Chatbot, Summarization, Grammar
        </div>
        <div className="w-full h-[60vh] lg:h-[80vh] p-9 lg:pl-24 overflow-hidden">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold font-serif shadow-sm ">
              Hello Learner,
            </h1>
            <p>Ask me anything...</p>
          </div>
          <div className="flex flex-wrap mt-4 gap-4 h-[50vh] lg:h-[50vh] overflow-auto">
            <div className="flex flex-col p-4 items-start justify-center bg-gray-800 rounded-lg">
              <p className="my-3 text-lg font-bold">Analyze your documents</p>
              <p className="my-3">Lorem ipsum dolor sit amet consectetur </p>
              <p className="my-3">Lorem ipsum dolor sit amet consectetur </p>
              <p className="my-3">Lorem ipsum dolor sit amet consectetur </p>
            </div>
            <div className="flex flex-col p-4 items-start justify-center bg-gray-800 rounded-lg">
              <p className="my-3 text-lg font-bold">Analyze your documents</p>
              <p className="my-3">Lorem ipsum dolor sit amet consectetur </p>
              <p className="my-3">Lorem ipsum dolor sit amet consectetur </p>
              <p className="my-3">Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 my-2 left-0 lg:left-[16rem] right-0 flex items-center justify-center p-3">
          <div className="rounded-full px-3 py-1 bg-gray-800 w-[90vw] lg:w-[60vw] flex shadow-sm shadow-gray-100 relative items-center overflow-hidden">
            <textarea
              placeholder="Enter your question here..."
              className="w-full bg-transparent h-[40px] max-h-[200px] focus:outline-none resize-none overflow-y-auto scrollbar-hidden items-center overflow-hidden translate-y-2"
            ></textarea>
            <button className="w-[40px] h-[40px] p-1 hover:bg-gray-700 rounded-full translate-y-1" onClick={handleSendClick}>
              <MdSend size={30} color="violet" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotHomepage;
