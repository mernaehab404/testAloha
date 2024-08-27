import { Divider, Grid } from "@mantine/core";
import Helmet from "@mongez/react-helmet";
import { preload } from "@mongez/react-utils";
import homeChartConfigurations from "apps/admin/home/data/home-chart-config";
import CounterCard from "apps/admin/overview/components/CounterCard/CounterCard";
import { cardLinks, totalColors } from "apps/admin/overview/data/home-data";
import Chart from "design-system/components/Chart";
import { appName } from "shared/flags";
import { getHome } from "../../services/home-service";

function _HomePage({ response }: any) {
  const total = response.data.total;

  return (
    <>
      <Helmet title={appName} appendAppName={false} />
      <Grid>
        {Object.entries(total).map(([key, value]) => {
          const color = totalColors[key];
          const link = cardLinks[key];

          return (
            <CounterCard
              key={key}
              link={link}
              value={parseInt(value as string, 10)}
              title={key}
              color={color}
            />
          );
        })}
      </Grid>
      <Divider size="sm" color="#f4f4f4" my={40} />
      {/* <Title order={1} ta="center" mb="md">
        Statistics Today
      </Title>
      <Text ta="center">
        <SegmentedControl
          onChange={setActiveChart}
          value={activeChart}
          data={[
            "Viewed Properties",
            "Searched Properties",
            "Types",
            "Compounds",
            "Cities",
            "Districts",
            "Regions",
            "Posts",
          ]}
        />
      </Text> */}
      <Chart
        title="statisticsToday"
        mostViewed={response.data}
        activeKey="mostViewedPropertiesToday"
        config={homeChartConfigurations}
      />
    </>
  );
}

const HomePage = preload(_HomePage, getHome);

export default HomePage;
