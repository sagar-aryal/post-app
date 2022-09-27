import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const DateAndTime = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <div>
      &nbsp; <i>{timeAgo}</i>
    </div>
  );
};

export default DateAndTime;
