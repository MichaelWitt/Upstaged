import React from "react";
import NewsHeader from "../components/News/NewsHeader";
import News from "../components/News/News";
import AppNav from "../components/Navbar";
import Confetti from "../components/News/Confetti";

function NewsPage() {
  return (
    <div>
      <Confetti />
      <AppNav />
      <NewsHeader />
      <News />
    </div>
  );
}

export default NewsPage;
