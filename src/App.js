import { useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import './App.css';


function App() {

  const [taskList, setTasklist] = useState([]);

  return (
    <div className="App">
      <Header/>
      <AddTask taskList={taskList} setTaskList={setTasklist}/>
      <ShowTask taskList={taskList} setTaskList={setTasklist}/>

    </div>
  );
}

export default App;
