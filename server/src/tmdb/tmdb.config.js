const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_API_KEY;

const getUrl = (endpoint, params) => {

  const definedParams = Object.fromEntries(
    Object.entries(params || {}).filter(([key, value]) => value !== undefined)
  );

  const qs = new URLSearchParams(definedParams);

  const url = `${baseUrl}${endpoint}?api_key=${key}&${qs}`;

  console.log(url)

  return url;
};

export default { getUrl };