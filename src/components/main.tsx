import Calendar from "react-calendar";
import Tracker from "./tracker";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

type CalendarPiece = Date | null;
type CalendarValue = CalendarPiece | [CalendarPiece, CalendarPiece];

export default function Main() {
  const [date, setDate] = useState<CalendarValue>(new Date());

  return (
    <main className="app">
      <div className="container">
        <section className="section is-medium">
          <Calendar onChange={setDate} value={date} />
        </section>
        <section className="container">
          <Tracker date={date?.toString()} />
        </section>
      </div>
    </main>
  );
}
