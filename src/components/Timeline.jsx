import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineBody } from "./TimelineBody";
import InititalData from "../mock-data/timelineItems.json";
import { Utils } from "../utils/utils";
import { useEffect, useRef, useState } from "react";
import { useTimelineZoom } from "../hooks/useTimelineZoom";

export function Timeline() {
  //Local States
  const [data, setData] = useState(InititalData);

  //Extract dates &Fill missing dates
  const dates = data.flatMap(item => [new Date(item.start), new Date(item.end)]);
  const fillDates = Utils.fillDates(dates);

  //Hooks
  const { zoom, pan, handleZoom, handlePan } = useTimelineZoom(1);

  //Refs
  const timelineRef = useRef(null);

  //Effects
  useEffect(() => {
    const handleWheel = e => {
      if (e.ctrlKey) {
        e.preventDefault();
        handleZoom(e.deltaY > 0 ? -1 : 1, e.clientX);
      } else {
        handlePan(e.deltaX);
      }
    };

    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener("wheel", handleWheel, { passive: false });
      return () => timeline.removeEventListener("wheel", handleWheel);
    }
  }, [handleZoom, handlePan]);

  return (
    <Card className="w-full bg-[#07090D] h-dvh">
      <CardHeader className="flex gap-3 ">
        <div className="flex flex-col">
          <p className="text-md text-slate-100">Timeline</p>
          <p className="text-small text-default-300">Event Timeline</p>
        </div>
      </CardHeader>

      <CardBody
        className="content-dates py-0 h-full w-full"
        ref={timelineRef}
        style={{
          transform: `translateX(${-pan}px))`,
          gridTemplateColumns: `repeat(${fillDates.length + 2}, ${50 * zoom}px)`,
        }}>
        <TimelineHeader filledDates={fillDates} />
        <TimelineBody data={data} filledDates={fillDates} setData={setData} zoom={zoom} />
      </CardBody>
    </Card>
  );
}
