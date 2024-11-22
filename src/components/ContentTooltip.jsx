/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import cx from "classnames";
import { StateEvent } from "./TimelineEvent";

export function ContentTooltip({ event, stateEvent }) {
  return (
    <Card className={cx("px-1 py-2")}>
      <CardHeader className="text-small font-bold">Name: {event.name}</CardHeader>
      <CardBody>
        <div className="text-tiny">
          <span className="text-base font-medium">Start:</span> {event.start}
        </div>
        <div className="text-tiny">
          <span className="text-base font-medium">End:</span> {event.end}
        </div>
      </CardBody>
      <CardFooter>
        <div className="text-tiny ">
          State:{" "}
          <span
            className={cx(
              "rounded-md p-2 text-white",
              stateEvent === StateEvent.Finish && "bg-[#BF9765]",
              stateEvent === StateEvent.InProgress && "bg-[#557314]",
              stateEvent === StateEvent.Upcoming && "bg-[#F28A2E]"
            )}>
            {stateEvent}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
