import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log("1 sekund otti");
    }, 1_000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>About</div>;
};

export default About;
