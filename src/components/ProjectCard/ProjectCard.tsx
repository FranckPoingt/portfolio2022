import React from "react";
import { Badge, Box, Image, Text, Title } from "@mantine/core";
import { ProjectsRecord } from "@src/xata";
import { SelectedPick } from "@xata.io/client";
import { StyledProjectCard, ProjectLink } from "./styles";

export interface ProjectCardProps {
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
	project: Readonly<SelectedPick<ProjectsRecord, ["*"]>>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	onClick,
	...rest
}) => {
	return (
		<StyledProjectCard onClick={onClick} {...rest}>
			<ProjectLink href={project.url ?? "/projects"}>
				{project.logo_url ? (
					<Image
						src={project.logo_url}
						alt={project.name ?? "project name logo"}
						width={100}
					/>
				) : (
					<Title order={2}>{project.name}</Title>
				)}
			</ProjectLink>
			<Box my="xs">
				{project.stack?.map((stack) => (
					<Badge
						variant="gradient"
						gradient={{ from: "indigo", to: "cyan" }}
						key={stack}
						mx={2}
					>
						{stack}
					</Badge>
				))}
			</Box>
			<Text>{project.description}</Text>
		</StyledProjectCard>
	);
};

export default ProjectCard;
