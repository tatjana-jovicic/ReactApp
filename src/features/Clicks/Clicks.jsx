import { useState } from "react";
import { useClicksStore } from "../../stores/clicks/clicks.store";
import Click from "./components/Click";

const Clicks = () => {
  const [numberToAdd, setNumberToAdd] = useState(0);
  const {
    clicks,
    incrementNumberOfClicks,
    decrementNumberOfClicks,
    addMultiNumberToClick,
    resetClicksCount,
  } = useClicksStore();

  return (
    <div>
      <h2>CLICKS</h2>
      <button className="button" onClick={() => incrementNumberOfClicks()}>
        Add Click
      </button>
      <button className="button" onClick={() => resetClicksCount()}>
        Reset Clicks
      </button>
      <Click numberOfClicks={clicks} />
      <button
        className="button"
        onClick={() => setNumberToAdd(numberToAdd + 1)}
      >
        Number To Add
      </button>
      <h2>Number to add: {numberToAdd}</h2>
      <button
        className="button"
        onClick={() => addMultiNumberToClick(numberToAdd)}
      >
        Add Number To Global Store Clicks
      </button>
    </div>
  );
};
export default Clicks;
