import dayjs from 'dayjs';

export default function getFormattedDateTime(utc_time: number): string {
  if (!utc_time) return '';
  return dayjs.unix(utc_time).toISOString();
}
