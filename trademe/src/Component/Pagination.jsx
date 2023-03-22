function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({
  total,current,onChange
}) {

  let pages = createArrayOfSize(total).map((a,i) => {
    <button data-testid="page-btn"
      disabled={current===(i+1)}
      onClick={()=>onChange(i+1)}>
       {i+1}
      </button>;
  });
  return <div key={current}>{pages}</div>;
}

export default Pagination;
