import { getRandomInteger } from '../utils/common.js';
import {nanoid} from 'nanoid';

const generateCommentId = () => {
  const commentsId = ['101', '102', '103', '104', '105'];
  const randomIndex = getRandomInteger(0, commentsId.length - 1);

  return commentsId[randomIndex];
};

const generateAuthor = () => {
  const author = ['Ilya O\'Reilly', 'Snoop Dogg', 'Elon Musk'];
  const randomIndex = getRandomInteger(0, author.length - 1);

  return author[randomIndex];
};

const generateTextComment = () => {
  const comments = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Interesting setting and a good cast',
    'Booooooooooring',
  ];
  const randomIndex = getRandomInteger(0, comments.length - 1);

  return comments[randomIndex];
};

const generateEmotion = () => {
  const emotion = ['smile', 'sleeping', 'puke', 'angry'];
  const randomIndex = getRandomInteger(0, emotion.length - 1);

  return emotion[randomIndex];
};

const generateDate = () => {
  const date = [
    '2019-05-11T16:12:32.554Z',
    '1963-07-22T16:08:32.554Z',
    '1974-02-15T16:08:32.554Z',
    '2019-10-11T00:00:00.000Z',
  ];
  const randomIndex = getRandomInteger(0, date.length - 1);

  return date[randomIndex];
};

// const generateId = () => {
//   const id = ['001', '002', '003'];
//   const randomIndex = getRandomInteger(0, id.length - 1);

//   return id[randomIndex];
// };

const generateTitle = () => {
  const moviesTitle = [
    'The Man with the Golden Arm',
    'The Dance of Life',
    'Popeye the Sailor Meets Sindbad the Sailor',
  ];
  const randomIndex = getRandomInteger(0, moviesTitle.length - 1);

  return moviesTitle[randomIndex];
};

const generateAlternativeTitle = () => {
  const alternativeTitle = [
    'The Great Flamarion',
    'Dance, Dance',
    'Popeye and Sindbad',
  ];
  const randomIndex = getRandomInteger(0, alternativeTitle.length - 1);

  return alternativeTitle[randomIndex];
};

const generateRating = () => {
  const totalRating = ['8.3', '3.2', '9.0'];
  const randomIndex = getRandomInteger(0, totalRating.length - 1);

  return totalRating[randomIndex];
};

const generatePoster = () => {
  const poster = [
    './images/posters/the-man-with-the-golden-arm.jpg',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/the-dance-of-life.jpg',
  ];
  const randomIndex = getRandomInteger(0, poster.length - 1);

  return poster[randomIndex];
};

const generateAgeRating = () => {
  const ageRating = [16, 18, 7];
  const randomIndex = getRandomInteger(0, ageRating.length - 1);

  return ageRating[randomIndex];
};

const generateDirector = () => {
  const director = ['Tom Ford', 'Peter Jackson', 'Christopher Nolan'];
  const randomIndex = getRandomInteger(0, director.length - 1);

  return director[randomIndex];
};
const generateWriter = () => {
  const writers = ['Takeshi Kitano', 'Mel Gibson', 'George Lucas'];
  const randomIndex = getRandomInteger(0, writers.length - 1);

  return writers[randomIndex];
};

const generateActor = () => {
  const actors = ['Morgan Freeman', 'Jim Carrey', 'Sharon Stone'];
  const randomIndex = getRandomInteger(0, actors.length - 1);

  return actors[randomIndex];
};

const generateReleaseCountry = () => {
  const releaseCountry = ['Finland', 'USA', 'Poland'];
  const randomIndex = getRandomInteger(0, releaseCountry.length - 1);

  return releaseCountry[randomIndex];
};

const generateRuntime = () => {
  const runtime = ['1h 55m', '2h 05m', '45m'];
  const randomIndex = getRandomInteger(0, runtime.length - 1);

  return runtime[randomIndex];
};

const generateGenre = () => {
  const genre = ['Comedy', 'Musical', 'Western', 'Drama'];
  const randomIndex = getRandomInteger(0, genre.length - 1);

  return genre[randomIndex];
};

const generateDescription = () => {
  const description = [
    'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.',
    'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…',
    'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…',
    'The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarionn\'s other assistant. Flamarion falls in love with Connie, the movien\'s femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.',
  ];
  const randomIndex = getRandomInteger(0, description.length - 1);

  return description[randomIndex];
};

const generateBoolean = () => {
  const boolean = [0, 1];
  const randomIndex = getRandomInteger(0, boolean.length - 1);

  return boolean[randomIndex];
};

export const generateComment = () => ({
  id: generateCommentId(),
  author: generateAuthor(),
  comment: generateTextComment(),
  date: generateDate(),
  emotion: generateEmotion(),
});

export const generateMove = () => ({
  id: nanoid(),
  comments: [generateCommentId(), generateCommentId()],
  filmInfo: {
    title: generateTitle(),
    alternativeTitle: generateAlternativeTitle(),
    totalRating: generateRating(),
    poster: generatePoster(),
    ageRating: generateAgeRating(),
    director: generateDirector(),
    writers: [generateWriter()],
    actors: [generateActor()],
    release: {
      date: generateDate(),
      releaseCountry: generateReleaseCountry(),
    },
    runtime: generateRuntime(),
    genre: [generateGenre()],
    description: generateDescription(),
  },
  userDetails: {
    watchlist: generateBoolean(),
    alreadyWatched: generateBoolean(),
    watchingDate: generateDate(),
    favorite: generateBoolean(),
  },
});
