import { catalog, getErrorMessage } from '@/utils/catalog';

describe('utils getErrorMessage', () => {
  it('should return the correct message for defined codes', () => {
    expect(getErrorMessage('400')).toBe('Solicitud incorrecta');
    expect(getErrorMessage('401')).toBe('No autorizado');
    expect(getErrorMessage('404')).toBe('No encontrado');
    expect(getErrorMessage('429')).toBe('Demasiadas solicitudes');
  });

  it('should return "Error desconocido" for undefined codes', () => {
    expect(getErrorMessage('500')).toBe('Error desconocido');
    expect(getErrorMessage('abc')).toBe('Error desconocido');
  });

  it('should handle empty or invalid inputs gracefully', () => {
    expect(getErrorMessage('')).toBe('Error desconocido');
    expect(getErrorMessage(null as unknown as string)).toBe(
      'Error desconocido'
    );
    expect(getErrorMessage(undefined as unknown as string)).toBe(
      'Error desconocido'
    );
  });

  it('should return consistent values for the catalog keys', () => {
    Object.keys(catalog).forEach((key) => {
      expect(getErrorMessage(key)).toBe(catalog[key]);
    });
  });
});
