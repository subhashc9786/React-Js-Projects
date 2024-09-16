import React, { useEffect, useState } from "react";

const Fetchmethod = () => {
  const [data, setData] = useState();

  console.log("data", data)
  
  useEffect(() => {
    (() => {
      try {
        fetch("https://site.com/")
          .then((respone) => respone.json())
          .then((data) => setData(data));
      } catch (error) {}
    })();
  }, []);

  return <div>fetchmethod</div>;
};

export default Fetchmethod;
