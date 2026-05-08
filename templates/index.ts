import DefaultTemplate from "./default/Home";
import SplitTemplate from "./split/Home";
import TreeTemplate from "./tree/Home";

export const templateRegistry: any = {
  default: DefaultTemplate,
  split: SplitTemplate,
  tree: TreeTemplate,
};