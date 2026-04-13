import { Card } from "@/shared/ui/molecules/Card";
import type { TicketsDataMock } from "../interface";
import { getTicketsByStatus } from "../utils/getTicketsByStatus";
import { Title, Button, Badge } from "@/shared/ui/atoms";

interface PropsTicketsColumns {
  ticketsList: TicketsDataMock[];
  title: string;
  status: string;
}

export const TicketsColumns: React.FC<PropsTicketsColumns> = ({
  ticketsList,
  title,
  status,
}) => {
  const tickets = getTicketsByStatus({ ticketsList, status });

  return (
    <div className="Columns">
      <div className="columnTitle">
        <h3>{title}</h3>
      </div>
      <div>
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            className="projectCard"
            cardStyle={ticket.status}
          >
            <Title>{ticket.name}</Title>
            <div className="Card-content_Justify">
              <Badge priority={ticket.priority}>{ticket.priority}</Badge>
              <Button className="button primary" type="button">
                Mover
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
