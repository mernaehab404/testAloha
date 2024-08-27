import { getLocalizedValue } from "@mongez/moonlight";
import { City, Compound, Property } from "../types";

export default function getMostViewedName(item: City | Compound | Property) {
  if ("city" in item) {
    return getLocalizedValue(item.city.name);
  } else if ("compound" in item) {
    return getLocalizedValue(item.compound.name);
  } else {
    return getLocalizedValue(item.name);
  }
}
