function filterList<T extends Record<string, any>>(
  data: T[],
  searchTerm: string,
  method: keyof T
): T[] {
  return data.filter((item) => {
    if (typeof item[method] === "string") {
      const lowerValue = item[method].toLocaleLowerCase();
      const lowerSearchTerm = searchTerm.toLocaleLowerCase();
      return lowerValue.includes(lowerSearchTerm);
    }
    return false;
  });
}

export default filterList;
