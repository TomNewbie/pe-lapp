export const queryToNumber = (val: unknown): number | undefined => {
  if (typeof val === "string") val = val.trim();
  if (!val) return;
  const n = Number(val);
  return isNaN(n) ? undefined : n;
};
