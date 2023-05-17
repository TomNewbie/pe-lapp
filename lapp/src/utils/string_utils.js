export const trimField = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const trimmedObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "string") {
      if (value.trim() !== "") {
        trimmedObj[key] = value.trim();
      }
    } else if (typeof value === "object") {
      trimmedObj[key] = trimField(value);
    } else {
      trimmedObj[key] = value;
    }
  });

  return trimmedObj;
};
