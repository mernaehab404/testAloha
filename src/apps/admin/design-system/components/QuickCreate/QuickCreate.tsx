import { Button, Modal, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  ReactiveForm,
  createReactForm,
  parseError,
  toastError,
  toastSuccess,
  useSuperTable,
} from "@mongez/moonlight";
import { useBooleanState, useEvent } from "@mongez/react-hooks";
import { get } from "@mongez/reinforcements";
import {
  quickCreateEvents,
  quickCreatePropertyEvents,
} from "apps/admin/design-system/layouts/Header/events";
import { quickCreatePropertyInputs } from "apps/admin/properties/components/QuickCreatePropertyInputs";
import propertiesService from "apps/admin/properties/services/properties-service";
import { mainTranslation } from "apps/admin/utils/locales";
import { AxiosResponse } from "axios";

const QuickCreateForm = createReactForm((reactiveForm: ReactiveForm) => {
  reactiveForm
    .inModal(false)
    .col(6)
    .onSubmit(({ values }) => {
      propertiesService
        .create(values)
        .then(response => {
          toastSuccess(trans(mainTranslation.successFormSaved));
          quickCreatePropertyEvents.close();
          quickCreateEvents.create(response);
        })
        .catch(error => {
          toastError(parseError(error));
        });
    })
    .addWrapperProps({
      shadow: 0,
    })
    .setInputs(quickCreatePropertyInputs);
});
export default function QuickCreate() {
  const [opened, open, close] = useBooleanState(false);
  const superTable = useSuperTable();

  const pushRow = (response: AxiosResponse) => {
    const key = superTable.getKey("createRecord");
    const record = key ? get(response.data, key) : response.data;

    if (record) {
      superTable.unshiftRow(record);
    }
  };

  useEvent(() => quickCreateEvents.onCreate(pushRow));
  useEvent(() => quickCreatePropertyEvents.onOpen(open));
  useEvent(() => quickCreatePropertyEvents.onClose(close));

  return (
    <>
      <Button c="green" variant="light" onClick={open}>
        {trans("quickCreate")}
      </Button>
      <Modal
        fullScreen
        closeOnEscape={false}
        opened={opened}
        onClose={close}
        trapFocus={false}
        title={
          <Text size="xl" fw="bold">
            {trans("createNewProperty")}
          </Text>
        }
        padding="xs"
        size="md">
        <QuickCreateForm />
      </Modal>
    </>
  );
}
