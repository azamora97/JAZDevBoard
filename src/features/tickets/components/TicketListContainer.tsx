import { useTickets } from "../hook/useTickets";
import { TicketListPresentation } from "./TicketListPresentation";

export const TicketsListContainer = () => {
  const { listTickets, board } = useTickets();

  return <TicketListPresentation listTickets={listTickets} board={board} />;
};
