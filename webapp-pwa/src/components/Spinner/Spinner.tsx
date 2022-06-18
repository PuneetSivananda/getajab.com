import { h, FunctionalComponent } from "preact";
import styles from "./style.css";

const Spinner: FunctionalComponent = () => {
	return (
		<div>
			<div class={styles.loader}></div>
		</div>
	);
};

export default Spinner;
