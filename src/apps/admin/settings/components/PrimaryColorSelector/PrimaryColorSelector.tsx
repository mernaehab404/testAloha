import { ColorSwatch, Group, Text, useMantineTheme } from "@mantine/core";
import { trans } from "@mongez/localization";
import { Tooltip } from "@mongez/moonlight";
import { useFormControl } from "@mongez/react-form";

export default function PrimaryColorSelector({ name, defaultValue }: any) {
  const theme = useMantineTheme();

  const { value, changeValue } = useFormControl({
    defaultValue,
    name,
  });

  const swatches = Object.keys(theme.colors).map(color => (
    <Tooltip label={trans(color)} key={color}>
      <ColorSwatch
        style={{
          cursor: "pointer",
        }}
        opacity={value === color ? 1 : 0.5}
        key={color}
        color={theme.colors[color][6]}
        onClick={() => changeValue(color)}
      />
    </Tooltip>
  ));

  return (
    <>
      <Text size="xl" my="xl">
        {trans("primaryColor")}
      </Text>
      <Group>{swatches}</Group>
    </>
  );
}
