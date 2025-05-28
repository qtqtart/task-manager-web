type Value = string | number | null | undefined;

export const transformValue = (value: Value, defaultValue: string = "") => {
  if (
    value === null ||
    value === undefined ||
    (typeof value === "number" && Number.isNaN(value))
  ) {
    return defaultValue;
  }
  return value.toString();
};

export const transformValueOnChange = (value: string | number) => {
  const currentValue: string = transformValue(value);
  const cleanedValue = currentValue.replace(/[^0-9.]/g, "");
  const [integerPart, ...decimalParts] = cleanedValue.split(".");
  return decimalParts.length > 0
    ? `${integerPart}.${decimalParts.join("")}`
    : integerPart;
};

export const transformValueOnBlur = (
  value: Value,
  defaultValue: string | number = "",
) => {
  if (
    value === null ||
    value === undefined ||
    (typeof value === "number" && Number.isNaN(value))
  ) {
    return defaultValue;
  }

  const numericValue = parseFloat(value.toString());
  if (Number.isNaN(numericValue)) {
    return defaultValue;
  }
  return numericValue;
};
