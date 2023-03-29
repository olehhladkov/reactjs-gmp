import { BASE_URL } from '../utils/constants';

const deleteMovie = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });

    return response.ok;
  } catch (error) {
    throw error;
  }
};

export default deleteMovie;
