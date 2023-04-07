import React from "react";
import { ExperienceRecord, getXataClient } from "@src/xata";
import { SelectedPick } from "@xata.io/client";
import { GetStaticProps, NextPage } from "next/types";
import { Box, Center, Divider } from "@mantine/core";
import Layout from "@src/Layout/Layout";
import ExperienceCard from "@src/components/ExperienceCard/ExperienceCard";
import { SparkIconList, HarmoneyIconList } from "@src/helpers/constants";

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
				<Box>
					{experiences.map((experience, index, array) => (
						<>
							<Box
								component="section"
								key={experience.id}
								id={experience.id ?? "comp_name"}
								sx={{ height: "fit-content", paddingTop: "1rem" }}
							>
								<ExperienceCard
									experience={experience}
									iconList={iconList(experience.company_name)}
									gradient={gradient(experience.company_name)}
								/>
							</Box>
							{index < array.length - 1 && <Divider />}
						</>
					))}
				</Box>
			</Center>
		</Layout>
	);
};

export default Experience;
