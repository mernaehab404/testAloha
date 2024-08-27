import { trans } from "@mongez/localization";
import { parseError, toastError, toastSuccess } from "@mongez/moonlight";
import { mainTranslation } from "apps/admin/utils/locales";
import contactUsUsService from "../services/contact-us-service";

export function useSendReply(row, rowIndex, close, superTable: any) {
  const sendReply = ({ form, values }) => {
    contactUsUsService
      .reply(row.id, values)
      .then(response => {
        superTable.updateRow(response.data.record, rowIndex as number);
        toastSuccess(trans(mainTranslation.replyHasBeenSent));
        close();
      })
      .catch(error => {
        toastError(parseError(error));
        form.submitting(false);
      });
  };

  return sendReply;
}
