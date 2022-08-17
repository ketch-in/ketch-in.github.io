import { TodoListItems } from "../types";

const CHROME_EXTENSION_INSTALL: TodoListItems = [
  { type: "title", active: false, title: "Install/Update" },
  {
    type: "checkList",
    active: false,
    title: `Extension refresh notification.`,
    tooltip: `If you install or update an extension while connected to "Meet", you will be guided to refresh with Toast.`,
  },
];

const CHROME_EXTENSION_CONNECTION: TodoListItems = [
  { type: "title", active: false, title: "Connection" },
  {
    type: "checkList",
    active: true,
    title: "Make sure the meeting has started.",
    tooltip:
      "After accessing https://meet.google.com/${meetId}, click the Join Now button to access the meeting, and you will be connected to the room corresponding to meetId.",
  },
  {
    type: "checkList",
    active: false,
    title: "Allow attendees to draw.",
    tooltip:
      "When connecting to the meetId room, if there is a main presenter, you can draw on the presentation screen.",
  },
];

const CHROME_EXTENSION_PUBLICATION: TodoListItems = [
  { type: "title", active: false, title: "Publication" },
  {
    type: "checkList",
    active: true,
    title: "Make sure the presentation has started.",
    tooltip:
      "Click the Start Presentation button at the bottom of the Meet screen to start your presentation, and you will become the main presenter in Meet.",
  },
  {
    type: "checkList",
    active: true,
    title: "Attempt to run host.",
    tooltip:
      "Run the installed host scheme when you become the main presenter.",
  },
  {
    type: "checkList",
    active: false,
    title: "Guide to install host.",
    tooltip:
      "If the host is not installed, it guides the installation in a modal way.",
  },
  {
    type: "checkList",
    active: true,
    title: "Notify attendees of the start.",
    tooltip:
      "If Host is a running presenter, it sends a presentation screen identifier to the attendees in the corresponding meetId room.",
  },
  {
    type: "checkList",
    active: false,
    title: "Multi-presenter support.",
    tooltip: `If there are multiple presenters, the active presenter will share the "meetId" and the remaining presenters will be put on hold.`,
  },
];

const CHROME_EXTENSION_PUBLICATION_DRAWING: TodoListItems = [
  { type: "title", active: false, title: "Drawing" },
  {
    type: "checkList",
    active: true,
    title: "Draw on the Meet screen.",
    tooltip:
      "If the main presenter's presentation screen identifier is transmitted, it can be drawn on the corresponding screen.",
  },
  {
    type: "checkList",
    active: true,
    title: "Drawable Notification.",
    tooltip:
      "It shows the status that drawing is possible on the presentation screen.",
  },
  {
    type: "checkList",
    active: true,
    title: "Turn drawing mode on/off.",
    tooltip:
      "You can turn the drawing behavior on and off in the extension popup.",
  },
  {
    type: "checkList",
    active: false,
    title: "Support for various drawing tools.",
    tooltip:
      "Provides a toolbar window where you can select color, shape, etc.",
  },
];

const CHROME_EXTENSION: TodoListItems = [
  ...CHROME_EXTENSION_INSTALL,
  ...CHROME_EXTENSION_CONNECTION,
  ...CHROME_EXTENSION_PUBLICATION,
  ...CHROME_EXTENSION_PUBLICATION_DRAWING,
];

export default CHROME_EXTENSION;
