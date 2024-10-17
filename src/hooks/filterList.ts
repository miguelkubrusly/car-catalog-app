function filterList(data: any[], searchTerm: string, method: string) {
  return data.filter((item) => item[method].includes(searchTerm));
}

export default filterList;
