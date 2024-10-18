import checkSubstringExistance from "./checkSubstringExistance";

function searchList<T extends Record<string, any>>(
  data: T[],
  searchTerm: string,
  method: keyof T
): T[] {
  return data.filter((item) => {
    return checkSubstringExistance(item[method], searchTerm);
  });
}

export default searchList;
