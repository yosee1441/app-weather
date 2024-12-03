import { debounce } from '@/screens/home/utils';

jest.useFakeTimers();

describe('utils debounce', () => {
  it('should execute the function after the specified delay', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn();
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(500);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should reset the timer if called repeatedly', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn();
    jest.advanceTimersByTime(300);
    debouncedFn();
    jest.advanceTimersByTime(300);
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(200);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should pass the correct arguments to the function', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn('argumento1', 42);
    jest.advanceTimersByTime(500);
    expect(mockFn).toBeCalledWith('argumento1', 42);
  });
});
