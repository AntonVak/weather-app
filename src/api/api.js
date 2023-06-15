const _apiBase = "https://api.openweathermap.org/data/2.5/weather?q";
const _apiKey = "appid=ad56d24ce0d2b1c6671428e11a4b985f";

export const fetchWeather = async(city) => {
  const url = `${_apiBase}=${city}&${_apiKey}&units=metric`
  const res = await fetch(url);
  const weather = await res.json();
  return weather
}

// export async function fetchWeath(city, setError) {
//     try {
//         const response = await axios.get(url);
//         setError("");
        
//         return response;
//       } catch (error) {
//         setError("City Not Found!");
//         return error;
//       }
// }
export const API_KEY = "ad56d24ce0d2b1c6671428e11a4b985f";