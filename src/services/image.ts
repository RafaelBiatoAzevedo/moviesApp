const URI_IMAGE = 'https://image.tmdb.org/t/p';

export const getUriImage = (fileSize: string, filePath: string): string => {
  const size = fileSize || 'original';

  return `${URI_IMAGE}/${size}/${filePath}`;
};
