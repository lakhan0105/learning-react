import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import customAuth from "./utils";
import { toast } from "react-toastify";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: () => {
      return customAuth.post("/", { title: newItemName });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added");
      setNewItemName("");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    result.mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={result.isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
