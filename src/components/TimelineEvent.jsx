/* eslint-disable react/prop-types */

import { Utils } from "../utils/utils";

const TimelineEvent = ({ event, filledDates, onDateChange }) => {
  const startDate = new Date(event.start);
  const findIndex = filledDates.findIndex(item => item.getTime() === startDate.getTime());
  const diffDays = Utils.diffDays(event.start, event.end);
  const initialPosition = findIndex + 2;
  const width = findIndex + diffDays + 2;

  const handleMouseDown = (e, side) => {
    e.preventDefault();
    onDateChange(event.id, side);
  };

  return (
    <div
      key={event.id}
      className="bg-gray-200 h-full min-h-6 relative flex items-center justify-between p-2 rounded-sm"
      style={{
        gridColumn: `${initialPosition} / ${width}`,
      }}>
      <div
        className="border-l-4 border-[orange] absolute left-0 h-full rounded-sm cursor-ew-resize"
        onMouseDown={e => handleMouseDown(e, "start")}></div>
      {diffDays > 3 ? (
        <div className="flex justify-between w-full items-center">
          <span className="truncate flex-grow mr-2">{event.name}</span>
          <span className="text-gray-600 text-xs">Duration: {diffDays}d</span>
        </div>
      ) : (
        <span className="truncate w-full">{event.name}</span>
      )}
      <div
        className="absolute right-0 h-full rounded-sm w-1 cursor-ew-resize"
        onMouseDown={e => handleMouseDown(e, "end")}></div>
    </div>
  );
};

export default TimelineEvent;
