import useFetch from "./hooks/useFetch";
const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const { data, isPending, isError } = useFetch(url);

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <main>
      <h1>Hello</h1>
      {data &&
        data.map((item) => {
          return <h4 key={item.id}>name: {item.name}</h4>;
        })}
    </main>
  );
}

export default App;
