import { useState } from "react";
import "./App.css";
import logo from "../src/assets/img/logo.png";

const App = () => {
  const [task, setTask] = useState("");
  const [tab, setTab] = useState([]);
  const [check, setCheck] = useState(false);

  return (
    <div>
      <header>
        <img src={logo} alt="" />
        <h1>To Do List</h1>
      </header>

      <div className="tasktodisplay">
        {tab.map((elem) => {
          return (
            <div className="tasktodisplay2">
              <input
                className="checkbox"
                type="checkbox"
                onClick={() => {
                  {
                    check === false ? setCheck(true) : setCheck(false);
                  }
                }}
              />
              <p className={check === true ? "check" : null}>{elem}</p>
            </div>
          );
        })}
      </div>

      <div className="container">
        <input
          className="tasktoadd"
          placeholder="New task"
          type="text"
          name="task"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />

        <button
          className="addtask"
          onClick={() => {
            const newTab = [...tab];
            newTab.push(task);
            setTab(newTab);
            console.log(tab);
          }}
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default App;
