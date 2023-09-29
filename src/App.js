import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import IntroducePages from "./pages/IntroducePages";
import ExamPage from "./pages/ExamPage";
import ResultPage from "./pages/ResultPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/Introduce"
          element={<IntroducePages></IntroducePages>}
        ></Route>
        <Route path="/Exam" element={<ExamPage></ExamPage>}></Route>
        <Route path="/Result" element={<ResultPage></ResultPage>}></Route>
        <Route path="/Contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
