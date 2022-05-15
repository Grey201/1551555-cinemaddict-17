import dayjs from 'dayjs';

// Функция из интернета по генерации случайного числа из диапазона
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

//Функции обработки даты
const humanizeMovieDueDateTime = (dueDate) =>
  dayjs(dueDate).format('DD/MM/YYYY HH:mm');
const humanizeMovieDueDate = (dueDate) => dayjs(dueDate).format('DD MMMM YYYY'); //30 March 1945
const humanizeMovieYear = (dueDate) => dayjs(dueDate).format('YYYY');

export {
  getRandomInteger,
  humanizeMovieDueDate,
  humanizeMovieYear,
  humanizeMovieDueDateTime,
};
