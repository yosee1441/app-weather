import HttpClient from '@/services/http.service';
import { WeatherAPIResponse, City } from '@/screens/home/models';
import { WEATHER_CONFIG } from '@/constants';

export class WeatherHttpService {
  private http: HttpClient;

  constructor() {
    this.http = new HttpClient();
  }

  async findOneByCity(
    city: WeatherAPIResponse['name']
  ): Promise<WeatherAPIResponse> {
    const { apiKey, defaultLang, defaultUnits } = WEATHER_CONFIG;
    const response = await this.http.get<WeatherAPIResponse>(
      `/data/2.5/weather/?q=${encodeURIComponent(city)}&lang=${defaultLang}&units=${defaultUnits}&appid=${apiKey}`
    );
    return response;
  }

  async findAllCities(query: string, limit: number = 5): Promise<City[]> {
    const { apiKey, defaultLang } = WEATHER_CONFIG;
    const response = await this.http.get<City[]>(
      `/geo/1.0/direct?q=${encodeURIComponent(query)}&lang=${defaultLang}&limit=${limit}&appid=${apiKey}`
    );
    return response;
  }
}
