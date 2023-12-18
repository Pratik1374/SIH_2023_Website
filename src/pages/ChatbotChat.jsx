import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { MdSend } from "react-icons/md";
import { useInput } from "../context/InputContext";
import FeatureBar from "../components/FeatureBar";
import { BsRobot } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GrAttachment } from "react-icons/gr";
import ChatBoxLike from "../components/ChatBoxLike";

const ChatbotChat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loadingAnswer, setLoadingAnswer] = useState(false);
  const [inputQuestion, setInputQuestion] = useState("");

  useEffect(() => {
    // Dummy data for chat history
    const dummyChatHistory = [
      { question: "What is your name?", answer: "I am a chatbot." },
      {
        question: "How does the weather look today?",
        answer:
          "I don't have that information.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis, et earum velit dolorem quod modi quibusdam tempora fugiat voluptatum nam! Quo nobis iure sapiente animi sed porro cumque dolore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis, et earum velit dolorem quod modi quibusdam tempora fugiat voluptatum nam! Quo nobis iure sapiente animi sed porro cumque dolore.",
      },
    ];
    setChatHistory(dummyChatHistory);
  }, []);

  const handleSendClick = async () => {
    try {
      // Set loading state
      setLoadingAnswer(true);

      // Simulate fetching the answer (replace this with your actual logic)
      const answer = await fetchAnswerFromAPI(inputQuestion);
      // Update currentAnswer with the actual answer

      await new Promise((resolve) => {
        setTimeout(() => {
          setLoadingAnswer(false);
          resolve();
        }, 3000);
      });

      setInputQuestion("");

      if (inputQuestion) {
        setChatHistory((prevChats) => [
          ...prevChats,
          { question: inputQuestion, answer: answer },
        ]);
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
    } finally {
      // Reset loading state
      setLoadingAnswer(false);
      // Clear the inputQuestion state
      setInputQuestion("");
    }
  };

  const handleTextareaKeyDown = (e) => {
    // Check if the Enter key is pressed (key code 13) and Shift key is not pressed
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents the default behavior of adding a new line
      handleSendClick(); // Trigger the send click event
    }
  };

  const fetchAnswerFromAPI = async (question) => {
    // Replace this with your actual API call to get the answer
    // For simplicity, returning a dummy answer here
    return "I don't know the answer yet.";
  };

  return (
    <section className="flex flex-col lg:flex-row text-white">
      <Sidebar />
      <div className="w-full p-2">
        <div className="w-full flex items-center justify-center mb-2 overflow-hidden">
          <FeatureBar />
        </div>
        <div className="w-full h-full lg:h-[83vh] pl-3  lg:p-9 pt-0 lg:pt-2  overflow-auto scrollbar-thin scrollbar-thumb-gray-500  flex flex-col items-center justify-center">
          {/* Display previous questions and answers */}
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <div className="flex w-[80vw] lg:w-[60vw] flex-col p-2 ">
                <div className="flex items-center">
                  <div className="w-8 h-8  rounded-full overflow-hidden">
                    <CgProfile size={30} color="purple" />
                  </div>
                  <h2 className="ml-[10px] font-bold">You</h2>
                </div>
                <p className="ml-[40px]">{chat.question}</p>
              </div>
              <div className="flex w-[80vw] lg:w-[60vw] flex-col mt-1 mb-8 bg-[#101015] p-4 rounded-2xl">
                <div className="flex items-center">
                  <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                    <BsRobot size={30} color="violet" />
                  </div>
                  <h2 className="ml-[10px] font-bold">Chatbot</h2>
                </div>

                <p className="ml-[40px] py-1">{chat.answer}</p>

                <div>
                  <ChatBoxLike />
                </div>
              </div>
            </div>
          ))}

          {loadingAnswer ? (
            <div>
              <div className="flex w-[60vw] flex-col p-2">
                <div className="flex">
                  <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden">
                    <CgProfile size={30} color="purple" />
                  </div>
                  <h2 className="ml-[10px] font-bold">You</h2>
                </div>
                <p className="ml-[40px]">{inputQuestion}</p>
              </div>
              <div className="flex w-[80vw] lg:w-[60vw] flex-col mt-1 mb-8 bg-[#101015] p-4 rounded-2xl ">
                <div className="flex items-center">
                  <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                    <BsRobot size={30} color="violet" />
                  </div>
                  <h2 className="ml-[10px] font-bold">Chatbot</h2>
                </div>
                <div>Loading....</div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {/* input textarea */}
          <div className="absolute bottom-0 my-2  lg:ml-64 left-0  right-0 flex items-center justify-center p-3 ">
            <div className="rounded-full px-3  bg-[#1E1E24] w-[90vw] lg:w-[60vw] h-16 flex items-center justify-center space-x-2">
              {loadingAnswer ? (
                <>
                  <div className="w-full h-8  px-4 bg-transparent flex items-center focus:outline-none resize-none overflow-y-auto scrollbar-hidden overflow-hidden rounded-full">
                    Wait for response..
                  </div>
                  <button
                    className="w-14 h-12 flex items-center justify-center  lg:hover:bg-gray-700 rounded-full bg-[#2F2F34]"
                    onClick={handleSendClick}
                  >
                    <GrAttachment color="white" className="text-2xl" />
                  </button>
                  <button
                    disabled
                    className="w-20 h-12 flex items-center justify-center  lg:hover:bg-gray-700 rounded-full bg-[#AA69FF]"
                    onClick={handleSendClick}
                  >
                    <MdSend reac color="white" className="text-2xl" />
                  </button>
                </>
              ) : (
                <>
                  <input
                    id="textarea"
                    placeholder="Talk with Chat Bot"
                    className="w-full h-8 px-4 text-xl bg-transparent flex items-center focus:outline-none resize-none overflow-y-auto scrollbar-hidden overflow-hidden rounded-full"
                    onChange={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                      setInputQuestion(e.target.value);
                    }}
                    onKeyDown={handleTextareaKeyDown}
                    value={inputQuestion}
                  ></input>
                  <button
                    className="w-14 h-12 flex items-center justify-center  lg:hover:bg-gray-700 rounded-full bg-[#2F2F34]"
                    onClick={handleSendClick}
                  >
                    <GrAttachment color="white" className="text-2xl" />
                  </button>
                  <button
                    className="w-20 h-12 flex items-center justify-center  lg:hover:bg-gray-700 rounded-full bg-[#AA69FF]"
                    onClick={handleSendClick}
                  >
                    <MdSend reac color="white" className="text-2xl" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotChat;
