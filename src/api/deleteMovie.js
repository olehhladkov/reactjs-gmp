import { BASE_URL } from '../utils/constants';

export default async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });

    return response.ok;
  } catch (error) {
    throw error;
  }
};
