import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const genPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "~!@#$%^&*(){}[]?/";

    for (let i = 1; i <= length; i++) {
      const rand = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(rand);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);

  useEffect(() => {
    genPassword();
  }, [length, num, char, setPassword]);

  return (
    <>
      <div className="container">
        <h2>password generator</h2>

        <div className="password-container">
          <input
            className="txt-input"
            type="text"
            placeholder="move the slider"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button className="btn copy-btn" onClick={copyPass}>
            copy
          </button>
        </div>

        <div className="other-inputs">
          <div>
            <input
              type="range"
              min={0}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              onClick={() => {
                setNum((prev) => {
                  return !prev;
                });
              }}
            />
            <label>Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              onClick={() => {
                setChar((prev) => {
                  return !prev;
                });
              }}
            />
            <label>special chars</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
