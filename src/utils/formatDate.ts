export default function formartDate(value: Date): string {
  const date = new Date(value);
  const day = date.getDate().toString();
  const month = date.getMonth().toString();
  const year = date.getFullYear().toString();
  const dayF = day.length === 1 ? `0${day}` : day;
  const monthF = month.length === 1 ? `0${month}` : month;
  return `${dayF}/${monthF}/${year}`;
}
