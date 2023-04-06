import React, { useRef } from "react";
import { ExperienceRecord, getXataClient } from "@src/xata";
import { SelectedPick } from "@xata.io/client";
import { GetStaticProps, NextPage } from "next/types";
import { Box, Button, Center, Group } from "@mantine/core";
import Layout from "@src/Layout/Layout";
import ExperienceCard from "@src/components/ExperienceCard/ExperienceCard";
import { SparkIconList, HarmoneyIconList } from "@src/helpers/constants";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { isMobile } from "react-device-detect";

interface Props {
	experiences: Readonly<SelectedPick<ExperienceRecord, ["*"]>>[];
}

export const getStaticProps: GetStaticProps = async () => {
	const xata = getXataClient();
	const experiences = await xata.db.experience.getAll();

	return {
		props: {
			experiences,
		},
	};
};

const Experience: NextPage<Props> = ({ experiences }) => {
	const paraRef = useRef<IParallax>(null);
	const bRef = useRef<HTMLDivElement>(null);

	const handleNextClick = (e, index) => {
		e.stopPropagation();
		paraRef.current?.scrollTo(index + 1);
	};

	const handlePrevClick = (e, index) => {
		e.stopPropagation();
		paraRef.current?.scrollTo(index - 1);
	};

	const iconList = (companyName) => {
		switch (companyName) {
			case "Spark Sport":
				return SparkIconList;
			case "Harmoney":
				return HarmoneyIconList;
			default:
				return SparkIconList;
		}
	};

	const gradient = (companyName) => {
		switch (companyName) {
			case "Spark Sport":
				return { from: "indigo", to: "cyan" };
			case "Harmoney":
				return { from: "#FF4B4A", to: "red.7" };
			default:
				return { from: "indigo", to: "cyan" };
		}
	};

	return (
		<Layout>
			<Center>
				<Box ref={bRef} id='hello'>
					<Parallax
						ref={paraRef}
						pages={experiences.length}
						enabled={false}
						style={{
							top: isMobile ? 50 : 75,
							left: 0,
							paddingTop: isMobile ? "16px" : "50px",
							paddingLeft: isMobile ? "25px" : "100px",
						}}
						className="parallax"
					>
						{experiences.map((experience, index, array) => (
							<ParallaxLayer key={experience.id} offset={index} speed={0.5}>
								<Box
									component="section"
									id={experience.company_name ?? "comp_name"}
								>
									<ExperienceCard
										experience={experience}
										iconList={iconList(experience.company_name)}
										gradient={gradient(experience.company_name)}
									/>
									<Group>
										{index !== 0 ? (
											<Button
												mt="sm"
												variant="gradient"
												gradient={gradient(experience.company_name)}
												onClick={(e) => handlePrevClick(e, index)}
											>
												Previous experience
											</Button>
										) : (
											<Button
												mt="sm"
												variant="gradient"
												onClick={(e) => handleNextClick(e, index)}
											>
												Next experience
											</Button>
										)}
									</Group>
								</Box>
							</ParallaxLayer>
						))}
					</Parallax>
				</Box>
			</Center>
		</Layout>
	);
};

export default Experience;
