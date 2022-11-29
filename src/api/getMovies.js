import { BASE_URL } from '../utils/constants';

export default async (searchParams = '', thunkAPI, options) => {
  try {
    const response = await fetch(`${BASE_URL}${searchParams}`, {
      ...options,
      signal: thunkAPI.signal,
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
