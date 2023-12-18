export const getBusinesses = async (genre, location, option) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  // API endpoint
  const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
  const baseUrl = "https://api.yelp.com/v3";
  const searchEndpoint = "/businesses/search";
  const url = `${corsAnywhereUrl}${baseUrl}${searchEndpoint}?term=${genre}&location=${location}&sort_by=${option}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      // Returns an array of 20 businesses;
      const businesses = jsonResponse.businesses;
      return businesses;
    }
  } catch (error) {
    console.log(error);
  }
};
