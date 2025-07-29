import { useEffect, useState } from "react";

function CountUp({ end, duration = 1000 } : {end : number  , duration : number}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // run ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className=" text-2xl">{count}%</span>;
}

export default CountUp;
