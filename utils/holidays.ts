export const getUSHolidays = (year: number) => {
  const fixedHolidays = [
    { date: `${year}-01-01`, name: "New Year's Day" },
    { date: `${year}-06-19`, name: "Juneteenth" },
    { date: `${year}-07-04`, name: "Independence Day" },
    { date: `${year}-11-11`, name: "Veterans Day" },
    { date: `${year}-12-25`, name: "Christmas Day" },
  ];

  const getNthDay = (year: number, month: number, dayOfWeek: number, n: number) => {
    const firstDay = new Date(year, month, 1);
    let diff = dayOfWeek - firstDay.getDay();
    if (diff < 0) diff += 7;
    const date = new Date(year, month, 1 + diff + (n - 1) * 7);
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const getLastDay = (year: number, month: number, dayOfWeek: number) => {
    const lastDay = new Date(year, month + 1, 0);
    let diff = lastDay.getDay() - dayOfWeek;
    if (diff < 0) diff += 7;
    const date = new Date(year, month + 1, -diff);
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const dynamicHolidays = [
    { date: getNthDay(year, 0, 1, 3), name: "MLK Jr. Day" },
    { date: getNthDay(year, 1, 1, 3), name: "Presidents' Day" },
    { date: getLastDay(year, 4, 1), name: "Memorial Day" },
    { date: getNthDay(year, 8, 1, 1), name: "Labor Day" },
    { date: getNthDay(year, 9, 1, 2), name: "Columbus Day" },
    { date: getNthDay(year, 10, 4, 4), name: "Thanksgiving" },
  ];

  return [...fixedHolidays, ...dynamicHolidays];
};
