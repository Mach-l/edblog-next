import Header from "../components/sections/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
