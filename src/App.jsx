import React, { useState } from "react";
import "./styles.css";
import { Journal } from "./components/journal";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [menuId, setMenuId] = useState("");

  const onChangeTodoText = (event) => setInputText(event.target.value);
  const onClickGo = () => {
    setMenuId(inputText);
  };

  return (
    <>
      <h2>Select Menu </h2>
      <input
        placeholder="画面IDを入力"
        value={inputText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickGo}>GO!</button>
      {menuId === "" || <Journal menuId={menuId} />}
    </>
  );
}
