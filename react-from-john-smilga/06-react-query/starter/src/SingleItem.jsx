import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import customAuth from "./utils";

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customAuth.patch(`/${taskId}`, { isDone });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const result2 = useMutation({
    mutationFn: (taskId) => {
      return customAuth.delete(`/${taskId}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => {
          result.mutate({ taskId: item.id, isDone: !item.isDone });
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          result2.mutate(item.id);
        }}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
