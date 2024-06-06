import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils';
import activities from '../activities';
/**
 * @param endpoint endpoint to fetch data from
 * @returns { data, error, loading }
 */
export function useFetch(activity){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError(null);
    setLoading(true);
    const fetchData = async () => {
      const endpoint = activities[activity].url
      try {
        debugger
        console.log(`${API_BASE_URL}/${endpoint}`)
        const res = await fetch(`${API_BASE_URL}/${endpoint}`);
        const responseJson = await res.json();
        setData(responseJson);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setLoading(false);
    };
    fetchData();
  }, [activity]);

  return { data, error, loading };
}