import "./App.css";
import { useRef } from "react";
function App() {
  const UseFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

    return [htmlElRef, setFocus];
  };

  const [state, setstate] = UseFocus();
  const [state1, setstate1] = UseFocus();
  const [state2, setstate2] = UseFocus();
  const [state3, setstate3] = UseFocus();

  return (
    <div className="App">
      <input
        id="input"
        type="number"
        onChange={(e) => {
          const length = e.target.value;
          if (length.length === 4) {
            setstate1();
          }
        }}
        ref={state}
      />
      <input
        id="input1"
        type="number"
        ref={state1}
        onChange={(e) => {
          const length = e.target.value;
          if (length.length === 4) {
            setstate2();
          }
          if (length.length === 0) {
            setstate();
          }
        }}
      />
      <input
        id="input2"
        type="number"
        onChange={(e) => {
          const length = e.target.value;
          if (length.length === 4) {
            setstate3();
          }
          if (length.length === 0) {
            setstate1();
          }
        }}
        ref={state2}
      />
      <input
        id="input3"
        type="text"
        maxLength="4"
        onChange={(e) => {
          const length = e.target.value;
          if (length.length === 0) {
            setstate2();
          }
        }}
        ref={state3}
      />
    </div>
  );
}

export default App;
