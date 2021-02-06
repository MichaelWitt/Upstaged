import React from "react";
import "./style.css";

const styles = {
  headline: {
    textAlign: "center",
  },
};

function NewsHeader() {
  return (
    <header className="header">
      <h1 style={styles.headline}>UPSTAGED</h1>
    </header>
  );
}

export default NewsHeader;
