import { Text, Title } from "@/shared/ui/atoms";
import { Card } from "@/shared/ui/molecules/Card";
import type { ProjectsDataMock } from "../interface";
import { CARD_STYLE } from "@/features/tickets/interface";

interface PropsListPresentation {
  listProjects: ProjectsDataMock[];
}

export const ProjectsListPresentation: React.FC<PropsListPresentation> = ({
  listProjects,
}) => {
  return (
    <div>
      <div className="ProjectsTitle">
        <h2>Projectos</h2>
      </div>
      <div className="CardContainer">
        {listProjects.map((project) => (
          <Card
            key={project.id}
            className="projectCard"
            cardStyle={CARD_STYLE.PRIMARY}
          >
            <Title>{project.name}</Title>
            <Text>{project.area}</Text>
            <Text>Total de tareas: {project.totalTickets}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
};
