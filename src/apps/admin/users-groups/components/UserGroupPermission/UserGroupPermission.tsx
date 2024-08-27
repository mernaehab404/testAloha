import { Accordion, Box, Flex, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import { ChipInput } from "@mongez/moonlight";
import {
  ModulePermission,
  PermissionRule,
} from "apps/admin/account/utils/permissions";
import { useState } from "react";

export default function UserGroupPermission({
  permission,
  record,
}: {
  permission: ModulePermission;
  record: any;
}) {
  const [checkedPermissions, setCheckedPermissions] = useState<string[]>(() => {
    // get from record permissions only the permissions that are related to this module
    // record permissions ara array of strings, each string represents a permission rule
    return (record.permissions || []).filter((permissionRule: string) => {
      return permission.rules.some((rule: PermissionRule) => {
        return permissionRule === rule.rule;
      }, []);
    });
  });

  const [isAllChecked, setCheckAll] = useState(
    checkedPermissions.length === permission.rules.length,
  );

  const checkAll = checked => {
    if (checked) {
      setCheckedPermissions(
        permission.rules.map(permission => permission.rule),
      );
    } else {
      setCheckedPermissions([]);
    }
    setCheckAll(checked);
  };

  const checkPermission = (e: any, rule: PermissionRule) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckedPermissions([...checkedPermissions, rule.rule]);
    } else {
      setCheckedPermissions(
        checkedPermissions.filter(permission => permission !== rule.rule),
      );
    }
  };

  return (
    <Accordion.Item value={permission.name}>
      <Accordion.Control>
        <Flex>
          <Text fw="bold" span mx={6}>
            {permission.title} ({checkedPermissions.length} /{" "}
            {permission.rules.length})
          </Text>
          <Text mx={2} span>
            <ChipInput
              size="xs"
              name={permission.name}
              label={trans("checkAll")}
              checked={isAllChecked}
              onChange={checkAll}
            />
          </Text>
        </Flex>
      </Accordion.Control>
      <Accordion.Panel>
        <Flex>
          {permission.rules.map((rule, index) => (
            <Box key={index} mx={10} mb={4}>
              <ChipInput
                size="xs"
                key={index}
                name="permissions[]"
                label={rule.title}
                checked={checkedPermissions.includes(rule.rule)}
                defaultValue={rule.rule}
                onChange={e => checkPermission(e, rule)}
              />
            </Box>
          ))}
        </Flex>
      </Accordion.Panel>
      {/* 
      <Box
        mb={13}
        style={{
          borderBottom: "1px solid #eee",
          paddingBottom: "0.5rem",
        }}>
      </Box> */}
    </Accordion.Item>
  );
}
