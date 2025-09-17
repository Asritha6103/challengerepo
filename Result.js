import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Sample dataset
const categories = {
  "banana peel": "Organic Waste (Compostable)",
  "plastic bottle": "Recyclable Plastic",
  "glass bottle": "Recyclable Glass",
  "paper": "Recyclable Paper",
  "battery": "Hazardous Waste"
};

export default function Result() {
  const router = useRouter();
  const { item } = router.query;
  const [classification, setClassification] = useState("");

  useEffect(() => {
    if (item) {
      const lowerItem = item.toLowerCase();
      setClassification(categories[lowerItem] || "Unknown Item ❓");
    }
  }, [item]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Classification Result</h1>
      <p><b>Item:</b> {item}</p>
      <p><b>Category:</b> {classification}</p>
      <button onClick={() => router.push("/")}>🔙 Back</button>
    </div>
  );
}
