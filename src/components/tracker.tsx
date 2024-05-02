interface TrackerProps {
  date: Date | null;
}

export default function Tracker({ date }: TrackerProps) {
  return (
    <>
      {date ? <div>{date.toDateString()}</div> : <div>No date selected.</div>}
    </>
  );
}
