import { Title } from "@mantine/core";
import { trans } from "@mongez/localization";
import { Table, localizedColumn, numberColumn } from "@mongez/moonlight";

export const columns = [
  localizedColumn("city.name", "name").display("always"),
  numberColumn("total").display("always"),
];

type CitiesProps = {
  cities: {
    city: {
      id: number;
      name: {
        localCode: string;
        value: string;
      }[];
    };
    total: number;
  }[];
};

export default function MostSearchedCitiesToday({ cities }: CitiesProps) {
  return (
    <>
      <Title order={4} pt={6}>
        {trans("mostSearchedCitiesToday")}
      </Title>
      <Table
        pagination={false}
        displayHeader={false}
        columns={columns}
        data={cities}
        bulkSelection={false}
      />
    </>
  );
}
