import React from "react";
import "./style.css";

const styles = {
  headline: {
    textAlign: "center",
    maxWidth:"30%",
    boxShadow:"0 0 20px 1px #555",
    margin:"auto",
    marginTop:"40px",
    marginBottom:"20px",
    padding: "20px",
    backgroundColor:"white",
    border:"10px solid #F7E200",
    borderRadius:"5px"
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
