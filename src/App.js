import styles from "./App.module.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import MainList from "./components/MainList";
import Content from "./components/Content";
import { useState } from "react";

let data = [
  {
    id: Date.now() + Math.random(),
    description: "把冰箱發霉的檸檬拿去丟",
    done: true,
  },
  {
    id: Date.now() + Math.random(),
    description: "打電話叫媽媽匯款給我",
    done: false,
  },
  {
    id: Date.now() + Math.random(),
    description: "整理電腦資料夾",
    done: false,
  },
  {
    id: Date.now() + Math.random(),
    description: "繳電費水費瓦斯費",
    done: false,
  },
  {
    id: Date.now() + Math.random(),
    description: "約vicky禮拜三泡溫泉",
    done: false,
  },
  {
    id: Date.now() + Math.random(),
    description: "約ada禮拜四吃晚餐",
    done: false,
  },
];

function App() {
  const [input, setInput] = useState("");
  const [todoData, setTodoData] = useState(data);

  return (
    <div className={styles.App}>
      <Header />
      <TodoInput
        input={input}
        setInput={setInput}
        todoData={todoData}
        setTodoData={setTodoData}
      />
      <MainList>
        <Content todoData={todoData} setTodoData={setTodoData} />
      </MainList>
    </div>
  );
}

export default App;
