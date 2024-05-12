import { useClicksStore } from "../../stores/clicks/clicks.store";
import "./Home.css";

const Home = () => {
  const { decrementNumberOfClicks } = useClicksStore();

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to my site!</p>
      <p>I am here to help in any way i can!</p>
      <button className="button" onClick={() => decrementNumberOfClicks()}>
        Remove click from Clicks
      </button>
    </>
  );
};

export default Home;
