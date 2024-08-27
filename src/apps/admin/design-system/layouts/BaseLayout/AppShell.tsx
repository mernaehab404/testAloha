import { AppShell as BaseAppShell } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BasicComponentProps } from "app/utils/types";
import { SidebarToggleAtom } from "apps/admin/design-system/atoms/sidebar-toggle-atom";
import { headerStyle } from "apps/admin/design-system/layouts/Header/style";
import Sidebar from "apps/admin/design-system/layouts/Sidebar";
import Footer from "../Footer";
import Header from "../Header/Header";

export default function AppShell({ children }: BasicComponentProps) {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isDesktop = useMediaQuery("(max-width: 1200px)");
  const opened = SidebarToggleAtom.use("opened");

  return (
    <>
      <BaseAppShell
        header={{
          height: 60,
          offset: true,
        }}
        navbar={{
          collapsed: {
            mobile: isMobile,
            desktop: isDesktop,
          },
          breakpoint: "md",
          width: isMobile || !opened ? 10 : 280,
        }}
        footer={{
          height: 60,
          collapsed: false,
          offset: false,
        }}>
        <BaseAppShell.Header style={headerStyle} p="xs">
          <Header />
        </BaseAppShell.Header>

        {opened && (
          <BaseAppShell.Navbar
            p="xs"
            style={{
              transition: "all 200ms ease",
            }}>
            <Sidebar />
          </BaseAppShell.Navbar>
        )}
        <BaseAppShell.Main>{children}</BaseAppShell.Main>
        <BaseAppShell.Footer
          style={{
            position: "static",
            padding: "1rem",
          }}>
          <Footer />
        </BaseAppShell.Footer>
      </BaseAppShell>
    </>
  );
}
