import client from './api';

export const getPost = () => client.get('/board');
