import Link from "next/link";

export default function MainMenu() {
	return (
		<>
			<ul>
				<li>
					<Link href="/">
						<a>Inicio</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>Acerca de</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contacto</a>
					</Link>
				</li>
			</ul>
		</>
	);
}
