import type { TicketsDataMock } from "../interface";

interface PropsTicketsCard {
  ticket: TicketsDataMock;
}

export const TicketCard: React.FC<PropsTicketsCard> = ({ ticket }) => {
  return (
    <div className="projectCard">
      <h2>{ticket.name}</h2>
    </div>
  );
};
