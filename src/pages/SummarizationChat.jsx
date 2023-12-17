import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { MdSend } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";
import { useInput } from "../context/InputContext";
import FeatureBar from "../components/FeatureBar";
import { BsRobot } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const SummarizationChat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loadingAnswer, setLoadingAnswer] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Dummy data for chat history
    const dummyChatHistory = [
      {
        file_name: "first file.pdf",
        summary:
          "I don't have that information.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis, et earum velit dolorem quod modi quibusdam tempora fugiat voluptatum nam! Quo nobis iure sapiente animi sed porro cumque dolore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis, et earum velit dolorem quod modi quibusdam tempora fugiat voluptatum nam! Quo nobis iure sapiente animi sed porro cumque dolore.",
      },
      {
        file_name: "second file.pdf",
        summary:
          "I don't have that information.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis, et earum velit dolorem quod modi quibusdam tempora fugiat voluptatum nam! Quo nobis iure sapiente animi sed porro cumque dolore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis, et earum velit dolorem quod modi quibusdam tempora fugiat voluptatum nam! Quo nobis iure sapiente animi sed porro cumque dolore.",
      },
    ];
    setChatHistory(dummyChatHistory);
  }, []);

  const fetchAnswerFromAPI = async (file) => {
    // Replace this with your actual API call to get the answer
    // For simplicity, returning a dummy answer here

    return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum, autem, tenetur repellendus illo officiis dignissimos similique dolorem, nostrum reiciendis quam laborum eius placeat pariatur officia atque beatae exercitationem fugiat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum, autem, tenetur repellendus illo officiis dignissimos similique dolorem, nostrum reiciendis quam laborum eius placeat pariatur officia atque beatae exercitationem fugiat";
  };

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      setSelectedFile(file);
      
      // Set loading state
      setLoadingAnswer(true);

      // Simulate fetching the answer (replace this with your actual logic)
      const answer = await fetchAnswerFromAPI(file);
      // Update currentAnswer with the actual answer

      await new Promise((resolve) => {
        setTimeout(() => {
          setLoadingAnswer(false);
          resolve();
        }, 3000);
      });


      if (file) {
        setChatHistory((prevChats) => [
          ...prevChats,
          { file_name: file.name, summary: answer },
        ]);
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
    } finally {
      // Reset loading state
      setLoadingAnswer(false);
      // Clear the inputQuestion state
    }
  };

  const handleIconClick = () => {
    // Trigger the file input when the icon is clicked
    document.getElementById("fileInput").click();
  };

  return (
    <section className="flex flex-col lg:flex-row text-white">
      <Sidebar />
      <div className="w-full p-2">
        <div className="w-full flex items-center justify-center mb-2 overflow-hidden">
          <FeatureBar />
        </div>
        <div className="w-full h-[65vh] lg:h-[70vh] pl-3 lg:p-9 pt-1 lg:pt-2 lg:pl-24 overflow-auto scrollbar-thin scrollbar-thumb-gray-500">
          {/* Display previous questions and answers */}
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <div className="flex w-[80vw] lg:w-[60vw] flex-col p-2">
                <div className="flex">
                  <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden">
                    <CgProfile size={30} color="purple" />
                  </div>
                  <h2 className="ml-[10px] font-bold">You</h2>
                </div>
                <p className="ml-[40px]">Filename : {chat.file_name}</p>
              </div>
              <div className="flex w-[80vw] lg:w-[60vw] flex-col mt-1 mb-8 bg-[#080808] p-2 rounded-md shadow-md shadow-gray-800">
                <div className="flex">
                  <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden">
                    <BsRobot size={30} color="violet" />
                  </div>
                  <h2 className="ml-[10px] font-bold">Chatbot</h2>
                </div>
                <p className="ml-[40px] py-1">{chat.summary}</p>
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
                <p className="ml-[40px]">Filename : {selectedFile.name}</p>
              </div>
              <div className="flex w-[80vw] lg:w-[60vw] flex-col mt-1 mb-8 bg-[#080808] p-2 rounded-md shadow-md shadow-gray-800">
                <div className="flex">
                  <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden">
                    <BsRobot size={30} color="violet" />
                  </div>
                  <h2 className="ml-[10px] font-bold">Chatbot</h2>
                </div>
                <div>Loading.............................</div>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="absolute bottom-0 mt-2 left-0 lg:left-[16rem] right-0 flex items-center justify-center p-3 lg:-ml-11">
            {loadingAnswer ? (
              <>
                <div
                  className="cursor-not-allowed pr-2 lg:-ml-10 opacity-40 flex flex-col justify-center items-center"
                  onClick={handleIconClick}
                >
                  <TbFileUpload size={50} color="violet" />
                </div>
                <input
                  disabled
                  id="fileInput"
                  type="file"
                  accept=".pdf" // Specify the allowed file types if needed
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer pr-2 lg:-ml-10 flex flex-col justify-center items-center"
                  onClick={handleIconClick}
                >
                  <p className="animate-bounce text-sm text-purple-300">
                    Upload File{" "}
                  </p>
                  <TbFileUpload size={50} color="violet" />
                </div>
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf" // Specify the allowed file types if needed
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarizationChat;
