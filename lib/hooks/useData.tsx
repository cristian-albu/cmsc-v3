import { useEffect, useState } from "react";
import client from "../client";

interface UseMemoDataOptions {
  query: string;
  dependencies?: any[];
}

function useFetcher<T>(initialData: T, options?: UseMemoDataOptions) {
  const [dataState, setDataState] = useState<T>(initialData);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!options?.query) return;

    async function getData() {
      try {
        const data = await client.request<T>(options?.query || "");
        setDataState(data);
      } catch (err) {
        setError(err as Error);
      }
    }

    getData();
  }, [options?.query, ...(options?.dependencies || [])]);

  return { data: dataState, error };
}

export default useFetcher;
