import { useEffect, useState } from "react";
import { getAllExercises } from "../api/exercisesApi";

interface Exercise {
  id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

interface TrackerProps {
  date: string | undefined;
}

export default function Tracker({ date }: TrackerProps) {
  const [exercises, setExercises] = useState<Exercise[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllExercises();
        setExercises(data);
      } catch (error) {
        console.error("failed to fetch exercises", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>{date ? <span>{date}</span> : <span>{"No date selected."}</span>}</h2>
      <div>
        {exercises ? (
          exercises.map((exercise) => (
            <div key={exercise.id}>{exercise.name}</div>
          ))
        ) : (
          <span>Loading exercises...</span>
        )}
      </div>
    </div>
  );
}
