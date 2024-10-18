function checkSubstringExistance(string: string, substring: string) {
  const lowerString = string.toLocaleLowerCase();
  const lowerSubstring = substring.toLocaleLowerCase();
  return lowerString.includes(lowerSubstring) ? true : false;
}

export default checkSubstringExistance;
