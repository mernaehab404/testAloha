import { integerInput } from "@mongez/moonlight";

export function sortOrderInput() {
  return integerInput("sortOrder").hint("sortOrderHint").defaultValue(0);
}
