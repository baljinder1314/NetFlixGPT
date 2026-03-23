export const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_APP_BEARER_TOKEN,
  },
};

export const IMAGE_CDN_URL = `https://image.tmdb.org/t/p/w500`;

export const BG_IMAGE =
  'https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg';

export const lang = {
  en: {
    search: 'Search',
    gptSearchPlacholder: 'What would you like to watch today?',
  },
  hindi: {
    search: 'खोज',
    gptSearchPlacholder: 'आज आप क्या देखना चाहेंगे?',
  },
  spanish: {
    search: 'buscar',
    gptSearchPlacholder: '¿Qué te gustaría ver hoy?',
  },
};

export const SUPORTED_LANGUAGES = [
  {
    identifier: 'en',
    name: 'English',
  },
  {
    identifier: 'hindi',
    name: 'Hindi',
  },
  {
    identifier: 'spanish',
    name: 'Spanish',
  },
];
