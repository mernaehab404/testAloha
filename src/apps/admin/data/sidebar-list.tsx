import { trans } from "@mongez/localization";
import {
  IconBrandReason,
  IconNotes,
  IconPhoneCall,
  IconReport,
  IconSettings,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react";
import URLS from "app/utils/urls";
import { SidebarLink } from "design-system/types/Sidebar";

export const sidebarLinks = (): SidebarLink[] => [
  {
    label: trans("dashboard"),
    route: URLS.home,
    icon: IconNotes,
    iconColor: "green",
    permission: "dashboard.list",
  },
  {
    label: trans("overview"),
    route: URLS.overview,
    icon: IconReport,
    iconColor: "green",
    permission: "overview.list",
  },
  {
    label: trans("users"),
    icon: IconUsers,
    iconColor: "orange",
    route: URLS.users,
    permission: "users.list",
  },
  {
    label: trans("reasons"),
    icon: IconBrandReason,
    iconColor: "orange",
    route: URLS.reasons,
    permission: "reasons.list",
  },
  {
    label: trans("organizations"),
    icon: IconUsersGroup,
    iconColor: "orange",
    route: URLS.organizations,
    permission: "organizations.list",
  },
  {
    label: trans("contacts"),
    route: URLS.contactUs,
    icon: IconPhoneCall,
    iconColor: "lime",
    permission: "contacts.list",
  },
  {
    label: trans("settings"),
    route: URLS.settings,
    icon: IconSettings,
    iconColor: "blue",
    permission: "settings.list",
  },
];
