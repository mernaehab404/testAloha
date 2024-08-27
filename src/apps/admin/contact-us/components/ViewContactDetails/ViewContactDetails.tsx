import { Box, Grid, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  BooleanValue,
  QuickViewButtonProps,
  SubmitButton,
  TextAreaInput,
  useSuperTable,
} from "@mongez/moonlight";
import { Form } from "@mongez/react-form";
import { useSendReply } from "../../hooks";

export default function ViewContactDetails({
  row,
  rowIndex,
  close,
}: QuickViewButtonProps) {
  const superTable = useSuperTable();
  const canReply = superTable.allows("reply");
  const sendReply = useSendReply(row, rowIndex, close, superTable);

  return (
    <>
      <Grid>
        <Grid.Col span={8}>
          <Box mb={10}>
            <Text fw="bold" mb={12}>
              {trans("subject")}
            </Text>
            <Text>{row.subject}</Text>
          </Box>
          <Box mb={10}>
            <Text fw="bold" mb={12}>
              {trans("message")}
            </Text>
            <Text>{row.message}</Text>
          </Box>
          <Box mb={10}>
            <Text fw="bold" mb={12}>
              {trans("reply")}
            </Text>
            {row.reply && <Text>{row.reply}</Text>}
            {!row.reply && canReply && (
              <Form onSubmit={sendReply}>
                <TextAreaInput
                  autoFocus
                  required
                  placeholder={trans("reply")}
                  name="reply"
                />
                <SubmitButton size="md" mt={16} color="teal">
                  {trans("send")}
                </SubmitButton>
              </Form>
            )}
          </Box>
        </Grid.Col>
        <Grid.Col span="auto">
          <Box mb={10}>
            <Text color={"blue"} fw="bold">
              {trans("sender")}
            </Text>
            <Text>{row.name}</Text>
          </Box>
          <Box mb={10}>
            <Text color={"indigo"} fw="bold">
              {trans("email")}
            </Text>
            <Text>{row.email}</Text>
          </Box>
          <Box mb={10}>
            <Text color={"green"} fw="bold">
              {trans("phoneNumber")}
            </Text>
            <Text>{row.phoneNumber}</Text>
          </Box>
          {row.type && (
            <Box mb={10}>
              <Text color={"green"} fw="bold">
                {trans("type")}
              </Text>
              <Text>{trans(row.type)}</Text>
            </Box>
          )}
          <Box mb={10}>
            <Text color="gray" fw="bold">
              {trans("createdAt")}
            </Text>
            <Text color="gray">{row.createdAt.format}</Text>
          </Box>
          <Box mb={10}>
            <Text color={row.hasReply ? "green" : "red"} fw="bold">
              {trans("hasReply")}
            </Text>
            <Text>
              <BooleanValue value={row.hasReply} />
            </Text>
          </Box>
          <Box mb={10}>
            <Text color={row.hasReply ? "green" : "gray"} fw="bold">
              {trans("repliedBy")}
            </Text>
            <Text>{row.repliedBy?.name || "-"}</Text>
          </Box>
          <Box mb={10}>
            <Text color={row.hasReply ? "green" : "gray"} fw="bold">
              {trans("repliedAt")}
            </Text>
            <Text color="gray">{row.repliedAt?.format || "-"}</Text>
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
}
