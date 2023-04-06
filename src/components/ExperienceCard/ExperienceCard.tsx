import React from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import {
	Badge,
	Box,
	Group,
	Image,
	List,
	SimpleGrid,
	Stack,
	Text,
} from "@mantine/core";
import { SelectedPick } from "@xata.io/client";
import { ExperienceRecord } from "@src/xata";

type Props = {
	experience: Readonly<SelectedPick<ExperienceRecord, ["*"]>>;
	iconList: string[];
	gradient: {
		from: string;
		to: string;
	};
};

const ExperienceCard: React.FC<Props> = ({
	experience,
	iconList,
	gradient,
}) => {
	return (
		<Box component='article' p="md">
			<Stack>
				<Link
					// rome-ignore lint/style/noNonNullAssertion: <explanation>
					href={experience.url!}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Image
						src={experience.logo}
						alt={experience.company_name ?? "company logo"}
						width={isMobile ? 250 : 350}
					/>
				</Link>
				<Text size={isMobile ? "md" : "xl"} fw="bold">
					{`Fullstack Engineer - ${experience.start} / ${experience.end}`}
				</Text>
				<Group spacing="xs" sx={{ maxWidth: "75vw" }}>
					{experience.stack?.map((item) => (
						<Badge
							variant="gradient"
							gradient={{ from: gradient.from, to: gradient.to }}
							key={item}
							mx={2}
						>
							{item}
						</Badge>
					))}
				</Group>
				<Box>
					<Text mt="md" size="lg" fw="bold">
						Missions:
					</Text>
					<SimpleGrid cols={2} breakpoints={[{ maxWidth: 600, cols: 1 }]}>
						<List size={20}>
							{experience.missions?.slice(0, 6).map((mission, index) => (
								<List.Item my="xs" key={mission} icon={iconList[index]}>
									{mission}
								</List.Item>
							))}
						</List>
						<List size={20}>
							{experience.missions
								?.slice(6, experience.missions?.length)
								.map((mission, index) => (
									<List.Item my="xs" key={mission} icon={iconList[index + 6]}>
										{mission}
									</List.Item>
								))}
						</List>
					</SimpleGrid>
				</Box>
			</Stack>
		</Box>
	);
};

export default ExperienceCard;
