import React, { useEffect, useState }  from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [onProgress, setProgress] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // if(data === []){
      fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',}
           
        })
      .then(res => {
        if (!res.ok) { 
          throw Error('Could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setProgress(false);
        setData(data);
        setError(null);
        
      })
      .catch(err => {
        setProgress(false);
        setError(err.message);
      });
  //}
  }, [url])

return { error, onProgress, data };
}
export default useFetch;