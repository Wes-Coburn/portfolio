export function AddString(currentString: string, stringToAdd: string) {
  return `${currentString} ${stringToAdd}`;
}

export function RemoveString(currentString: string, stringToRemove: string) {
  const stringArr = currentString.split(' ');
  const newArr = stringArr.filter((c) => c !== stringToRemove);
  return newArr.join(' ');
}
