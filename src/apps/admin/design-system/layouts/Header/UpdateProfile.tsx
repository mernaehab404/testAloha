import { Drawer, Text } from "@mantine/core";
import { trans } from "@mongez/localization";
import {
  createReactForm,
  emailInput,
  imageInput,
  parseError,
  textInput,
  toastLoading,
} from "@mongez/moonlight";
import { useBooleanState, useEvent } from "@mongez/react-hooks";
import { updateProfile } from "apps/admin/account/service/auth";
import user from "apps/admin/account/user";
import { mainTranslation } from "apps/admin/utils/locales";
import { updateProfileEvents } from "./events";

const UpdateProfileForm = createReactForm(reactiveForm => {
  reactiveForm
    .inModal(false)
    .col(12)
    .addWrapperProps({
      shadow: 0,
    })
    .onSubmit(({ formData }) => {
      const loading = toastLoading(trans(mainTranslation.updatingProfile));

      updateProfile(formData)
        .then(() => {
          loading.success(trans(mainTranslation.profileUpdatedSuccessfully));
          updateProfileEvents.close();
        })
        .catch(error => {
          loading.error(parseError(error));
        });
    })
    .setInputs([
      textInput("name").required(),
      textInput("phoneNumber"),
      emailInput("email").required(),
      imageInput("image"),
    ]);
});

export default function UpdateProfile() {
  const [opened, open, close] = useBooleanState(false);

  useEvent(() => updateProfileEvents.onOpen(open));
  useEvent(() => updateProfileEvents.onClose(close));

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        overlayProps={{
          opacity: 0.3,
        }}
        transitionProps={{
          exitDuration: 300,
          duration: 300,
          transition: "slide-left",
        }}
        trapFocus={false}
        title={
          <Text size="xl" fw="bold">
            {trans("accountSettings")}
          </Text>
        }
        padding="xs"
        size="md">
        <UpdateProfileForm record={user.all()} />
        {/* Drawer content */}
      </Drawer>
    </>
  );
}
