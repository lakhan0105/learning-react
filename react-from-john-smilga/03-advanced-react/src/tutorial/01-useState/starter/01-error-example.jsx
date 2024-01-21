const ErrorExample = () => {
  let count = 0;
  function increaseCount(e) {
    count++;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={increaseCount}>
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
