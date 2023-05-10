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
  /**
   * Whether the request is pending.
   */
  pending: TPending;
  /**
   * The returned data if any.
   */
  data: TData;
  /**
   * The error occurred if any.
   */
  error: TError;
  /**
   * An async function for rerunning the request.
   */
  refresh: () => Promise<void>;
}

type Response<T> =
  | ResponseBase<true, null, null>
  | ResponseBase<true, T, null>
  | ResponseBase<true, null, Error>
  | ResponseBase<false, T, null>
  | ResponseBase<false, null, Error>;

/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
export function useAPI(
  url: { path: "/api/user/info" },
  request?: { method?: "GET" }
): Response<{
  _id: string;
  name: string;
  role: "student" | "lecturer";
}>;
/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
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
/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
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
/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
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

/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
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
/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
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

/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
export function useAPI(
  url: {
    path: "/api/course/:id/contents";
    params: { id: string };
  },
  request?: { method?: "GET" }
): Response<
  Array<{
    title: string;
    file?: Array<{
      name: string;
      url: string;
    }>;
    body: string;
    createdAt: Date;
    updatedAt: Date;
  }>
>;

/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
export function useAPI(
  url: {
    path: "/api/course/:id/exercises";
    params: { id: string };
  },
  request?: { method?: "GET" }
): Response<
  | Array<{
      name: string;
      id: string;
      deadline: Date;
      grade?: number;
      submitted: boolean;
    }>
  | Array<{
      name: string;
      id: string;
      deadline: Date;
      submission_count: number;
    }>
>;
/**
 * A hook for calling an API using the fetch API internally.
 * @param url an object to be converted into a url string. This object will be
 * parsed into a `string` so it does not need to be wrapped with `useMemo` like
 * `request` does.
 * @param request the `RequestInit` object to be passed into the `fetch` API.
 * This object, if provided, **must** be wrapped with `useMemo` or be a
 * non-changing reference to an object to prevent passing in a new object on
 * every render, which forces the internal effect to be run on every render.
 * This can create a loop in the hook (the api is called on mount; if responsed
 * with a json object, states in the hook are set, thus rerender the component;
 * if on rerender, a new `RequestInit` is passed to the hook, the effect is run
 * again, calling the api, receiving a new json object, setting states, rerender
 * and repeat the loop) and this is not the desired behavior.
 * See {@link RequestInit}.
 * @returns an object holding the state of the request (pending, error or data),
 * along with a function for rerunning the request.
 */
export function useAPI(
  url: {
    path: "/api/exercises/:id";
    params: { id: string };
  },
  request?: { method?: "GET" }
): Response<
  | {
      name: string;
      deadline: Date;
      grade?: number;
      submitted: boolean;
      description: string;
      exercise_files: Array<{
        name: string;
        url: string;
      }>;
      solution_files?: Array<{
        name: string;
        url: string;
      }>;
    }
  | {
      name: string;
      deadline: Date;
      description: string;
      exercise_files: Array<string>;
      solutions: Array<{
        student: {
          name: string;
          id: string;
        };
        submit_time: Date;
        file: {
          url: string;
          name: string;
        };
        grade?: number;
      }>;
    }
>;

// =============================================================================
// Implementation
// =============================================================================
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
