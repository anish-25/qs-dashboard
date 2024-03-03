import Container from "@/components/layout/container";
import Typography from "@/components/typography";

import Image from "next/image";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <Container className="lg:!pl-4 max-w-full text-primary -z-10 sm:!pl-12 sm:pr-4 !pr-0 !pl-12">
        <div className="flex flex-col space-y-4 h-full w-full justify-center items-center">
          <Image
            src={
              "https://www.topuniversities.com/modules/custom/qs_react_home/js/dist/assets/enroll-1.png"
            }
            alt="Hero"
            width={300}
            height={300}
          />
          <Typography variant={"h2"}>Hi John !</Typography>

          <Typography variant={"subtitle"}>
            This page is under construction. Please come back later.
          </Typography>
        </div>
      </Container>
    </>
  );
}
