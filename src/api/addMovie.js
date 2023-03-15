import { BASE_URL } from '../utils/constants';

export default async (payload) => {
  try {
    const method = payload.id ? 'PUT' : 'POST';
    const response = await fetch(BASE_URL, {
      method,
      body: JSON.stringify(payload),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    return response;
  } catch (error) {
    throw error;
  }
};
