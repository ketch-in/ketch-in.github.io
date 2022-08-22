import { TodoListItems } from "../types";

const SERVER_INSTALL: TodoListItems = [
  { type: "title", active: false, title: "Deploy" },
  {
    type: "checkList",
    active: false,
    title: `Write a deployment script.`,
  },
  {
    type: "checkList",
    active: false,
    title: `Configure your Docker deployment environment.`,
  },
];

const SERVER_CONNECTION: TodoListItems = [
  { type: "title", active: false, title: "Connection" },
  {
    type: "checkList",
    active: true,
    title: "Create a room.",
    tooltip: "If it's a new MeetID, create a new room.",
  },
  {
    type: "checkList",
    active: true,
    title: "Remove the room.",
    tooltip: "If no one has access or only the owner, it will be removed.",
  },
  {
    type: "checkList",
    active: false,
    title: "Share new attendees.",
    tooltip:
      "As new attendees arise, share them with attendees in that meeting room.",
  },
  {
    type: "checkList",
    active: false,
    title: "Share when attendees leave.",
    tooltip:
      "If an existing attendee is disconnected for some reason, share it with other attendees as well.",
  },
  {
    type: "checkList",
    active: false,
    title: "Update attendee information at regular intervals for attendees.",
    tooltip:
      "If the attendee information on the server and the data held by the attendees are different, update them.",
  },
];

const SERVER: TodoListItems = [...SERVER_INSTALL, ...SERVER_CONNECTION];

export default SERVER;
