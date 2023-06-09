import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
	return (
	<div className="menu">
		<ul className="menu__list">
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--top menu__item-link--active" to="/">Top</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--soccer menu__item-link--live" to="/">Soccer</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--hockey menu__item-link--live" to="/">Hockey</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--basketball" to="/">Basketball</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--tennis" to="/">Tennis</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--rugby menu__item-link--live" to="/">Rugby</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--volleyball" to="/">Volleyball</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--mma" to="/">MMA</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--cricket" to="/">Cricket</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--racing" to="/">Racing</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--chess" to="/">Chess</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__item-link menu__item-link--athletics" to="/">Athletics</Link>
			</li>
		</ul>
		<Link className="menu__more" to="/">More sports</Link>
	</div>
	);
}

export default Menu;
