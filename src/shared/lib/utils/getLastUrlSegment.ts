/**
 * Retrieves the value of the last segment from a URL string.
 *
 * @param {string} url - The URL string from which to extract the value.
 * @returns {string} - The value of the last URL segment.
 */
export const getLastUrlSegment = (url: string) => {
  const parts = url.split('/');

  const value = parts[parts.length - 1];

  return value;
};
