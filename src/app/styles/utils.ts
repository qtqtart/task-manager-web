import { ChannelPalette, InputPalette } from "./types";

export const hexToRgbChannel = (hexColor: string) => {
  if (!hexColor) {
    throw new Error(`Hex color is undefined: ${hexColor}`);
  }
  if (!/^#[0-9A-F]{6}$/i.test(hexColor)) {
    throw new Error(`Invalid hex color: ${hexColor}`);
  }

  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);
  return `${r} ${g} ${b}`;
};

export const createPaletteChannel = <T extends InputPalette>(hex: T) => {
  const palette: InputPalette = {};
  Object.entries(hex).forEach(([key, value]) => {
    if (value) {
      palette[`${key}Channel`] = hexToRgbChannel(value);
    }
  });
  return {
    ...hex,
    ...palette,
  } as ChannelPalette<T>;
};

export const varAlpha = (color: string, opacity: number = 1) => {
  if (!color) {
    throw new Error("color is undefined");
  }

  const unsupported =
    (!color.includes("var") && color.includes("Channel")) ||
    color.startsWith("#") ||
    color.startsWith("rgb") ||
    color.startsWith("rgba");

  if (unsupported) {
    throw new Error(`unsupported colors: ${color}`);
  }
  return `rgba(${color} / ${opacity})`;
};

export const pxToRem = (value: number) => {
  if (isNaN(value)) {
    throw new Error(`invalid value: ${value}`);
  }
  return `${value / 16}rem`;
};
