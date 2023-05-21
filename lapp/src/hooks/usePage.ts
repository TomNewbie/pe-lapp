import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

interface Options {
  size: number;
  initialPage?: number;
}

interface ReturnType {
  /**
   * The current page as an object of the starting item index and the length of
   * the page
   */
  pageObj: { s: number; n: number };
  /**
   * The current page number
   */
  page: number;
  /**
   * The function to set the current page (essentially changing `s`)
   */
  setPage: Dispatch<SetStateAction<number>>;
  /**
   * Short-hand for `() => setPage(p => p + 1)`
   */
  nextPage: () => void;
  /**
   * Short-hand for `() => setPage(p => p - 1)`
   */
  prevPage: () => void;
}

/**
 * Returns the starting number of the current page `s` and the number of
 * items per page `n` along with functions to change the page (change those
 * returned numbers). The page value range is lower-bounded to 1.
 */
export const usePage = ({ size, initialPage = 1 }: Options): ReturnType => {
  const [page, _setPage] = useState(initialPage);

  const pageObj = useMemo(
    () => ({ s: (page - 1) * size, n: size }),
    [page, size]
  );

  const setPage = useCallback<Dispatch<SetStateAction<number>>>(
    (newPage) =>
      _setPage((prev) =>
        Math.max(1, typeof newPage === "function" ? newPage(prev) : newPage)
      ),
    [_setPage]
  );
  const nextPage = useCallback(() => setPage((p) => p + 1), [setPage]);
  const prevPage = useCallback(() => setPage((p) => p - 1), [setPage]);

  return { pageObj, page, setPage, nextPage, prevPage };
};
