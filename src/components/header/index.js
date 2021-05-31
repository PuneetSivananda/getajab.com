import { h, Component } from "preact";
import { Link } from "preact-router";
import style from "./style";

const Header = () => {
	return (
		<header class={style.header}>
			<h1>Preact PWA Boilerplate Test</h1>
			<nav>
				<Link href="/">Home</Link>
			</nav>
		</header>
	);
};

export default Header;
