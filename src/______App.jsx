import React, { useState, useEffect } from "react";
import axios from "axios";

function Example() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "httpsyou://maps.googleapis.com/maps/api/place/autocomplete/json?input=Kandy,%20Sri%20Lanka&key=AIzaSyB1l49cKVDRZPBhwLoiAUiNGlxQGcBGmUs"
      )
      .then((response) => {
        console.log(response, "res");
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default Example;
