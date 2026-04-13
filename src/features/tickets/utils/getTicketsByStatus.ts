import type { TicketsDataMock } from "../interface";

interface PropsGetTickets {
    ticketsList: TicketsDataMock[],
    status: string
}

export const getTicketsByStatus = ({ ticketsList, status }: PropsGetTickets): TicketsDataMock[] => {
    return ticketsList.filter((tickets) => tickets.status === status);
};