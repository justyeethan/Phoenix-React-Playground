
export enum TypographyVariants {
  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  table,
  list,
  inlinecode,
  lead,
  Large,
  Small,
  Muted
}

type Typography = {
	variant: TypographyVariants;
}

export default Typography;