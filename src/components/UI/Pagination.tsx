interface props {
  page: number;
  generatePagination: (currentPage: number, totalPages: number, maxPages?: number, ellipsisThreshold?: number) => (string | number)[];
  handlePage: (data: number) => void;
  pages: number;
}

export const Pagination = ({ page, generatePagination, handlePage, pages }: props) => {
  return (
    <div className="flex gap-2 justify-center my-9">
      <button
        disabled={page == 1}
        onClick={() => handlePage(page - 1)}
        className={`p-2 ${page == 1 ? "opacity-50" : ""} bg-gray rounded w-10`}
      >
        {"<"}
      </button>
      {generatePagination(page, pages).map((item) => (
        <button
          key={item}
          disabled={item == "..."}
          onClick={() => handlePage(item as number)}
          className={`p-2 ${page == item ? "bg-white text-primary" : "bg-gray"} rounded w-10`}
        >
          {item}
        </button>
      ))}
      <button
        disabled={page == pages}
        onClick={() => handlePage(page + 1)}
        className={`p-2 ${page == pages ? "opacity-50" : ""} bg-gray rounded w-10`}
      >
        {">"}
      </button>
    </div>
  );
};
