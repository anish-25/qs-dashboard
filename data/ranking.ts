type Categories = {
  id: number;
  catgoryName: string;
  key:
    | "countryTerritory"
    | "lowestPerformers"
    | "newEntrants"
    | "similarInstitutions";
};
type Results = {
  title: string;
  ratings: {
    countryTerritory: 0 | 1 | 2 | 3 | 4;
    lowestPerformers: 0 | 1 | 2 | 3 | 4;
    newEntrants: 0 | 1 | 2 | 3 | 4;
    similarInstitutions: 0 | 1 | 2 | 3 | 4;
  };
  result: "Strength" | "Weakness" | "Core Strength";
  description: string;
};

export const GROUP_CATEGORIES: Categories[] = [
  {
    id: 1,
    catgoryName: "Country/ Territory",
    key: "countryTerritory",
  },
  {
    id: 2,
    catgoryName: "Lowest Performers",
    key: "lowestPerformers",
  },
  {
    id: 3,
    catgoryName: "New Entrants",
    key: "newEntrants",
  },
  {
    id: 4,
    catgoryName: "Similar Institutions",
    key: "similarInstitutions",
  },
];

export const RANKING_RESULTS: Results[] = [
  {
    title: "Internation Student Ratio",
    ratings: {
      countryTerritory: 4,
      lowestPerformers: 4,
      newEntrants: 0,
      similarInstitutions: 0,
    },
    result: "Strength",
    description: `The International Students Ratio is an area of
    relative strength for Graphic Era University. The
    proportion of 3.5% foreign students indicates a fair
    level of internationalization of the student body.`,
  },
  {
    title: "Internation Faculty Ratio",
    ratings: {
      countryTerritory: 4,
      lowestPerformers: 4,
      newEntrants: 0,
      similarInstitutions: 0,
    },
    result: "Core Strength",
    description: `The International Faculty Ratio is an area of
     strength for Graphic Era University. The
    proportion of 17.4% foreign professors and research indicates a fair
    level of internationalization of the faculty staff.`,
  },
  {
    title: "Internation Research Network",
    ratings: {
      countryTerritory: 1,
      lowestPerformers: 2,
      newEntrants: 3,
      similarInstitutions: 2,
    },
    result: "Strength",
    description: `According to the data held by QS, the International Research Network is a relative strength for Graphic Era University. This indicates an active commitent to diversifying partnerships with international collaborators, demonstrating a dedicated approach to fostering global research collaborations.`,
  },
  {
    title: "Sustainability",
    ratings: {
      countryTerritory: 0,
      lowestPerformers: 0,
      newEntrants: 0,
      similarInstitutions: 0,
    },
    result: "Weakness",
    description: `There is a visible need of improvement in this area, and the institution may want to consider strategic options.`,
  },
  {
    title: "Employment Outcomes",
    ratings: {
      countryTerritory: 0,
      lowestPerformers: 0,
      newEntrants: 0,
      similarInstitutions: 0,
    },
    result: "Weakness",
    description: `There is a visible need of improvement in this area, and the institution may want to consider strategic options.`,
  },
  {
    title: "Academic Reputation",
    ratings: {
      countryTerritory: 0,
      lowestPerformers: 0,
      newEntrants: 0,
      similarInstitutions: 0,
    },
    result: "Weakness",
    description: `According to the data held by QS, the Academic Reputation is currently a weakness for Graphic Era University. The 23 academic nominations are still limited compared to other institutions analysed in this report, indicating the need of a refreshed strategy. `,
  },
];
