const padZero = (digit: number) => digit <= 9 ? '0' + digit : digit;

export default function getCurrentTimeWithOffset(timezoneOffset: number) {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const result = new Date(utc + timezoneOffset * 3600000);
  const hours = result.getHours();
  const minutes = result.getMinutes();
  const seconds = result.getSeconds();
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}