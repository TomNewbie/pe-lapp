import { useEffect, useState } from "react";
import { URLSearchParamsInit, createSearchParams } from "react-router-dom";

interface RequestURL {
  path: string;
  params?: { [key: string]: any };
  searchParams?: URLSearchParamsInit;
}

const parseRequestURL = ({
  path,
  params = {},
  searchParams,
}: RequestURL): string => {
  // substitute url params
  path = path.replace(
    /(?<=^|\/):[^/]*(?=\/|$)/g,
    (p) => params[p.substring(1)] || p
  );
  // search params
  const searchStr = createSearchParams(searchParams).toString();
  if (searchStr) path += "?" + searchStr;

  return path;
};

interface ResponseBase<
  TPending extends boolean,
  TData,
  TError extends Error | null
> {
  pending: TPending;
  data: TData;
  error: TError;
}

type Response<T> =
  | ResponseBase<true, any, any>
  | ResponseBase<false, T, null>
  | ResponseBase<false, null, Error>;

export function useAPI<TExpected = any>(
  url: RequestURL,
  request?: RequestInit
): Response<TExpected> {
  const [pending, setPending] = useState(true);
  const [data, setData] = useState<TExpected | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const parsedURL = parseRequestURL(url);

  useEffect(() => {
    const abortCtrl = new AbortController();

    (async () => {
      try {
        const res = await fetch(parsedURL, {
          ...request,
          signal: abortCtrl.signal,
        });

        if (!res.ok) {
          throw Error(await res.text());
        }

        let data: TExpected;
        if (res.headers.get("Content-Type")?.includes("application/json")) {
          data = await res.json();
        } else {
          data = (await res.text()) as TExpected;
        }

        setData(data);
        setError(null);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setData(null);
        setError(err as Error);
      }
      setPending(false);
    })();

    return () => abortCtrl.abort();
  }, [parsedURL, request]);

  return { pending, data, error } as any;
}
