import Head from "next/head";
// import Image from "next/image";
import Header from "../components/sections/header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home | {process.env.SITE_NAME}</title>
			</Head>
			<main>
				<h1>EDblog</h1>
				<p>Bienvenidos a EDblog by EDteam</p>
				<p>{process.env.API_BLOG}</p>
			</main>
		</div>
	);
}
