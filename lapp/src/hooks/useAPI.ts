import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";

interface RequestURL {
  path: string;
  params?: Record<string, any>;
  searchParams?: Record<string, any>;
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

export function useAPI(
  url: { path: "/api/user/info" },
  request: {
    method?: "GET";
    headers: {
      Authorization: `Bearer ${string}`;
    };
  }
): Response<{
  _id: string;
  name: string;
  role: "student" | "lecturer";
}>;
export function useAPI(
  url: { path: "/api/user/profile" },
  request: {
    method: "PATCH";
    headers: {
      Authorization: `Bearer ${string}`;
      "Content-Type": "application/json";
    };
    body:
      | {
          major?: string;
          intake?: number;
          phone_number?: string;
        }
      | {
          faculty?: string;
          phone_number?: string;
        };
  }
): Response<null>;
export function useAPI(
  url: { path: "/api/student/:id"; params: { id: string } },
  request: {
    method?: "GET";
    headers: {
      Authorization: `Bearer ${string}`;
    };
  }
): Response<{
  _id: string;
  email: string;
  name: string;
  avatar: string;
  phone_number?: string;
  major?: string;
  intake?: number;
}>;
export function useAPI(
  url: { path: "/api/lecturer/:id"; params: { id: string } },
  request: {
    method?: "GET";
    headers: {
      Authorization: `Bearer ${string}`;
    };
  }
): Response<{
  _id: string;
  email: string;
  name: string;
  avatar: string;
  phone_number?: string;
  faculty?: string;
  courses: Array<{ name: string; semester: string }>;
}>;
export function useAPI(
  url: { path: "/api/lecturers"; searchParams?: { s?: number; n?: number } },
  request: {
    method?: "GET";
    headers: {
      Authorization: `Bearer ${string}`;
    };
  }
): Response<
  Array<{
    _id: string;
    name: string;
    faculty?: string;
  }>
>;

export function useAPI<TExpected = any>(
  url: RequestURL,
  request?: RequestInit | { body: object }
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
          body:
            typeof request?.body === "object"
              ? JSON.stringify(request.body)
              : request?.body,
          signal: abortCtrl.signal,
        });

        if (!res.ok) {
          throw Error(await res.text());
        }

        let data: TExpected | null = null;
        if (res.headers.get("Content-Type")?.includes("application/json")) {
          data = await res.json();
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
