import { trans } from "@mongez/localization";
import { ModulePermission } from "design-system/types/PermissionsProps";

const crudOperations = ["list", "create", "update", "delete"];

export const crud = (
  moduleName: string,
  operations: string[] = crudOperations,
): ModulePermission => {
  const rulesList: any = [];

  for (const rule of operations) {
    rulesList.push({
      rule: `${moduleName}.${rule}`,
      title: trans(rule),
      description: "",
    });
  }

  return {
    name: moduleName,
    title: trans(moduleName),
    rules: rulesList,
  };
};

export const viewableCrud = (moduleName: string) => {
  return crud(moduleName, [...crudOperations, "view"]);
};

// For using later... DON'T REMOVE IT !

// const except = (modulePermissions: ModulePermission, exceptRules: string[]) => {
//   modulePermissions.rules = modulePermissions.rules.filter((rule: any) => {
//     return !exceptRules.includes(rule.rule);
//   });

//   return modulePermissions;
// };

// const append = (modulePermissions: ModulePermission, rules: any[]) => {
//   modulePermissions.rules = [...modulePermissions.rules, ...rules];

//   return modulePermissions;
// };

export const permissionsList = [crud("properties"), crud("localization")];
