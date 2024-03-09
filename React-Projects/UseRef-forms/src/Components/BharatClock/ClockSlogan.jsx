import { useEffect, useState } from "react";

const ClockSlogan = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleDateString() + "-" + date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("canclied the interval");
    };
  }, []);

  return (
    <div>
      <p className="lead">
        This is the clock that shows the time in Bharat at all times
      </p>
      <p>This is the current time : {time}</p>
    </div>
  );
};
export default ClockSlogan;
