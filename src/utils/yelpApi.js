export const getBusinesses = async (genre, location, sorting) => {
  // Url endpoint
  const API_KEY = process.env.REACT_APP_API_KEY;
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const query = `?term=${genre}&location=${location}&sort_by=${sorting}`;
  const url = `${corsAnywhere}https://api.yelp.com/v3/businesses/search${query}`;
  // Retrieve real data
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      const businesses = jsonResponse.businesses;
      return businesses;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};
