import "./Task.css";

const Task = ({ imgUrl, heading, paragraph, numberTask, color }) => {
  return (
    <div className="taskCss" style={{ backgroundColor: color }}>
      <img className="imgCss" src={imgUrl} alt="picture" />
      <p className="headingCss">
        {heading} {paragraph}
        <p className="numberCss">{numberTask}</p>
      </p>
    </div>
  );
};
export default Task;
