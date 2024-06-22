import { useQuery } from "react-query";

/**
 * Custom hook to utilize useQuery from React query to pull from Phoenix
 * @param endpoint  - Endpoint of the API
 * @param baseURL   - The base url
 * @returns React query useQuery data
 */
export default function useApiQuery(endpoint: string, options: object = {}, baseURL: string = '/api/v1') {
  const params = {
    queryKey: ["api", endpoint],
    queryFn: () => fetch(`${baseURL}${endpoint}`).then((res) => res.json()),
    ...options
  };
  return useQuery(params);
}