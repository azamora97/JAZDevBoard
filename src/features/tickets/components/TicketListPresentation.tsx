import type { Board, TicketsDataMock } from "../interface";
import { TicketsColumns } from "./TicketsColumns";

interface PropsTicketsPresentatio {
  listTickets: TicketsDataMock[];
  board: Board[];
}

export const TicketListPresentation: React.FC<PropsTicketsPresentatio> = ({
  listTickets,
  board,
}) => {
  return (
    <div className="board">
      {board.map((itemBoard) => (
        <TicketsColumns
          key={itemBoard.id}
          ticketsList={listTickets}
          title={itemBoard.title}
          status={itemBoard.status}
        />
      ))}
    </div>
  );
};
