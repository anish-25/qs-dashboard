import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { PropsWithChildren } from "react";

const layout = async ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header
        universityLink="https://topuniversities.com/universities/graphic-era-deemed-be-university-dehradun#:~:text=Rankings%20%26%20ratings,-RANKINGS&text=Graphic%20Era%20Deemed%20to%20be%20University%20Dehradun%20is%20one%20of,in%20QS%20Sustainability%20Ranking%202024."
        imageUrl="https://www.topuniversities.com/sites/default/files/profiles/logos/230302115834am362973geu-logo-200x200.jpg"
        universityName="Graphic Era (Deemed) University Dehradun"
        username="John"
      />
      <Sidebar />
      {children}
    </>
  );
};

export default layout;
