import { useState, useEffect } from "react";
import { single } from "rxjs-compat/operator/single";
const useFetch = () => {
  const [blogs, setBlog] = useState(null);
  const [isPending, setpending] = useState(true);
  const [error, setError] = useState(null);

  // the second argument "[]" is the dependency arrya which prevents the code to run after every render
  // any argument given in the dependency array. the code runs only then that argument code is runed, as i give 'another' as argument
  useEffect(
    (url) => {
        const abortcont = new AbortController();
      // here we are rendering the data from the json file
      fetch(url, {signle:abortcont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("data could not found to fetch ");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlog(data);
          setpending(false);
          setError(null);
        })
        .catch((e) => {
            if ( e.name ==='AbortError'){
                console.log('fetch absorted')
            }else{

                setpending(false);
                console.log(e.message);
                setError(e.message);
            }
        });
        return ()=> console.log("cleanup")
    },
    [url]
  );
  return blogs, isPending, error;
};

export default useFetch;
