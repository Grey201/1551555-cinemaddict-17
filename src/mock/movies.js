import { getRandomInteger } from '../utils.js';

//todo generate
const generateId = () => {
  const id = [
    '001',
    '002',
    '003',
  ];
  const randomIndex = getRandomInteger(0, id.length - 1);

  return id[randomIndex];
};

const generateAuthor = () => {
  const author = [
    'Ilya O\'Reilly',
    'Snoop Dogg',
    'Elon Musk',
  ];
  const randomIndex = getRandomInteger(0, author.length - 1);

  return author[randomIndex];
};

const generateComment = () => {
  const comments = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Interesting setting and a good cast',
  ];
  const randomIndex = getRandomInteger(0, comments.length - 1);

  return comments[randomIndex];
};

const generateEmotion = () => {
  const emotion = [
    'smile', 'sleeping', 'puke', 'angry'
];
  const randomIndex = getRandomInteger(0, emotion.length - 1);

  return emotion[randomIndex];
};
const generateDate = () => {
  const date = [
    '2019-05-11T16:12:32.554Z', '1963-07-22T16:08:32.554Z', '1974-02-15T16:08:32.554Z, 2019-05-11T00:00:00.000Z'
];
  const randomIndex = getRandomInteger(0, date.length - 1);

  return date[randomIndex];
};

////

const generateTitle = () => {
  const moviesTitle = [
    'The Man with the Golden Arm',
    'The Dance of Life',
    'Popeye the Sailor Meets Sindbad the Sailor',
  ];
  const randomIndex = getRandomInteger(0, moviesTitle.length - 1);

  return moviesTitle[randomIndex];
};

const generateAlternativeTitle=()=>{
  const alternativeTitle = [
    'Golden Arm',
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

const generateAgeRating=()=>{
  const ageRating=[14, 18, 7];
  const randomIndex = getRandomInteger(0, ageRating.length - 1);

  return ageRating[randomIndex];
};

const generateDirector=()=>{
  const director=['Tom Ford', 'Peter Jackson', 'Christopher Nolan'];
  const randomIndex = getRandomInteger(0, director.length - 1);

  return director[randomIndex];
};
const generateWriter=()=>{
  const writers=['Takeshi Kitano', 'Mel Gibson', 'George Lucas'];
  const randomIndex = getRandomInteger(0, writers.length - 1);

  return writers[randomIndex];
};

const generateActor=()=>{
  const actors=['Morgan Freeman', 'Jim Carrey', 'Sharon Stone'];
  const randomIndex = getRandomInteger(0, actors.length - 1);

  return actors[randomIndex];
}
  const generateReleaseCountry=()=>{
    const releaseCountry=['Finland', 'USA', 'Poland'];
    const randomIndex = getRandomInteger(0, releaseCountry.length - 1);
  
    return releaseCountry[randomIndex];
  };
  const generateRuntime=()=>{
    const runtime=['Finland', 'USA', 'Poland'];
    const randomIndex = getRandomInteger(0, runtime.length - 1);
  
    return runtime[randomIndex];
  };
  

//todo
export const generateComments = () => ({
  id: generateId(),
  author: generateAuthor(),
  comment: generateComment(),
  date: generateDate(),
  emotion: generateEmotion(),
});

export const generateMoves = () => ({
  //todo
  id: generateId(),
  comments: [
    // $Comment.id$, $Comment.id$
  ],
  filmInfo: {
    title: generateTitle(),
    alternativeTitle: generateAlternativeTitle(),
    totalRating: generateRating(),
    poster: generatePoster(),
    ageRating: generateAgeRating(),
    director: generateDirector(),
    writers: generateWriter(),
    actors: generateActor(),
    release: {
      date: generateDate(),
      releaseCountry: generateReleaseCountry(),
    },
    runtime: generateRuntime(),
    genre: ['Comedy'],
    description:
      'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.',
  },
  userDetails: {
    watchlist: true,
    alreadyWatched: false,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: true,
  },
});


