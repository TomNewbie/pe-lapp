import { useCallback, useEffect, useRef, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { apiRequest } from "../services";

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
  refresh: () => Promise<void>;
}

type Response<T> =
  | ResponseBase<true, null, null>
  | ResponseBase<true, T, null>
  | ResponseBase<true, null, Error>
  | ResponseBase<false, T, null>
  | ResponseBase<false, null, Error>;

export function useAPI(
  url: { path: "/api/user/info" },
  request?: { method?: "GET" }
): Response<{
  _id: string;
  name: string;
  role: "student" | "lecturer";
}>;
export function useAPI(
  url: { path: "/api/student/:id"; params: { id: string } },
  request?: { method?: "GET" }
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
  request?: { method?: "GET" }
): Response<{
  _id: string;
  email: string;
  name: string;
  avatar: string;
  phone_number?: string;
  faculty?: string;
  courses: Array<{ name: string; semester?: string }>;
}>;
export function useAPI(
  url: { path: "/api/lecturers"; searchParams?: { s?: number; n?: number } },
  request?: { method?: "GET" }
): Response<
  Array<{
    _id: string;
    name: string;
    faculty?: string;
  }>
>;

export function useAPI(
  url: {
    path: "/api/courses";
    searchParams?: {
      s?: number;
      n?: number;
      q?: string;
      S?: string | string[];
    };
  },
  request?: { method?: "GET" }
): Response<
  | Array<{
      _id: string;
      name: string;
      semester?: string;
      picture: string;
      lecturer_name: string;
    }>
  | Array<{
      _id: string;
      name: string;
      semester?: string;
      picture: string;
      participant_count: number;
    }>
>;
export function useAPI(
  url: {
    path: "/api/course/:id/participants";
    params: { id: string };
  },
  request?: { method?: "GET" }
): Response<{
  lecturer: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
  };
  students: Array<{
    _id: string;
    name: string;
    email: string;
    avatar: string;
  }>;
}>;

export function useAPI<TExpected extends {} | null = any>(
  url: RequestURL,
  request?: RequestInit
): Response<TExpected> {
  const [pending, setPending] = useState(true);
  const [data, setData] = useState<TExpected | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const parsedURL = parseRequestURL(url);
  const abortCtrlRef = useRef<AbortController | null>(null);

  // main callback for calling the API
  const call = useCallback(async () => {
    abortCtrlRef.current?.abort?.();
    abortCtrlRef.current = new AbortController();

    setPending(true);

    try {
      const data = await apiRequest<TExpected>(parsedURL, {
        ...request,
        signal: abortCtrlRef.current.signal,
      });
      setData(data);
      setError(null);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setData(null);
      setError(err as Error);
    }

    setPending(false);
  }, [parsedURL, request]);

  // call the API as an effect
  useEffect(() => {
    call();
    return () => abortCtrlRef.current?.abort?.();
  }, [call]);

  return { pending, data, error, refresh: call } as any;
}
