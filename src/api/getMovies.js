import { BASE_URL } from '../utils/constants';

export const getMovies = async (searchFields = {}, signal, options) => {
  try {
    const searchParams = new URLSearchParams(searchFields);
    searchParams.append('searchBy', 'title');

    if (searchParams.has('genre')) {
      searchParams.append('filter', searchParams.get('genre'));
      searchParams.delete('genre');
    }

    const response = await fetch(`${BASE_URL}?${searchParams.toString()}`, {
      ...options,
      signal,
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id, options) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      ...options,
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
