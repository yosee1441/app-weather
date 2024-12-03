import { isInRange, showToastError } from '@/utils/utils';
import { ToastAndroid, Platform } from 'react-native';

jest.mock('react-native', () => ({
  Platform: { OS: 'android' },
  ToastAndroid: { show: jest.fn() },
}));

describe('isInRange', () => {
  it('should return true if the value is within the range', () => {
    expect(isInRange(5, 1, 10)).toBe(true);
    expect(isInRange(1, 1, 10)).toBe(true);
    expect(isInRange(10, 1, 10)).toBe(true);
  });

  it('should return false if the value is outside the range', () => {
    expect(isInRange(0, 1, 10)).toBe(false);
    expect(isInRange(11, 1, 10)).toBe(false);
  });
});

describe('showToastError', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call ToastAndroid.show with the correct message on Android', () => {
    Platform.OS = 'android';
    showToastError('Test error message');
    expect(ToastAndroid.show).toHaveBeenCalledWith(
      'Test error message',
      ToastAndroid.SHORT
    );
  });

  it('should not call ToastAndroid.show on non-Android platforms', () => {
    Platform.OS = 'ios';
    showToastError('Test error message');
    expect(ToastAndroid.show).not.toHaveBeenCalled();
  });
});
