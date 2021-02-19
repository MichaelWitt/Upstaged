import React from "react";
import NewsHeader from "../components/News/NewsHeader";
import News from "../components/News/News";
import AppNav from "../components/Navbar";


function NewsPage() {
  return (
    <div>
      <AppNav />      
      <NewsHeader />
      <News />
    </div>
  );
}

export default NewsPage;
