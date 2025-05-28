export const randomGradientBg = (content: string) => {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    hash = content.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hex1 = `#${((hash >> 0) & 0x00ffffff).toString(16).padStart(6, "0")}`;
  const hex2 = `#${((hash >> 8) & 0x00ffffff).toString(16).padStart(6, "0")}`;

  const angle = ["0deg", "45deg", "90deg", "135deg", "180deg"][
    Math.abs(hash) % 5
  ];

  return `linear-gradient(${angle}, ${hex1}, ${hex2})`;
};
