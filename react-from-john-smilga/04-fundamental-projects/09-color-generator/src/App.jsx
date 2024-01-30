import { useState } from "react";
import { ColorList } from "./ColorList";
import { Form } from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#ffffff").all(10));

  function addColor(color) {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <main>
      <Form addColor={addColor}></Form>
      <ColorList colors={colors}></ColorList>
      <ToastContainer position="top-center"></ToastContainer>
    </main>
  );
};
export default App;
