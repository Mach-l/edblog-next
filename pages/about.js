import Head from "next/head";
import Image from "next/image";
import Header from "../components/sections/header";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home | EDblog</title>
			</Head>
			<h1>About us (Acerca de nosotros)</h1>
			<p>Bienvenidos a EDblog by EDteam</p>
			<p>{process.env.API_BLOG}</p>
		</div>
	);
}
