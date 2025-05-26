export const randomGradientBg = (content: string) => {
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    hash = content.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hex1 = `#${((hash >> 0) & 0x00ffffff).toString(16).padStart(6, "0")}`;
  const hex2 = `#${((hash >> 8) & 0x00ffffff).toString(16).padStart(6, "0")}`;

  const type = (hash & 1) === 0 ? "linear" : "radial";
  const angle = ["0deg", "45deg", "90deg", "135deg", "180deg"][
    Math.abs(hash) % 5
  ];

  return type === "linear"
    ? `linear-gradient(${angle}, ${hex1}, ${hex2})`
    : `radial-gradient(circle, ${hex1}, ${hex2})`;
};
