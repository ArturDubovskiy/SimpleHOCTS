export const getData = async <T>(endpoint: string) => {
  const response = await fetch(endpoint);
  const data: T = await response.json();
  return data;
};
