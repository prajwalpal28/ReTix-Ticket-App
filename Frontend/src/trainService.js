import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v3/getLiveStation',
  headers: {
    'x-rapidapi-key': '76a688d63fmsh5c2656171fd0fe5p141e0ejsn4a9aefdd8813',
    'x-rapidapi-host': 'irctc1.p.rapidapi.com',
  },
};

// Define an async function to search trains
export const searchTrains = async (from, to) => {
  try {
    const response = await axios.request({
      ...options,
      params: {
        fromStationCode: from,
        toStationCode: to,
      },
    });
    return response.data;  // Return the API response
  } catch (error) {
    console.error('Error fetching train data:', error);
    throw error;  // Re-throw error to handle in component
  }
};
