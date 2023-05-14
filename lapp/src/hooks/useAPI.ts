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
  url: {
    /** Get all lecturers, sorted alphabetically by name in ascending order.*/
    path: "/api/lecturers";
    searchParams?: {
      /** query a list starting at the `s + 1`-th lecturer. (0-based index;
       * defaults to 0)
       */
      s?: number;
      /** number of lecturers to return in a list. If `n` is 0, return ALL
       * lecturers, skipping the first `s` lecturers. (defaults to 0)
       */
      n?: number;
    };
  },
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
    /** Get detail of a course. */
    path: "/api/course/:id";
    params: { id: string };
  },
  request?: { method?: "GET" }
): Response<{
  _id: string;
  name: string;
  semester?: string;
  picture: string;
  lecturer: {
    _id: string;
    name: string;
  };
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
    /** Get the courses of a user. For a student, it will be the courses that
     * they have joined. For a lecturer, it will be the courses that they have
     * created.
     */
    path: "/api/courses";
    searchParams?: {
      /**
       * query a list starting at the `s + 1`-th course. (0-based index;
       * defaults to 0)
       */
      s?: number;
      /**
       * number of courses to return in a list. If `n` is 0, return ALL courses,
       * skipping the first `s` courses. (defaults to 0)
       */
      n?: number;
      /**
       * the string to search/filter the courses by. Can be a regular
       * expression. For a student, this will search in the order of course
       * name, lecturer name and semester. For a lecturer, this will search for
       * the course name and semester.
       */
      q?: string;
      /**
       * the sort string, containing the names of the fields appearing in the
       * Response body, by which to sort the resulting query. The sort order of
       * each field is ascending unless the field name is prefixed with `-`,
       * which will be treated as descending. Multiple field names can appear in
       * a single sort string, separated by spaces (e.g., `"-semester%20name"`
       * when URL encoded), or there can be multiple sort strings provided as a
       * string array. Any field not provided in the sort string is not going to
       * be sorted.
       */
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
    /** Get all participants of a course */
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
