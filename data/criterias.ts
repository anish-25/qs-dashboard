type CriteriaDetail = {
  name: string;
  description?: string;
  hasMet?: boolean;
};
type Criteria = {
  label: string;
  cols: number;
  criterias: CriteriaDetail[];
};

export const CRITERIAS: Criteria[] = [
  {
    label: "ELIGIBILITY CRITERIA",
    cols: 3,
    criterias: [
      {
        name: "UNDERGRADUATE PROGRAMS",
        hasMet: true,
      },
      {
        name: "POSTGRADUATE PROGRAMS",
        hasMet: true,
      },
      {
        name: "MULTIPLE BROAD SUBJECT AREAS",
        hasMet: true,
      },
    ],
  },
  {
    label: "INCLUSION CRITERIA",
    cols: 2,
    criterias: [
      {
        name: "ACADEMIC SURVEY SCREENING",
        hasMet: false,
      },
      {
        name: "RESEARCH SCREENING",
        hasMet: true,
      },
    ],
  },
  {
    label: "EXCLUSION CRITERIA",
    cols: 1,
    criterias: [
      {
        name: "SMALL SIZE",
        description: "MORE THAN 5000 STUDENTS",
      },
    ],
  },
];
