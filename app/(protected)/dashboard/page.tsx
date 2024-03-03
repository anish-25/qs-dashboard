import Typography from "@/components/typography";
import Container from "@/components/layout/container";
import { Mic, PieChart, Search } from "lucide-react";
import { GROUP_CATEGORIES, RANKING_RESULTS } from "@/data/ranking";
import { CRITERIAS } from "@/data/criterias";
import CriteriaCard from "@/components/custom/criteria-card";
import Badge from "@/components/custom/badge";
import Note from "@/components/custom/note";
import ProgressIndicator from "@/components/custom/progress-indicator";
import SubNavbar from "@/components/custom/sub-navbar";

export default async function Home() {
  return (
    <>
      <Container className="lg:!pl-4 max-w-full text-white -z-10 sm:!pl-12 sm:pr-4 !pr-0 !pl-12">
        <div className="flex relative xl:justify-end justify-center h-full items-center">
          <SubNavbar />
          <div className="xl:w-[80%] flex flex-col items-start md:p-7 p-3 space-y-4 text-black">
            <div className="flex md:flex-row flex-col md:space-y-0 space-y-3 w-full justify-between items-center">
              <span className="flex justify-start items-center space-x-2">
                <PieChart fill="#1d1d1b" size={28} stroke="white" />
                <Typography variant={"body1"} className="font-semibold">
                  Summary
                </Typography>
              </span>
              <span className="relative">
                <input
                  className=" border border-gray-300 p-2 py-1.5 pl-12 pr-10 focus:outline-none focus:border-primary text-sm rounded-3xl"
                  type="text"
                  placeholder="Search"
                />
                <Search
                  className="absolute left-4 top-2"
                  color="#615E5D"
                  size={18}
                />
                <Mic
                  className="absolute right-4 top-2"
                  color="#615E5D"
                  size={18}
                />
              </span>
            </div>
            <div
              className="w-full flex flex-col min-h-screen bg-[#F4F4F4] p-4 lg:pr-14 space-y-4"
              style={{
                boxShadow: "17px 32px 0px 7px rgba(251,251,251,1) !important",
              }}>
              <Typography variant={"h3"} className="font-medium">
                Overview
              </Typography>
              <div className="w-full bg-white md:p-8 p-4 flex flex-col space-y-6 justify-center items-center rounded-md">
                <Typography className="font-bold text-center" variant={"body1"}>
                  QS WORLD UNIVERSITY RANKINGS - MINIMUM REQUIREMENTS
                </Typography>
                <Note
                  type="warn"
                  description="   The information collected by QS Intelligence Unit indicates
                    that Graphic Era (Deemed) University does not currently meet
                    the requirements to access in the QS World University
                    Rankings."
                />
                <div className="!mt-12 max-w-3xl flex flex-col space-y-2">
                  {CRITERIAS.map((criteria) => (
                    <>
                      <Badge text={criteria.label} />
                      <div
                        className={`grid lg:grid-cols-${criteria.cols} grid-cols-1 gap-1.5 place-items-center text-center`}>
                        {criteria.criterias.map((c) => (
                          <CriteriaCard
                            criteria={c.name}
                            key={c.name}
                            hasMet={c.hasMet}
                            description={c.description}
                          />
                        ))}
                      </div>
                    </>
                  ))}
                  <span className="w-full h-1 border-t-2 border-t-secondary !mt-10"></span>
                  <div className="flex flex-col space-y-8 justify-start items-center w-full">
                    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6">
                      <div className="flex flex-col justify-center items-center space-y-3">
                        <Typography
                          className="w-full font-bold flex justify-center items-center space-x-3 bg-secondary p-1 rounded-md"
                          variant={"body3"}>
                          Group Categories
                        </Typography>
                        <div className="grid grid-cols-4 w-full !mt-14 place-items-center">
                          {GROUP_CATEGORIES.map((category) => (
                            <Typography
                              key={category.id}
                              variant={"body3"}
                              className="font-bold -rotate-90 w-[30%]">
                              {category.catgoryName}
                            </Typography>
                          ))}
                        </div>
                      </div>
                      <div className=""></div>
                    </div>
                    {RANKING_RESULTS.map((result) => (
                      <div
                        key={result.title}
                        className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div className="flex flex-col justify-center items-start space-y-6">
                          <Typography
                            variant={"subtitle"}
                            className="font-bold">
                            {result.title}
                          </Typography>
                          <div className="grid grid-cols-4 gap-5 place-items-center w-full">
                            {GROUP_CATEGORIES.map((category) => (
                              <ProgressIndicator
                                key={category.id}
                                value={result.ratings[category.key]}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-3">
                          <Typography variant={"body2"} className="font-bold">
                            {result.result}
                          </Typography>
                          <Typography variant={"body3"} className="font-medium">
                            {result.description}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
