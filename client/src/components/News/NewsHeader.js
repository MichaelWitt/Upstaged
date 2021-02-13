import React from "react";
import "./style.css";

const styles = {
  headline: {
    textAlign: "center",
    padding: "20px",
  },
};

function NewsHeader() {
  return (
    <header className="header">
      <h1 style={styles.headline}>Theatre News</h1>
    </header>
  );
}

export default NewsHeader;
