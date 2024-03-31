import { useState } from "react";
import "./Tasks.css";
import Task from "./components/Task";

const Tasks = () => {
  const [task, setTask] = useState([
    {
      imgUrl: "https://www.svgrepo.com/show/476166/three-points.svg",
      heading: "Open",
      paragraph: "Tasks",
      numberTask: 223,
      color: "#F28500",
    },
    {
      imgUrl: "https://cdn-icons-png.flaticon.com/512/118/118165.png",
      heading: "Pending",
      paragraph: "Tasks",
      numberTask: 57,
      color: "#9370DB",
    },
    {
      imgUrl:
        "https://www.shareicon.net/download/2015/12/13/686652_clipboard_512x512.png",
      heading: "Completed",
      paragraph: "Tasks",
      numberTask: 1425,
      color: "#3eb489",
    },
  ]);

  return (
    <>
      <div className="firstDiv">
        <img
          className="imgHeadCss"
          src="https://cdn-icons-png.freepik.com/512/65/65608.png"
          alt="icon"
        />
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
