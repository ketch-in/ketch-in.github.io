import { TodoListItems } from "../types";

const HOST_INSTALL: TodoListItems = [
  { type: "title", active: false, title: "Install/Update" },
  {
    type: "checkList",
    active: false,
    title: `Check for updates.`,
    tooltip: `If a new version is available, an update guide will be displayed.`,
  },
];

const HOST_CONNECTION: TodoListItems = [
  { type: "title", active: false, title: "Connection" },
  {
    type: "checkList",
    active: false,
    title: "Identifies presenters in Meet meetings.",
    tooltip:
      "When the user is presenting, they can check for draw requests from attendees and draw on the screen according to their settings.",
  },
];

const HOST_PUBLICATION_DRAWING: TodoListItems = [
  { type: "title", active: false, title: "Drawing" },
  {
    type: "checkList",
    active: true,
    title: "You can draw on your PC.",
  },
  {
    type: "checkList",
    active: true,
    title: "You can specify whether to draw the screen with the Toggle key.",
  },
  {
    type: "checkList",
    active: true,
    title: "Provides draw initialization.",
  },
  {
    type: "checkList",
    active: true,
    title: "Pen tool support.",
    tooltip: "Provides the ability to draw lines with a pen.",
  },
  {
    type: "checkList",
    active: false,
    title: "Supports shape tools.",
    tooltip: "Choose from a variety of shapes to draw on the screen.",
  },
  {
    type: "checkList",
    active: false,
    title: "It supports a variety of colors to choose from.",
    tooltip: "You can draw lines by changing the color.",
  },
];

const HOST: TodoListItems = [
  ...HOST_INSTALL,
  ...HOST_CONNECTION,
  ...HOST_PUBLICATION_DRAWING,
];

export default HOST;
