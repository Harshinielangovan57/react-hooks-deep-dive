import { useReducer } from "react";

const initialState = { task: "", done: false };

function reducer(state, action) {
  switch (action.type) {
    case "set":    return { ...state, task: action.payload };
    case "toggle": return { ...state, done: !state.done };
    case "clear":  return initialState;
    default: throw new Error("Unknown action");
  }
}

const UseReducerHook =() => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        value={state.task}
        onChange={(e) => dispatch({ type: "set", payload: e.target.value })}
        placeholder="Enter a task"
      />
      <button onClick={() => dispatch({ type: "toggle" })}>
        Mark as {state.done ? "Undone" : "Done"}
      </button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>

      {state.task && (
        <p style={{ textDecoration: state.done ? "line-through" : "none" }}>
          {state.task}
        </p>
      )}
    </div>
  );
}

export default UseReducerHook;