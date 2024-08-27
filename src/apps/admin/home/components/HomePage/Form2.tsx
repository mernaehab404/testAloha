import { ChooseInput } from "@mongez/moonlight";
import { Form } from "@mongez/react-form";
import { userStatuses } from "apps/admin/administrators/utils/flags";

export default function Form2() {
  return (
    <>
      <Form>
        <ChooseInput name="status" data={userStatuses} />
      </Form>
    </>
  );
}
