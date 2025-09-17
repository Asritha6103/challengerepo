import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [item, setItem] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to results page with query parameter
    router.push(`/result?item=${encodeURIComponent(item)}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>♻️ RecycleIT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter waste item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <button type="submit">Classify</button>
      </form>
    </div>
  );
}
