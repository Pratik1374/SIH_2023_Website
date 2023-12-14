import React from 'react'
import Sidebar from '../components/Sidebar'

const ChatbotChat = () => {
  return (
    <section className="flex flex-col lg:flex-row text-white">
      <Sidebar />
      {/* Option bar will be here */}
      <div className="w-full p-2">
        <div className="w-full flex justify-center items-center h-[100px] bg-gray-500">
          Chatbot, Summarization, Grammar
        </div>
        <div className="w-full h-screen">Hello</div>
      </div>
    </section>
  )
}

export default ChatbotChat