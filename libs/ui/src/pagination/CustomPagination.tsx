import { Button } from "../button";

type CustomPagination = {
  inputValue: number;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

export default function CustomPagination({
  inputValue,
  setInputValue,
  totalPages,
}: CustomPagination) {
  //   const onPageChange = (value: number) => {
  //     setInputValue(value);
  //   };

  const maxButtons = 4;
  const startPage = Math.max(1, inputValue - Math.floor(maxButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <Button
        key={i}
        variant="outline"
        onClick={() => setInputValue(i)}
        isActive={i === inputValue}
      >
        {i}
      </Button>,
    );
  }

  return pages;
}
