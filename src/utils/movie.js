import dayjs from 'dayjs';

//Функции обработки даты
const humanizeMovieDueDateTime = (dueDate) =>
  dayjs(dueDate).format('DD/MM/YYYY HH:mm');
const humanizeMovieDueDate = (dueDate) => dayjs(dueDate).format('DD MMMM YYYY'); //30 March 1945
const humanizeMovieYear = (dueDate) => dayjs(dueDate).format('YYYY');

// Функция помещает задачи без даты в конце списка, возвращая нужный вес для колбэка sort
const getWeightForNullDate = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};

const sortDate = (movieA, movieB) => {
  const weight = getWeightForNullDate(
    movieA.filmInfo.release.date,
    movieB.filmInfo.release.date
  );
  return (
    weight ??
    dayjs(movieB.filmInfo.release.date).diff(
      dayjs(movieA.filmInfo.release.date)
    )
  );
};

const sortRating = (ratingA, ratingB) =>
  ratingB.filmInfo.totalRating - ratingA.filmInfo.totalRating;

export {
  humanizeMovieDueDate,
  humanizeMovieYear,
  humanizeMovieDueDateTime,
  sortDate,
  sortRating,
};
