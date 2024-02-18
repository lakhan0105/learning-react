import { useState } from "react";

export const useToggle = (defaultVal) => {
  const [show, setShow] = useState(defaultVal);

  const toggle = () => {
    setShow(!show);
  };

  return [show, toggle];
};
