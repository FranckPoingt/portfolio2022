import React from "react";
import {
	Arm,
	Astronaut,
	Body,
	BoxOfStar,
	Head,
	Leg,
	Panel,
	Schoolbag,
	Star,
} from "./styles";

const AstroLoader = () => {
	return (
		<>
			<BoxOfStar className="box-of-star1">
				<Star className="star-position1" />
				<Star className="star-position2" />
				<Star className="star-position3" />
				<Star className="star-position4" />
				<Star className="star-position5" />
				<Star className="star-position6" />
				<Star className="star-position7" />
			</BoxOfStar>
			<BoxOfStar className="box-of-star2">
				<Star className="star-position1" />
				<Star className="star-position2" />
				<Star className="star-position3" />
				<Star className="star-position4" />
				<Star className="star-position5" />
				<Star className="star-position6" />
				<Star className="star-position7" />
			</BoxOfStar>
			<BoxOfStar className="box-of-star3">
				<Star className="star-position1" />
				<Star className="star-position2" />
				<Star className="star-position3" />
				<Star className="star-position4" />
				<Star className="star-position5" />
				<Star className="star-position6" />
				<Star className="star-position7" />
			</BoxOfStar>
			<BoxOfStar className="box-of-star4">
				<Star className="star-position1" />
				<Star className="star-position2" />
				<Star className="star-position3" />
				<Star className="star-position4" />
				<Star className="star-position5" />
				<Star className="star-position6" />
				<Star className="star-position7" />
			</BoxOfStar>
			<Astronaut data-js="astro">
				<Head />
				<Arm className="arm-left" />
				<Arm className="arm-right" />
				<Body>
					<Panel />
				</Body>
				<Leg className="leg-left" />
				<Leg className="leg-right" />
				<Schoolbag />
			</Astronaut>
		</>
	);
};

export default AstroLoader;
