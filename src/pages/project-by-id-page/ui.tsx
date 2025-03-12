import { FC } from "react";
import { useParams } from "react-router-dom";

const ProjectByIdPage: FC = () => {
  const { id } = useParams();

  return <>{`project by ${id}`}</>;
};

export default ProjectByIdPage;
