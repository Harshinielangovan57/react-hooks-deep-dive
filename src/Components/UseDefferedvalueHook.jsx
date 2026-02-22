import { useState, useDeferredValue } from "react";

const list = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
const UseDefferedvalueHook = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = list.filter(item => item.includes(deferredQuery));

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p style={{ opacity: query !== deferredQuery ? 0.5 : 1 }}>
        Showing results for: <b>{deferredQuery}</b>
      </p>
      <ul>
        {filtered.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default UseDefferedvalueHook;