export const normalize = name => {
  const commaTokens = name.split(', ');
  if (commaTokens.length > 2) {
    throw 'name may only contain a max of one comma';
  }

  const [nameBeforeSuffix, suffix] = commaTokens;

  const names = nameBeforeSuffix.trim().split(' ');
  if (names.length <= 1) {
    return name;
  }

  const firstName = first(names);
  const middleNames = names.slice(1, -1);
  const lastName = last(names);
  const middleInitials = middleNames.map(initialize);

  const namesOtherThanLast = [firstName, ...middleInitials];
  return `${lastName}, ${namesOtherThanLast.join(' ')}${
    suffix ? `, ${suffix}` : ''
  }`;
};

const first = array => array[0];
const last = array => array[array.length - 1];

const initialize = name => {
  if (name.length > 1) {
    return `${name.slice(0, 1)}.`;
  } else {
    return name;
  }
};
