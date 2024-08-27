export type MostViewedProps = {
  mostViewed: City[] | Compound[] | Property[];
};

export type MostViewedCityProps = {
  cities: City[];
};

export type MostViewedCompoundsProps = {
  compounds: Compound[];
};

export type MostViewedPropertiesProps = {
  properties: Property[];
};

export type City = {
  totalViews: number;
  id: number;
  city: {
    id: number;
    name: {
      localeCode: string;
      value: string;
    }[];
  };
  region: {
    id: number;
    name: {
      localeCode: string;
      value: string;
    }[];
  };
};
export type Compound = {
  totalViews: number;
  compound: {
    id: number;
    name: {
      localeCode: string;
      value: string;
    }[];
  };
};

export type Property = {
  id: number;
  isActive: boolean;
  name: {
    localeCode: string;
    value: string;
  }[];
  saleType: string;
  totalViews: number;
  totalUniqueViews?: number;
};

export type GradientColors = {
  start: string;
  end: string;
  border: string;
};

export type GetChartData = {
  data: any;
  title: string;
  gradientColors: GradientColors;
};
