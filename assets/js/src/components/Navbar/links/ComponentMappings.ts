import { NavbarLinksProps } from "../types";

const ComponentLinks: NavbarLinksProps[] = [
  {
    title: "Getting started",
    href: "/docs",
    subItems: [
      {
        title: "Getting Started",
        href: "/getting-started",
        description: "Getting Started with this project.",
        isFeatured: true,
      },
    ]
  },
  {
    title: "Components",
    href: "/docs/components",
    subItems: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
      },
    ],
  },
];

export default ComponentLinks;
