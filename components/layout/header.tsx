import { Download, Grip, HelpCircle, Menu, Settings, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import Typography from "../typography";
import Link from "next/link";
const Header = ({
  imageUrl,
  universityName,
  universityLink,
  username,
}: {
  imageUrl: string;
  universityName: string;
  universityLink: string;
  username: string;
}) => {
  return (
    <nav className="sticky top-0 flex justify-between items-center md:!px-[3.5rem] px-3 text-white bg-[#1d1d1b] py-4 z-50">
      <Link
        target="_blank"
        href={universityLink}
        className="flex justify-start items-center space-x-3 min-w-[50%] cursor-pointer">
        <Image src={imageUrl} alt="NUS" height={30} width={30} />
        <Typography variant="body2" className="text-white truncate max-w-[50%]">
          {universityName}
        </Typography>
      </Link>
      <div className="flex justify-start items-center lg:space-x-7 space-x-3">
        <span className="md:flex hidden cursor-pointer">
          <HelpCircle />
        </span>
        <span className="md:flex hidden cursor-pointer">
          <Settings />
        </span>
        <span className="flex justify-center items-center space-x-3 cursor-pointer">
          <User />
          <Typography className="md:flex hidden" variant={"body2"}>
            Hey, {username}
          </Typography>
        </span>
      </div>
    </nav>
  );
};

export default Header;
