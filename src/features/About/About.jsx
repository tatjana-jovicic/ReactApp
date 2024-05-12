import { useClicksStore } from "../../stores/clicks/clicks.store";

const About = () => {
  const { clicks } = useClicksStore();
  return (
    <>
      <h1>About me</h1>
      <p>I started with my journey long time ago.</p>
      <p>I want you and others to join me.</p>
      <p>Once you join there is no coming back, only forward.</p>
      <button className="button">Number of clicks from Click: {clicks} </button>
    </>
  );
};

export default About;
