import React from "react";
import NewsHeader from "../components/News/NewsHeader";
import NewsNavbar from "../components/News/NewsNavbar";
import News from "../components/News/News";

function NewsPage() {
  return (
    <div>
      <NewsHeader />
      <NewsNavbar />
      <News />
    </div>
  );
}

export default NewsPage;
