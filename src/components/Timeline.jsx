import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineBody } from "./TimelineBody";
import data from "../mock-data/timelineItems.json";
import { Utils } from "../utils/utils";

export function Timeline() {
  //Extract dates
  const dates = data.flatMap(item => [new Date(item.start), new Date(item.end)]);
  //Fill missing dates
  const fillDates = Utils.fillDates(dates);

  return (
    <Card className="w-full bg-[#333333] h-dvh">
      <CardHeader className="flex gap-3 ">
        <div className="flex flex-col">
          <p className="text-md text-slate-100">Timeline</p>
          <p className="text-small text-default-300">Event Timeline</p>
        </div>
      </CardHeader>
      <CardBody className="content-dates py-0">
        <TimelineHeader filledDates={fillDates} />
        <TimelineBody data={data} filledDates={fillDates} />
      </CardBody>
    </Card>
  );
}
