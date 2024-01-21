import { useState } from "react";

const ToggleChallenge = () => {
  const [alert, setAlert] = useState(false);

  // function toggleValue() {
  //   if (alert) {
  //     setAlert(false);
  //     return;
  //   }
  //   setAlert(true);
  // }

  function toggleValue() {
    setAlert(!alert);
  }

  return (
    <div>
      <button className="btn" onClick={toggleValue}>
        toggle
      </button>
      {alert && <div>danger</div>}
    </div>
  );
};

export default ToggleChallenge;
