import { Select } from "@mantine/core";
import { useState } from "react";

const defaultData = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
];

export default function TestSelect() {
  const [value, setValue] = useState<string | null>("react");

  const [data, setData] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const onDropdownOpen = () => {
    setLoading(true);
    setTimeout(() => {
      setData(defaultData);
      setLoading(false);
    }, 2000);
  };

  return (
    <Select
      label="Your favorite framework/library"
      value={value}
      disabled={loading}
      onDropdownOpen={onDropdownOpen}
      onChange={setValue}
      data={data}
      placeholder={loading ? "Loading..." : "Pick one"}
    />
  );
}
