import { Accordion, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import { permissionsList } from "apps/admin/data/permissions-list";
import { useMemo } from "react";
import UserGroupPermission from "../UserGroupPermission";

export default function UserGroupsPermissions({ record }: any) {
  const permissions = useMemo(() => {
    return permissionsList().map((permission, index) => (
      <UserGroupPermission
        key={index}
        permission={permission}
        record={record}
      />
    ));
  }, [record]);

  return (
    <>
      <Text component="h2">{trans("permissions")}</Text>
      <Accordion>{permissions}</Accordion>
    </>
  );
}
