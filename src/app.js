import React from "react";
import ReactDom from "react-dom";
import styles from "./index.module.css";
import Counter from "./counter";
function App() {
  return (
    <>
      <div className={styles.myDiv}>
        sam
        <p>abdar</p>
        <Counter></Counter>
      </div>
    </>
  );
}

ReactDom.render(<App></App>, document.getElementById("root"));
