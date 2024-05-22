import img1 from '../assets/images/ClubLogo.png';
import img2 from '../assets/images/ClubLogo1.png';
import img3 from '../assets/images/ClubLogo2.png';
import img4 from '../assets/images/ClubLogo3.png';

import image from '../assets/images/card.png';
import Rectangle2 from '../assets/images/Rectangle2.png';
import Rectangle3 from '../assets/images/Rectangle3.png';

import CountryLogo from '../assets/images/CountryLogo.png';
import imageOne from '../assets/images/Messi1.png';
import imageTwo from '../assets/images/Messi2.png';
import boardcastOne from '../assets/images/boardcast.png';
import boardcastTwo from '../assets/images/boardcast1.png';
import boardcastThree from '../assets/images/boardcast2.png';
import boardcastFour from '../assets/images/boardcast3.png';
import trendingView from '../assets/images/trendingView.png';

import media from '../assets/images/Media.png';
import media1 from '../assets/images/Media1.png';
import media2 from '../assets/images/Media2.png';
import media3 from '../assets/images/Media3.png';
import media4 from '../assets/images/Media4.png';
import media5 from '../assets/images/Media5.png';

import trendyImage from '../assets/images/trendyImage.png';
import trendyImage1 from '../assets/images/trendyImage1.png';
import trendyImage2 from '../assets/images/trendyImage2.png';
import trendyImage3 from '../assets/images/trendyImage3.png';

import club from '../assets/images/Club1.png';
import club1 from '../assets/images/Club2.png';
import club2 from '../assets/images/Club3.png';
import club3 from '../assets/images/Club4.png';

const mostWatched = [
  {
    id: 1,
    text: 'Champions League',
    leagueText: '54',
    teamFlagOne: img1,
    teamFlagTwo: img2,
    team: [
      {
        id: 1,
        name: 'Bayern Munich',
        score: '2',
      },
      {
        id: 2,
        name: 'Barcelona',
        score: '8',
      },
    ],
    avatarImage: [
      require('../assets/images/Avatar.png'),
      require('../assets/images/Avatar.png'),
      require('../assets/images/Avatar.png'),
    ],
    views: '1.5k',
  },
  {
    id: 2,
    text: 'Champions League',
    leagueText: '40',
    teamFlagOne: img1,
    teamFlagTwo: img3,
    team: [
      {
        id: 1,
        name: 'Dortmund',
        score: '2',
      },
      {
        id: 2,
        name: 'Bayern Munich',
        score: '5',
      },
    ],
    avatarImage: [
      require('../assets/images/Avatar.png'),
      require('../assets/images/Avatar.png'),
      require('../assets/images/Avatar.png'),
    ],
    views: '2.5k',
  },
  {
    id: 3,
    text: 'Champions League',
    leagueText: '35',
    teamFlagOne: img3,
    teamFlagTwo: img2,
    team: [
      {
        id: 1,
        name: 'Manchester City',
        score: '6',
      },
      {
        id: 2,
        name: 'Bayern Munich',
        score: '2',
      },
    ],
    avatarImage: [
      require('../assets/images/Avatar.png'),
      require('../assets/images/Avatar.png'),
      require('../assets/images/Avatar.png'),
    ],
    views: '3.5k',
  },
  {
    id: 4,
    text: 'Champions League',
    leagueText: '65',
    teamFlagOne: img4,
    teamFlagTwo: img2,
    team: [
      {
        id: 1,
        name: 'Real Madrid',
        score: '5',
      },
      {
        id: 2,
        name: 'Barcelona',
        score: '2',
      },
    ],
    avatarImage: [
      require('../assets/images/Avatar.png'),
      require('../assets/images/Avatar.png'),
      require('../assets/images/Avatar.png'),
    ],
    views: '4.5k',
  },
];

const trendingTransfer = [
  {
    id: 1,
    name: 'Lionel Messi',
    image: image,
    price: '€45.00M',
    countryImage: CountryLogo,
    age: '36',
    position: 'AMF',
    teamOneImage: img1,
    teamTwoImage: img2,
  },
  {
    id: 2,
    name: 'André Onana',
    image: imageOne,
    price: '€50.00M',
    countryImage: CountryLogo,
    age: '27',
    position: 'GK',
    teamOneImage: img3,
    teamTwoImage: img2,
  },
  {
    id: 3,
    name: 'Karim Benzema',
    image: imageTwo,
    price: '€35.00M',
    countryLogo: CountryLogo,
    age: '35',
    position: 'ST',
    teamOneImage: img4,
    teamTwoImage: img3,
  },
];

const hotNews = [
  {
    id: 1,
    title:
      'Lionel Messi’s new club in 2023: Inter Miami & MLS emerge winners from transfer talks involving Al Hilal, Barcelona and PSG',
    date: '2 July, 2023',
    readTime: '30 min read',
    imageSource: image,
  },
  {
    id: 2,
    title:
      'Jordi Alba to join Lionel Messi as third Barcelona legend signing for Inter Miami - with a fourth eyed',
    date: '20 Sep, 2023',
    readTime: '10 min read',
    imageSource: Rectangle2,
  },
  {
    id: 3,
    title:
      'David De Gea leaves Man Utd: Spain international goalkeeper announces exit after failing to agree new deal',
    date: '2 Aug, 2023',
    readTime: '4 min read',
    imageSource: Rectangle3,
  },
];
const boardcastData = [
  {
    id: 1,
    title: 'Nex Parabola',
    img: boardcastOne,
  },
  {
    id: 2,
    title: 'Vidio.com',
    img: boardcastTwo,
  },
  {
    id: 3,
    title: 'O Channel',
    img: boardcastThree,
  },
  {
    id: 4,
    title: 'SCTV',
    img: boardcastFour,
  },
];
const UpComingData = [
  {
    id: 1,
    text: 'Champions League',
    leagueText: '54',
    teamFlagOne: img1,
    teamFlagTwo: img2,
    team: [
      {id: 1, name: 'Real Madrid'},
      {id: 2, name: 'Barcelona'},
    ],
    dataAndTime: '21 Sep 2023, 23:45',
  },
  {
    id: 2,
    text: 'Champions League',
    leagueText: '18',
    teamFlagOne: img4,
    teamFlagTwo: img2,
    team: [
      {id: 1, name: 'Bayern München'},
      {id: 2, name: 'Manchester City'},
    ],
    dataAndTime: '12 Aug 2023, 23:45',
  },
  {
    id: 3,
    text: 'Champions League',
    leagueText: '30',
    teamFlagOne: img3,
    teamFlagTwo: img1,
    team: [
      {id: 1, name: 'Bayern München'},
      {id: 2, name: 'Barcelona'},
    ],
    dataAndTime: '2 July 2023, 23:45',
  },
];

const top10TreandingViews = [
  {
    id: 1,
    mainImage: trendingView,
    views: '20k',
    logoClubOne: img1,
    logoClubTwo: img4,
  },
  {
    id: 2,
    mainImage: trendingView,
    views: '260k',
    logoClubOne: img2,
    logoClubTwo: img1,
  },
  {
    id: 3,
    mainImage: trendingView,
    views: '210k',
    logoClubOne: img3,
    logoClubTwo: img2,
  },
];

const topHeadlines = [
  {
    id: 1,
    text: 'Jamaica coach Donaldson exits after historic WWC performance',
  },
  {
    id: 2,
    text: 'Arsenal attack too fast at home, need more composure - Arteta',
  },
  {
    id: 3,
    text: 'RB Leipzig fire sporting director amid Bayern Munich links',
  },
  {
    id: 4,
    text: 'Brazilian manager Robert Lewandowski named as Arsenal manager',
  },
];

const StoryData = [
  {
    id: 1,
    text: 'IDN News',
    image: media,
  },
  {
    id: 2,
    text: 'BBC Sport',
    image: media1,
  },
  {
    id: 3,
    text: 'Sky Sport',
    image: media2,
  },
  {
    id: 4,
    text: 'Goal.com',
    image: media3,
  },
  {
    id: 5,
    text: 'Guardian',
    image: media4,
  },
  {
    id: 6,
    text: 'ESPN',
    image: media5,
  },
];

const trendyNewsData = [
  {
    id: 1,
    text: 'IDN Times',
    date: '28 Sep, 2023',
    title: 'Man Utd believe Sancho treatment legal amid FIFA rules - source',
    category: 'Football',
    readTime: '4 min read',
    imageUrl: trendyImage,
    newsChannelImg: media,
  },
  {
    id: 2,
    text: 'IDN Times',
    date: '28 Sep, 2023',
    title: 'Xavi: Epic Barcelona comeback shows generational change',
    category: 'Football',
    readTime: '4 min read',
    imageUrl: trendyImage1,
    newsChannelImg: media,
  },
  {
    id: 3,
    text: 'ESPN',
    date: '28 Sep, 2023',
    title: 'Liverpool rally to eliminate Leicester City from Carabao Cup',
    category: 'Football',
    readTime: '4 min read',
    imageUrl: trendyImage2,
    newsChannelImg: media5,
  },
  {
    id: 4,
    text: 'BBC News',
    date: '28 Sep, 2023',
    title: 'Inside Ten Hags battle to control Man United dressing room',
    category: 'Football',
    readTime: '4 min read',
    imageUrl: trendyImage3,
    newsChannelImg: media1,
  },
];

const teamsFlag = [
  {
    id: 1,
    name: 'Antwerb',
    image: club,
    text: 'BEL',
    imageUrlOne: CountryLogo,
  },
  {
    id: 2,
    name: 'Arsenal',
    image: club1,
    text: 'ENG',
    imageUrlOne: CountryLogo,
  },
  {
    id: 3,
    name: 'Atlético',
    image: club2,
    text: 'ESP',
    imageUrlOne: CountryLogo,
  },
  {
    id: 4,
    name: 'Barcelona',
    image: club3,
    text: 'ESP',
    imageUrlOne: CountryLogo,
  },
];
const playerData = [
  {
    id: 1,
    title: 'Position',
    value: 'Midfielder (DMF)',
  },
  {
    id: 2,
    title: 'Club Number',
    value: '18',
  },
  {
    id: 3,
    title: 'National Number',
    value: '5',
  },
  {
    id: 4,
    title: 'Country of Birth',
    value: 'Brazil',
  },
  {
    id: 5,
    title: 'Date of Birth',
    value: '23/2/1992 (31)',
  },
  {
    id: 6,
    title: 'Height',
    value: '184 cm',
  },
  {
    id: 7,
    title: 'Weight',
    value: '74 kg',
  },
];

const AvatarListData = {
  id: 1,
  avatarImage: [
    require('../assets/images/Avatar.png'),
    require('../assets/images/Avatar.png'),
    require('../assets/images/Avatar.png'),
  ],
  views: '1.5k',
};
export {
  trendingTransfer,
  top10TreandingViews,
  hotNews,
  mostWatched,
  boardcastData,
  UpComingData,
  topHeadlines,
  StoryData,
  trendyNewsData,
  teamsFlag,
  playerData,
  AvatarListData,
};
