const Pagination = ({ gotoNextPage, gotoPreviousPage }) => {
  return (
    <div>
      <button onClick={gotoPreviousPage}>Previous</button>
      <button onClick={gotoNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
