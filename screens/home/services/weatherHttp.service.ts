import HttpClient from '@/services/http.service';
import { WeatherAPIResponse } from '@/screens/home/models';
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
      `weather/?q=${encodeURIComponent(city)}&appid=${apiKey}&lang=${defaultLang}&units=${defaultUnits}`
    );
    return response;
  }
}
