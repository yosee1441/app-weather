import { useState, useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { findAllCities } from '@/redux/weather';
import { debounce } from '@/screens/home/utils';

const useAutocompleteCities = (timeout: number = 500, limit: number = 3) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const suggestions = useAppSelector((state) => state.weather.cities);

  const fetchSuggestions = useCallback(
    debounce(async (query: string) => {
      if (query && query.trim().length > limit) {
        setLoading(true);
        dispatch(findAllCities(query))
          .unwrap()
          .finally(() => setLoading(false));
      }
    }, timeout),
    [dispatch]
  );

  useEffect(() => {
    if (query) fetchSuggestions(query);
  }, [query, fetchSuggestions]);

  return { suggestions, loading, fetchSuggestions, setQuery, query };
};

export default useAutocompleteCities;
