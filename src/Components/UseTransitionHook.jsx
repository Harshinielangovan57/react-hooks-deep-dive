import { useState, useTransition } from "react";

const list = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

const UseTransitionHook = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(list);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    setQuery(e.target.value);
    startTransition(() => {
      setFiltered(list.filter(item => item.includes(e.target.value)));
    });
  }

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      {isPending && <p>Loading...</p>}
      <ul>
        {filtered.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default UseTransitionHook;