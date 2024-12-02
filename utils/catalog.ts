export const catalog: Record<string, string> = {
  '400': 'Solicitud incorrecta',
  '401': 'No autorizado',
  '404': 'No encontrado',
  '429': 'Demasiadas solicitudes',
};

export const getErrorMessage = (code: string) => {
  return catalog[code] || 'Error desconocido';
};
