import { useEffect, useState } from "react";

const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState([]);

  // // ######################################################
  // // ######################################################
  // This is the wrong way to fetch any API_Data to our React Application because when we are fetching by this process then if we go to
  // inspect and then check the network then we can clearly see that the request for fetching the apiData is running in infinetly loop
  // and it is runnning again again constatly and by this process in our memory it will ocupy lots of unnecessary space which can creash
  // our react application.

  // So the better way is to fetch this apiData inside an useEffect hook so that it can only be fetch the data once when the app is loading
  // for the very first time. due to empty dependecy array inside the useEffect hooks.
  // // ######################################################
  // // ######################################################
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApiData(data);
  //     })
  //     .catch((err) => console.log(err));

  return (
    <>
      <div id="container">
        <ul>API_Data</ul>
        {apiData.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </div>
    </>
  );
};

export default HowNotToFetchApi;
