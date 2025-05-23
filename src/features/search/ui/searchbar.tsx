import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { useDebounce } from "@shared/hooks/use-debounce";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  searchTerms: string;
  setSearchTerms: (v: string) => void;
};

const Searchbar_: FC<Props> = ({ searchTerms, setSearchTerms }) => {
  const { t } = useTranslation();

  const [value, setValue] = useState(searchTerms);
  const debouncedValue = useDebounce(value);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  useEffect(() => {
    if (debouncedValue !== searchTerms) {
      setSearchTerms(debouncedValue);
    }
  }, [searchTerms, setSearchTerms, debouncedValue]);

  console.log(searchTerms);

  return (
    <OutlinedInput
      fullWidth
      placeholder={t("search")}
      value={value}
      onChange={handleChange}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export const Searchbar = memo(Searchbar_);
