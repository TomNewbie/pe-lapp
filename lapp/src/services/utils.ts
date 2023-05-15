/**
 * Convert an object to a FormData
 * @param obj the object to convert
 * @returns a FormData created from the object
 */
export function toFormData(obj: object): FormData {
  const formData = new FormData();

  for (const [key, val] of Object.entries(obj)) {
    if (val == null) {
      // skip null and undefined values
      continue;
    }

    if (val instanceof Date) {
      formData.set(key, val.toISOString());
      continue;
    }

    if (typeof val === "string" || !isIterable(val)) {
      formData.set(key, val);
      continue;
    }

    for (const e of val) {
      formData.append(key, e);
    }
  }

  return formData;
}

function isIterable(obj: any): boolean {
  return !!obj?.[Symbol.iterator];
}
