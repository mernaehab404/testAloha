import { Divider, Grid, Title } from "@mantine/core";
import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { preload } from "@mongez/react-utils";
import overviewChartConfigurations from "apps/admin/overview/data/most-viewed-data";
import { getOverviews } from "apps/admin/overview/services/overview-service";
import Chart from "design-system/components/Chart";
import { appName } from "shared/flags";
import CounterCard from "../../components/CounterCard/CounterCard";

function _OverviewPage({ response }: any) {
  // Properties
  const properties = response.data.total.properties || 0;
  const rentProperties = response.data.total.rentProperties || 0;
  const saleProperties = response.data.total.saleProperties || 0;
  // Taken Properties
  const takenProperties = response.data.total.takenProperties || 0;
  const takenRentProperties = response.data.total.takenRentProperties || 0;
  const takenSaleProperties = response.data.total.takenSaleProperties || 0;
  // Messages
  const messages = response.data.total.messages || 0;
  const pendingMessages = response.data.total.pendingMessages || 0;
  const repliedMessages = response.data.total.repliedMessages || 0;
  // Inquiries
  const inquiries = response.data.total.inquiries || 0;
  const pendingInquiries = response.data.total.pendingInquiries || 0;
  const resolvedInquiries = response.data.total.resolvedInquiries || 0;
  const closedInquiries = response.data.total.closedInquiries || 0;
  // Users
  const admins = response.data.total.admins || 0;
  const agents = response.data.total.agents || 0;
  const owners = response.data.total.owners || 0;
  const developers = response.data.total.developers || 0;
  const visitors = response.data.total.owners || 0;

  return (
    <>
      <Helmet title={appName} appendAppName={false} />
      <>
        <Title c="red" py={10} order={3}>
          {trans("properties")}
        </Title>
        <Grid>
          <CounterCard
            color="red"
            key={properties}
            value={parseInt(properties as string, 10)}
            title="properties"
          />
          <CounterCard
            color="red"
            key={rentProperties}
            value={parseInt(rentProperties as string, 10)}
            title="rentProperties"
          />
          <CounterCard
            color="red"
            key={saleProperties}
            value={parseInt(saleProperties as string, 10)}
            title="saleProperties"
          />
        </Grid>
        <Divider size="sm" color="#f4f4f4" my={40} />
      </>
      <>
        <Title c="indigo" py={10} order={3}>
          {trans("takenProperties")}
        </Title>
        <Grid>
          <CounterCard
            color="indigo"
            key={takenProperties}
            value={parseInt(takenProperties as string, 10)}
            title="takenProperties"
          />
          <CounterCard
            color="indigo"
            key={takenRentProperties}
            value={parseInt(takenRentProperties as string, 10)}
            title="takenRentProperties"
          />
          <CounterCard
            color="indigo"
            key={takenSaleProperties}
            value={parseInt(takenSaleProperties as string, 10)}
            title="takenSaleProperties"
          />
        </Grid>
        <Divider size="sm" color="#f4f4f4" my={40} />
      </>
      <>
        <Title c="grape" py={10} order={3}>
          {trans("messages")}
        </Title>
        <Grid>
          <CounterCard
            color="grape"
            key={messages}
            value={parseInt(messages as string, 10)}
            title="messages"
          />
          <CounterCard
            color="grape"
            key={pendingMessages}
            value={parseInt(pendingMessages as string, 10)}
            title="pendingMessages"
          />
          <CounterCard
            color="grape"
            key={repliedMessages}
            value={parseInt(repliedMessages as string, 10)}
            title="repliedMessages"
          />
        </Grid>
        <Divider size="sm" color="#f4f4f4" my={40} />
      </>
      <>
        <Title c="green" py={10} order={3}>
          {trans("inquiries")}
        </Title>
        <Grid>
          <CounterCard
            color="green"
            key={inquiries}
            value={parseInt(inquiries as string, 10)}
            title="inquiries"
          />
          <CounterCard
            color="green"
            key={pendingInquiries}
            value={parseInt(pendingInquiries as string, 10)}
            title="pendingInquiries"
          />
          <CounterCard
            color="green"
            key={resolvedInquiries}
            value={parseInt(resolvedInquiries as string, 10)}
            title="resolvedInquiries"
          />
          <CounterCard
            color="green"
            key={closedInquiries}
            value={parseInt(closedInquiries as string, 10)}
            title="closedInquiries"
          />
        </Grid>
        <Divider size="sm" color="#f4f4f4" my={40} />
      </>
      <>
        <Title c="blue" py={10} order={3}>
          {trans("Users")}
        </Title>
        <Grid>
          <CounterCard
            color="blue"
            key={admins}
            value={parseInt(admins as string, 10)}
            title="admins"
          />
          <CounterCard
            color="blue"
            key={developers}
            value={parseInt(developers as string, 10)}
            title="developers"
          />
          <CounterCard
            color="blue"
            key={owners}
            value={parseInt(owners as string, 10)}
            title="owners"
          />
          <CounterCard
            color="blue"
            key={agents}
            value={parseInt(agents as string, 10)}
            title="agents"
          />
          <CounterCard
            color="blue"
            key={visitors}
            value={parseInt(visitors as string, 10)}
            title="visitors"
          />
        </Grid>
        <Divider size="sm" color="#f4f4f4" my={40} />
      </>

      <Chart
        title="statistics"
        mostViewed={response.data}
        activeKey="mostViewedProperties"
        config={overviewChartConfigurations}
      />
    </>
  );
}

const OverviewPage = preload(_OverviewPage, getOverviews);

export default OverviewPage;
