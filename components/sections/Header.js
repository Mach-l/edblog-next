import React from "react";
import MainMenu from "../navigation/MainMenu";
import Image from "next/image";

const Header = () => {
	return (
		<>
			<Image src="/logo-edteam.png" alt="EDlogor" width={100} height={75} />
			<MainMenu />
		</>
	);
};

export default Header;
