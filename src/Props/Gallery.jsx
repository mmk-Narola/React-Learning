import Profile from "./Profile";
import { useState, useEffect } from "react";

export default function Gallery() {
  return (
    <div>
      <Profile
        person={{
          imageId: "szV5sdG",
          name: "Maria Skłodowska-Curie",
          profession: "physicist and chemist",
          discovery: "polonium (chemical element)",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
        }}
        imageSize={50}
      />
      <Clock />
    </div>
  );
}

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <span>{date.toLocaleTimeString()}</span>;
}
