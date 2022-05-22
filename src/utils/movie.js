import dayjs from 'dayjs';
//Функции обработки даты
const humanizeMovieDueDateTime = (dueDate) =>
  dayjs(dueDate).format('DD/MM/YYYY HH:mm');
const humanizeMovieDueDate = (dueDate) => dayjs(dueDate).format('DD MMMM YYYY'); //30 March 1945
const humanizeMovieYear = (dueDate) => dayjs(dueDate).format('YYYY');

export {
  humanizeMovieDueDate,
  humanizeMovieYear,
  humanizeMovieDueDateTime,
};
