import { useProject } from "../hooks/useProject";
import { ProjectsListPresentation } from "./ProjectsListPresentation";

export const ProjectsListContainer = () => {
  const { listProjects } = useProject();

  return <ProjectsListPresentation listProjects={listProjects} />;
};
