import classes from './MainLayout.module.css';
import PropTypes from 'prop-types';
import {useFetchMovies} from "../model/services/useFetchMovies";

export const MainLayout = (props) => {
	const {header, left, content, right } = props;

	const {loading, error} = useFetchMovies();

	if (loading) {
		return 	<div className={classes.layout}>
			<h2>Loading...</h2>
		</div>
	}
	else {
		return (
			<div className={classes.layout}>
				{header && <header className={classes.header}>
					{header}
				</header>}

				<div className={'right'}>{right}</div>

				<main className={classes.content}>
					{error ? <h2>The error occurred while fetching</h2> : content}
				</main>

				<div className={classes.left}>{left}</div>
			</div>
		);
	}
};

MainLayout.propTypes = {
	header: PropTypes.element,
	content: PropTypes.element.isRequired,
	left: PropTypes.element,
	right: PropTypes.element,
}

