import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38200936-a4e2c2bd0c68444647b59d521';

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data.hits;
};


