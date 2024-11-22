/* eslint-disable react/prop-types */
import { useResize } from "../hooks/useResize";
import TimelineEvent from "./TimelineEvent";

export function TimelineBody({ data, filledDates, setData, zoom }) {
  const { handleDateChange } = useResize(data, filledDates, setData, zoom);

  return (
    <>
      {data.map(event => (
        <TimelineEvent key={event.id} event={event} filledDates={filledDates} onDateChange={handleDateChange} />
      ))}
    </>
  );
}
