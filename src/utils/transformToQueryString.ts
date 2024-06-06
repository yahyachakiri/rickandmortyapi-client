type QueryObject = Record<string, string>;

export function transformToQueryString(data: QueryObject): string {
  let queryString = "";

  if (Object.keys(data).length === 0) {
    return "";
  }

  for (const key in data) {
    if (data[key]) {
      if (Object.hasOwnProperty.call(data, key)) {
        queryString += `${key}=${encodeURIComponent(data[key])}&`;
      }
    }
  }

  if (queryString.endsWith("&")) {
    queryString = queryString.slice(0, -1);
  }

  return `?${queryString}`;
}
