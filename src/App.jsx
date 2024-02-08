import React from "react";
import Navbar from "./components/Navber/Navbar";
import Business from "./components/Business/Business";
import IntroduceHero from "./components/IntroduceHero/IntroduceHero";
import CardScroll from "./components/CardScroll/CardScroll";
import MonthlyPlan from "./components/MonthlyPlan/MonthlyPlan";
import ReviewPublic from "./components/ReviewPublic/ReviewPublic";

function App() {
  return (
    <div>
      <Navbar />
      <Business />
      <IntroduceHero />
      <CardScroll />
      <MonthlyPlan />
      <ReviewPublic />
    </div>
  );
}

export default App;
