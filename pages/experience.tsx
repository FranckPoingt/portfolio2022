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
				<Box ref={bRef}>
					<Parallax
						ref={paraRef}
						pages={experiences.length}
						style={{
							top: isMobile ? 50 : 100,
							left: 0,
							marginTop: isMobile ? "16px" : "50px",
							paddingLeft: isMobile ? "25px" : "100px",
						}}
						className="parallax"
					>
						{experiences.map((experience, index) => (
							<ParallaxLayer
								key={experience.id}
								offset={index}
								factor={1.2}
								speed={0.5}
							>
								<Box component="section" id={experience.id ?? "comp_name"}>
									<ExperienceCard
										experience={experience}
										iconList={iconList(experience.company_name)}
										gradient={gradient(experience.company_name)}
									/>
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
