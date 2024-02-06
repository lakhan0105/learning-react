import { CharsInput } from "./CharsInput";
import { NumsInput } from "./NumsInput";
import { RangeInput } from "./RangeInput";
import { TextInput } from "./TextInput";

export const Form = ({
  pass,
  setHasNums,
  setHasChars,
  genPass,
  limit,
  setLimit,
  passwordRef,
  copyPass,
}) => {
  return (
    <form className="input-form">
      <TextInput
        pass={pass}
        passwordRef={passwordRef}
        copyPass={copyPass}
      ></TextInput>

      <div className="other-inputs-container">
        <RangeInput
          limit={limit}
          setLimit={setLimit}
          genPass={genPass}
        ></RangeInput>

        <NumsInput setHasNums={setHasNums}></NumsInput>
        <CharsInput setHasChars={setHasChars}></CharsInput>
      </div>
    </form>
  );
};
