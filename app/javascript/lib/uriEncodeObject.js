import isArray from "lodash/isArray";
import map from "lodash/map";

function uriEncodeArray(key, array) {
  return map(array, (value) => `${key}[]=${encodeURIComponent(value)}`).join(
    "&"
  );
}

export default function uriEncodeObject(object) {
  return Object.keys(object)
    .sort()
    .map((key) => {
      const unencodedValue = object[key];

      if (!unencodedValue) {
        return null;
      }
      if (isArray(unencodedValue)) {
        return uriEncodeArray(key, unencodedValue);
      }
      const value = encodeURIComponent(object[key]);

      return `${key}=${value}`;
    })
    .filter((val) => val)
    .join("&");
}
