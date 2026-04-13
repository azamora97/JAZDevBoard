import { useEffect, useState } from "react"
import { TicketsMockData } from "../utils/mockData";
import { Tickets_STATUSES, type Board, type TicketsDataMock } from "../interface";

const boardInit: Board[] = [
    { id: "TODO", title: "Pendientes", status: Tickets_STATUSES.TODO },
    { id: "PROGRESS", title: "En Proceso", status: Tickets_STATUSES.IN_PROGRESS },
    { id: "DONE", title: "Listo", status: Tickets_STATUSES.DONE },
];

export const useTickets = () => {

    const [tickets, setTickets] = useState<TicketsDataMock[]>([]);
    const [board] = useState<Board[]>(boardInit);

    useEffect(() => {
        setTickets(TicketsMockData)
    }, []);

    return {
        listTickets: tickets,
        board
    }
}
