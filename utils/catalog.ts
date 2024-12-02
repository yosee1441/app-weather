export const catalog: Record<number, string> = {
  400: 'Solicitud incorrecta',
  401: 'No autorizado',
  404: 'No encontrado',
  429: 'Demasiadas solicitudes',
};

export const getErrorMessage = (code: number) => {
  return catalog[code] || 'Error desconocido';
};
