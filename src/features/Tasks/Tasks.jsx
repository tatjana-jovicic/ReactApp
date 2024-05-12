import { useState } from "react";
import "./Tasks.css";
import Task from "./components/Task";
import ThreePoints from "../../assets/three-points.svg";
import Clock from "../../assets/clock.png";
import Clipboard from "../../assets/clipboard.png";
import TaskIcon from "../../assets/tasks.png";

const Tasks = () => {
  const [task, setTask] = useState([
    {
      imgUrl: ThreePoints,
      heading: "Open",
      paragraph: "Tasks",
      numberTask: 223,
      color: "#F28500",
    },
    {
      imgUrl: Clock,
      heading: "Pending",
      paragraph: "Tasks",
      numberTask: 57,
      color: "#9370DB",
    },
    {
      imgUrl: Clipboard,
      heading: "Completed",
      paragraph: "Tasks",
      numberTask: 1425,
      color: "#3eb489",
    },
  ]);

  return (
    <>
      <div className="firstDiv">
        <img className="imgHeadCss" src={TaskIcon} alt="icon" />
        <p className="taskStatusCss">My Tasks Stats</p>
      </div>
      <div className="tasksCss">
        {task.map((task) => (
          <div className="taskCss">
            <Task
              imgUrl={task.imgUrl}
              heading={task.heading}
              paragraph={task.paragraph}
              numberTask={task.numberTask}
              color={task.color}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Tasks;
