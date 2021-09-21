import Prismic from '@prismicio/client';

const apiEndpoint = 'https://portfolio-vini.prismic.io/api/v2';
const accessToken = process.env.REACT_APP_PRISMIC_API_TOKEN; // This is where you would add your access token for a Private repository

export const client = Prismic.client(apiEndpoint, { accessToken });
