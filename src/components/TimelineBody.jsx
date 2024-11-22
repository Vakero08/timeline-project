import { Utils } from "../utils/utils";

export function TimelineBody({ data, filledDates }) {
  const renderTimelineEvents = () => {
    return data.map(event => {
      const startDate = new Date(event.start);
      // Find the index of the each date on events on the filledDates
      const findIndex = filledDates.findIndex(item => item.getTime() === startDate.getTime());
      const diffDays = Utils.diffDays(event.start, event.end);
      // Calculate the position based on the index
      const initialPosition = findIndex + 2;
      // Calculate width based on the index and diffDays
      const width = findIndex + diffDays + 2;

      return (
        <div
          key={event.id}
          className="bg-gray-200 h-full min-h-6 border-l-4 relative border-[orange] 
                     flex items-center justify-between p-2 rounded-sm"
          style={{
            gridColumn: `${initialPosition} / ${width}`,
          }}>
          {diffDays > 3 ? (
            <div className="flex justify-between w-full items-center">
              <span className="truncate flex-grow mr-2">{event.name}</span>
              <span className="text-gray-600 text-xs">Duration: {diffDays}d</span>
            </div>
          ) : (
            <span className="truncate w-full">{event.name}</span>
          )}
        </div>
      );
    });
  };

  return renderTimelineEvents();
}
