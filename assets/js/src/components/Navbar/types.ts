export type NavbarLinksProps = {
	/** The title of the Link */
  title: string;
  /** Link that the nav bar button links to */
  href: string;
  /** The description */
  description?: string;
  /** Subitems of the link */
  subItems?: NavbarLinksProps[];
  /** If the post should be featured */
  isFeatured?: boolean;
};
