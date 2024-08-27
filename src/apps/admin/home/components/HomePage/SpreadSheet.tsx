import { useState } from "react";
import Spreadsheet from "react-spreadsheet";

export default function SpreadSheet() {
  const [data, setData] = useState([
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ]);

  return <Spreadsheet data={data} onChange={setData as any} />;
}
