import cx from "classnames";

const isCurrentDate = day => day.getDate() === new Date().getDate();

export function TimelineHeader({ filledDates }) {
  return filledDates.map(day => (
    <div
      key={day.getTime()}
      className={cx(
        "flex items-center justify-center text-sm  gap-1",
        isCurrentDate(day) && "bg-[orange] rounded-md current-day"
      )}>
      {day
        .toLocaleDateString("es", { weekday: "short", day: "numeric" })
        .split(" ")
        .map((item, index) => (
          <span
            key={index}
            className={cx(isCurrentDate(day) && "!text-slate-900 !font-medium", index === 0 ? "day" : "number-day")}>
            {item}
          </span>
        ))}
    </div>
  ));
}
