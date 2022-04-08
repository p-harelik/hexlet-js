const capitalize = (str) => {
  const [firstChar = "", ...restChars] = str;
  return `${firstChar.toUpperCase()}${restChars.join("")}`;
};

export default capitalize;
