import { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "./components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [pass, setPass] = useState("");
  const [hasNums, setHasNums] = useState(false);
  const [hasChars, setHasChars] = useState(false);
  const [limit, setLimit] = useState(6);

  // useRef hook
  const passwordRef = useRef();

  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // useCallback fucntion to gen pass str
  const genPass = useCallback(() => {
    if (hasNums) {
      str += "0123456789";
    }

    if (hasChars) str += "!@#$%^&*()[]+=-_*/?|";

    let newStr = "";
    for (let i = 1; i <= limit; i++) {
      const rand = Math.floor(Math.random() * str.length);
      newStr += str.charAt(rand);
    }
    setPass(newStr);
  }, [hasNums, hasChars, limit, setPass]);

  useEffect(() => {
    genPass();
  }, [setPass, hasNums, hasChars, limit]);

  // toast function
  const notify = () => toast("copied to clipboard");

  const copyPass = (text) => {
    navigator.clipboard.writeText(text);
    notify();
  };

  return (
    <main>
      <ToastContainer position="top-center"></ToastContainer>;
      <div className="container">
        <Form
          pass={pass}
          setPass={setPass}
          hasNums={hasNums}
          setHasNums={setHasNums}
          setHasChars={setHasChars}
          genPass={genPass}
          limit={limit}
          setLimit={setLimit}
          passwordRef={passwordRef}
          copyPass={copyPass}
        ></Form>
      </div>
    </main>
  );
}

export default App;
