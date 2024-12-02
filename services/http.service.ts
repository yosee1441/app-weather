import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

import { httpReponseAdapter } from '@/adapters';
import { WEATHER_CONFIG } from '@/constants';
import { isInRange, getErrorMessage, showToast } from '@/utils';

class httpService {
  private readonly axiosInstance: AxiosInstance;
  private readonly abortController: AbortController;

  constructor() {
    this.abortController = new AbortController();

    this.axiosInstance = axios.create({
      baseURL: WEATHER_CONFIG.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => ({
        ...response,
        data: httpReponseAdapter(response.data),
      }),
      (error: AxiosError) => {
        const status = error.response?.status || 500;
        if (isInRange(status, 500, 599)) {
          showToast('Ocurrió un error inesperado.');
        } else {
          const code = error.response?.data?.cod || 500;
          showToast(getErrorMessage(code));
        }

        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, {
      ...config,
      signal: this.abortController.signal,
    });
    return response.data as T;
  }

  cancelRequest() {
    if (!this.abortController.signal.aborted) {
      this.abortController.abort();
    }
  }
}

export default httpService;