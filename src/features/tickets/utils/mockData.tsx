import { Tickets_PRIORITIES, type TicketsDataMock } from "../interface";

export const TicketsMockData: TicketsDataMock[] = [
  {
    id: 1,
    name: "Tarea 1",
    status: "TODO",
    priority: Tickets_PRIORITIES.MEDIUM,
  },
  {
    id: 1,
    name: "Tarea 2",
    status: "DONE",
    priority: Tickets_PRIORITIES.MEDIUM,
  },
  {
    id: 2,
    name: "Tarea 3",
    status: "DONE",
    priority: Tickets_PRIORITIES.HIGH,
  },
  {
    id: 1,
    name: "Tarea 4",
    status: "IN-PROGRESS",
    priority: Tickets_PRIORITIES.HIGH,
  },
  {
    id: 3,
    name: "Tarea 5",
    status: "TODO",
    priority: Tickets_PRIORITIES.LOW,
  },
  {
    id: 3,
    name: "Tarea 6",
    status: "IN-PROGRESS",
    priority: Tickets_PRIORITIES.LOW,
  },
];
