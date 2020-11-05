import axios from "axios";

export async function reversedGeo(lat: number, lon: number) {
  const url = "https://api.opencagedata.com/geocode/v1/json?";
  const response = await axios.get(url, {
    params: {
      q: `${lat},${lon}`,
      key: process.env.OPENCAGE_KEY,
    },
  });

  const city = response.data.results[0].components.city;
  const state_code = response.data.results[0].components.state_code;

  return `${city},${state_code}`;
}
