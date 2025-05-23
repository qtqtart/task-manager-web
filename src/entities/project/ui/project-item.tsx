import { ProjectFragment } from "@generated";
import { Card } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  project: ProjectFragment;
};

const ProjectItem_: FC<Props> = ({ project }) => {
  return <Card>{project.title}</Card>;
};

export const ProjectItem = memo(ProjectItem_);
