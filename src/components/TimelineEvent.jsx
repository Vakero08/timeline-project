/* eslint-disable react/prop-types */

import { Utils } from "../utils/utils";
import { Tooltip } from "@nextui-org/tooltip";
import cx from "classnames";
import { ContentTooltip } from "./ContentTooltip";
export const StateEvent = {
  Finish: "Finish",
  Upcoming: "Upcoming",
  InProgress: "In Progress",
};
const TimelineEvent = ({ event, filledDates, onDateChange, setData }) => {
  const startDate = new Date(event.start);
  const endDate = new Date(event.end);
  const findIndex = filledDates.findIndex(item => item.getTime() === startDate.getTime());
  const diffDays = Utils.diffDays(event.start, event.end);
  const initialPosition = findIndex + 2;
  const width = findIndex + diffDays + 2;

  const stateEvent =
    endDate < new Date() ? StateEvent.Finish : startDate > new Date() ? StateEvent.Upcoming : StateEvent.InProgress;

  const handleMouseDown = (e, side) => {
    e.preventDefault();
    onDateChange(event.id, side);
  };

  const handleNameChange = e => {
    setData(prevData => {
      const newData = [...prevData];
      const index = newData.findIndex(item => item.id === event.id);
      newData[index].name = e.target.value;
      return newData;
    });
  };

  return (
    <div
      key={event.id}
      className={cx("bg-gray-200 h-full min-h-6 relative", "flex items-center justify-between ", "p-2 rounded-md")}
      style={{
        gridColumn: `${initialPosition} / ${width}`,
      }}>
      <div
        className={cx(
          "border-l-5  ",
          "absolute left-0 h-full rounded-md cursor-ew-resize",
          stateEvent === StateEvent.Finish && "border-l-[#BF9765]",
          stateEvent === StateEvent.InProgress && "border-l-[#557314]",
          stateEvent === StateEvent.Upcoming && "border-l-[#F28A2E]"
        )}
        onMouseDown={e => handleMouseDown(e, "start")}></div>
      <Tooltip showArrow={true} content={<ContentTooltip event={event} stateEvent={stateEvent} />}>
        {diffDays > 3 ? (
          <div className={cx("flex justify-between w-full items-center")}>
            <input
              className="truncate flex-grow mr-2 border-none bg-transparent !w-1/3"
              value={event.name}
              onChange={handleNameChange}
            />
            <span className="text-gray-600 text-xs">Duration: {diffDays}d</span>
          </div>
        ) : (
          <span className="truncate w-full">{event.name}</span>
        )}
      </Tooltip>

      <div
        className="absolute right-0 h-full rounded-sm w-1 cursor-ew-resize"
        onMouseDown={e => handleMouseDown(e, "end")}></div>
    </div>
  );
};

export default TimelineEvent;
