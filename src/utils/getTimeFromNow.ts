import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function getTimeFromNow(utc_time: number): string {
  return dayjs.unix(utc_time).fromNow();
}
