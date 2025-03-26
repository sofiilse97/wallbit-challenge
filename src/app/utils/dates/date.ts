export const parseDate = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const fullYear = date.getFullYear();

  return `${day}/${month}/${fullYear}`;
};

export const parseTime = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  const hours = date.getHours();
  const minutes = date.getMinutes() + 1;

  return `${hours}:${minutes}`;
};
