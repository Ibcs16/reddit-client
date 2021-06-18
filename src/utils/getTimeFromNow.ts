import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function getTimeFromNow(utc_time: number): string {
  if (!utc_time) return '';
  return dayjs.unix(utc_time).fromNow();
}
