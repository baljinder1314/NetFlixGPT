import OpenAI from 'openai';
import { OPEN_AI } from './constentsForMovieApi';

const client = new OpenAI({
  apiKey: OPEN_AI,
  dangerouslyAllowBrowser: true,
});

export default client;
