import { Title } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  Table,
  actionsColumn,
  idColumn,
  localizedColumn,
} from "@mongez/moonlight";

export const testColumnsList = [
  idColumn(),
  localizedColumn("title", "title").display("always").sortable(),
  actionsColumn(),
];

export default function MostSearchedDistrictsToday({
  mostSearchedDistrictsToday,
}: any) {
  return (
    <>
      <Title order={4} pt={6}>
        {trans("mostSearchedDistrictsToday")}
      </Title>
      <Table
        m={0}
        name={"faq"}
        pagination={false}
        displayHeader={false}
        columns={testColumnsList}
        data={mostSearchedDistrictsToday}
      />
    </>
  );
}
