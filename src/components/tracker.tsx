import { ChangeEvent, useEffect, useState } from "react";
import { getAllExercises, getBodyParts } from "../api/exercisesApi";
import { BodyPart, Exercise } from "../models/models";

interface TrackerProps {
  date: string | undefined;
}

export default function Tracker({ date }: TrackerProps) {
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const [bodyParts, setBodyParts] = useState<string[] | null>(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>(
    "--Please choose a target body part--"
  );

  const handleBodyPartSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedBodyPart(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bodyParts = await getBodyParts();
        setBodyParts(bodyParts);
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
        <select value={selectedBodyPart} onChange={handleBodyPartSelect}>
          {bodyParts === null ? (
            <option value="loading">Loading target body parts options.</option>
          ) : (
            <>
              <option value="not selected">
                --Please choose a target body part--
              </option>
              {bodyParts?.map((bodyPart, index) => (
                <option key={index} value={bodyPart}>
                  {bodyPart}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
    </div>
  );
}
