import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import ChatbotHomepage from "./pages/ChatbotHomepage";
import SummarizationHomepage from "./pages/SummarizationHomepage";
import GrammarHomepage from "./pages/GrammarHomepage";
import ChatbotChat from "./pages/ChatbotChat";
import SummarizationChat from "./pages/SummarizationChat";
import GrammarChat from "./pages/GrammarChat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={"Homepage"} />
        <Route path="/chatbot" element={<ChatbotHomepage />} />
        <Route path="/chatbot/:chatId" element={<ChatbotChat />} />
        <Route path="/summarization" element={<SummarizationHomepage />} />
        <Route path="/summarization/:chatId" element={<SummarizationChat />} />
        <Route path="/grammar" element={<GrammarHomepage />} />
        <Route path="/grammar/:chatId" element={<GrammarChat />} />
      </Routes>
    </>
  );
}

export default App;
