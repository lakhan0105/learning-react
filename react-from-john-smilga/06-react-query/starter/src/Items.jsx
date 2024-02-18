import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customAuth from "./utils";

const Items = ({ items }) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customAuth.get("/"),
  });

  if (isLoading) {
    return <p>loading...</p>;
  }

  // our error
  if (isError) {
    return <p>There was an error</p>;
  }

  // actual error from axios
  // if (error) {
  //   // return <p>{error.message}</p>;
  //   return <p>{error.response.data}</p>;
  // }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
