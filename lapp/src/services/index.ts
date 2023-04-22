/**
 * Wrapper for the `fetch` API. Either return the parsed json or null when the
 * response is ok. Otherwise, throw an `Error` with the message text being the
 * non-ok response's body.
 */
export async function apiRequest<TExpected extends {} | null = any>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<TExpected> {
  const res = await fetch(input, init);

  if (!res.ok) {
    throw Error(await res.text());
  }

  if (res.headers.get("Content-Type")?.includes("application/json")) {
    return await res.json();
  }
  return null as TExpected;
}
