import { useClicksStore } from "../../stores/clicks/clicks.store";

const Home = () => {
  const { decrementNumberOfClicks } = useClicksStore();
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to our site!</p>
      <p>We are here to help in any way we can!</p>
      <button onClick={() => decrementNumberOfClicks()}>
        Remove click from Clicks
      </button>
    </>
  );
};

export default Home;
