import useFetch from "../hooks/useFetch";

const About = () => {
  const [data, loading, isError, error] = useFetch("/photos");

  if (isError) console.log(error);

  // useEffect(() => {
  //   let intervalId = setInterval(() => {
  //     console.log("1 sekund otti");
  //   }, 1_000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return isError ? (
    <h1>An error is occurred! Look at the console</h1>
  ) : loading ? (
    <h1>Loading....</h1>
  ) : (
    <div>About {JSON.stringify(data)}</div>
  );
};

export default About;
