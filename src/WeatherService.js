class WeatherService {
    _apiBase = 'https://api.weatherapi.com/v1/current.json?';
    _apiKey = 'key=<API_KEY>&q=';

    getResource = async (url) => {
        let res = await fetch(url);
    
        const errorMessage = () => {
          alert("Enter correct location name, please ;)");
        };
    
        if (!res.ok) {
          errorMessage();
        }
    
        return await res.json();
    }
}

export default WeatherService;