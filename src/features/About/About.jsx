import { useClicksStore } from "../../stores/clicks/clicks.store";

const About = () => {
  const { clicks } = useClicksStore();
  return (
    <>
      <h1>About us</h1>
      <p>We started with our journey long time ago.</p>
      <p>We want you and others to join us.</p>
      <p>Once you join there is no coming back, only forward.</p>
      <h3>Number of clicks from Click: {clicks} </h3>
    </>
  );
};

export default About;
