import Calendar from "react-calendar";
import Tracker from "./tracker";
import { useState } from "react";

type CalendarPiece = Date | null;
type CalendarValue = CalendarPiece | [CalendarPiece, CalendarPiece];

export default function Main() {
  const [date, setDate] = useState<CalendarValue>(new Date());

  return (
    <main>
      <Calendar onChange={setDate} value={date} />
      <Tracker date={date} />
    </main>
  );
}
