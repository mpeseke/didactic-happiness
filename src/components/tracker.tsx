import { useEffect, useState } from "react";
import { getAllExercises } from "../api/exercisesApi";

interface TrackerProps {
  date: string | undefined;
}

export default function Tracker({ date }: TrackerProps) {
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllExercises();
      console.log("This:", data);
      setExercises(data);
    };

    fetchData();
  }, []);

  if (!exercises) {
    return (
      <div>
        <h2>No exercises found</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{date ? <span>{date}</span> : <span>{"No date selected."}</span>}</h2>
      <div></div>
    </div>
  );
}
