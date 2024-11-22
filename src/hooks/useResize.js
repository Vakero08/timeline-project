import { useState, useCallback, useEffect } from "react";

export function useResize(data, fillDates, setData, zoom) {
  const [resizeState, setResizeState] = useState(null);

  const handleDateChange = (eventId, side) => {
    setResizeState({
      eventId,
      side,
      originalEvent: data.find(e => e.id === eventId),
    });
  };

  const handleResizeMove = useCallback(
    e => {
      if (!resizeState) return;

      const deltaPosition = Math.ceil(e.clientX / (50 * zoom));

      setData(prev =>
        prev.map(event => {
          if (event.id !== resizeState.eventId) return event;

          const newEvent = { ...event };
          if (resizeState.side === "start") {
            const newStart = fillDates[deltaPosition - 2];
            if (newStart < new Date(event.end)) {
              newEvent.start = newStart.toISOString().split("T")[0];
            }
          } else {
            const newEnd = fillDates[deltaPosition - 2];
            if (newEnd > new Date(event.start)) {
              newEvent.end = newEnd.toISOString().split("T")[0];
            }
          }
          return newEvent;
        })
      );
    },
    [resizeState, fillDates, setData, zoom]
  );

  const handleResizeEnd = useCallback(() => {
    setResizeState(null);
  }, []);

  useEffect(() => {
    if (resizeState) {
      const handleMouseMove = e => {
        e.preventDefault();
        handleResizeMove(e);
      };

      const handleMouseUp = () => {
        handleResizeEnd();
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [resizeState, handleResizeMove, handleResizeEnd]);

  return { handleDateChange };
}
