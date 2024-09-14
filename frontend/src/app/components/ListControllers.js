//List controllers for navigation
const ListControllers = ({ page, setPage, maxPage }) => {
  return (
    <div className="w-full flex justify-between items-center pt-6">
      {page > 1 ? (
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          className="w-1/3 text-xl flex justify-start items-center"
        >
          <span
            className="icon-[grommet-icons--previous] min-w-4 min-h-4"
            role="img"
            aria-hidden="true"
          />
          Previous page
        </button>
      ) : (
        <div className="w-1/3"></div>
      )}
      <span className="text-xl w-1/3 text-center">{page}</span>
      {page < maxPage ? (
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="w-1/3 text-xl flex justify-end items-center"
        >
          Next page
          <span
            className="icon-[grommet-icons--next] min-w-4 min-h-4"
            role="img"
            aria-hidden="true"
          />
        </button>
      ) : (
        <div className="w-1/3"></div>
      )}
    </div>
  );
};

export default ListControllers;
