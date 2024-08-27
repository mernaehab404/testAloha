import { trans } from "@mongez/localization";
import {
  actionsColumn,
  booleanColumn,
  booleanFilter,
  DeleteButton,
  emailColumn,
  emailFilter,
  idColumn,
  quickViewButton,
  Table,
  textColumn,
  textFilter,
} from "@mongez/moonlight";
import contactUsUsService from "../../services/contact-us-service";

import ContactUsForm from "../../components/ContactUsForm";
import ViewContactDetails from "../../components/ViewContactDetails";

export const columns = [
  idColumn(),
  textColumn("subject").sortable(),
  textColumn("name").sortable(),
  emailColumn("email").sortable(),
  // translateColumn("type").sortable(),
  emailColumn("phoneNumber").sortable(),
  booleanColumn("hasReply").sortable(),
  actionsColumn([
    quickViewButton(ViewContactDetails, {
      title: () => trans("contactDetails"),
      modalOptions: {
        size: "xl",
      },
    }),
    DeleteButton,
  ]),
];

const filters = [
  textFilter("name"),
  emailFilter("email"),
  // selectFilter("type", ["request", "complaint", "suggestion", "other"]),
  textFilter("phoneNumber"),
  textFilter("subject"),
  booleanFilter("hasReply"),
];

export default function ContactUsPage() {
  return (
    <Table
      title="contactUs"
      name="contactUs"
      service={contactUsUsService}
      form={ContactUsForm}
      filters={filters}
      columns={columns}
    />
  );
}
