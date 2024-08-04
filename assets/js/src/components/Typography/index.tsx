import React from 'react';
import clsx from 'clsx';

interface TypographyProps {
	/** The variant of the typography component */
  variant: string;
	/** Children data for passing in child react nodes */
  children: React.ReactNode;
	/** Additional classnames to be added */
	className?: string;
}

interface TypographyElementProps {
	/** Children data for passing in child react nodes */
  children: React.ReactNode;
	/** Additional classnames to be added */
  className?: string;
}

/**
 * A Typography component to wrap around text elements from Shadcn
 * @param variant: The variant of the typography component
 * @param children: any children data for passing in child react nodes
 * @param className: Additional classNames to be added to Typography
 * @returns The variant of the typography component
 */
export default function Typography({ variant, children, className }: TypographyProps): JSX.Element {
  const componentsMapping = {
    h1: TypographyH1,
    h2: TypographyH2,
    h3: TypographyH3,
    h4: TypographyH4,
    p: TypographyP,
    blockquote: TypographyBlockquote,
    table: TypographyTable,
    list: TypographyList,
    inlinecode: TypographyInlineCode,
    lead: TypographyLead,
    large: TypographyLarge,
    small: TypographySmall,
    muted: TypographyMuted,
  };

  const TypographyComponent = componentsMapping[variant];

  return <TypographyComponent className={className}>{children}</TypographyComponent>;
}

export function TypographyH1({ children, className }: TypographyElementProps) {
  return (
    <h1 className={clsx("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyElementProps) {
  return (
    <h2 className={clsx("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyElementProps) {
  return (
    <h3 className={clsx("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyElementProps) {
  return (
    <h4 className={clsx("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: TypographyElementProps) {
  return (
    <p className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className }: TypographyElementProps) {
  return (
    <blockquote className={clsx("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyTable({ children, className }: TypographyElementProps) {
  return (
    <table className={clsx("w-full mt-4", className)}>
      {children}
    </table>
  );
}

export function TypographyList({ children, className }: TypographyElementProps) {
  return (
    <ul className={clsx("list-disc list-inside", className)}>
      {children}
    </ul>
  );
}

export function TypographyInlineCode({ children, className }: TypographyElementProps) {
  return (
    <code className={clsx("bg-gray-200 rounded px-1", className)}>
      {children}
    </code>
  );
}

export function TypographyLead({ children, className }: TypographyElementProps) {
  return (
    <p className={clsx("text-xl font-light leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: TypographyElementProps) {
  return (
    <p className={clsx("text-lg font-medium leading-normal", className)}>
      {children}
    </p>
  );
}

export function TypographySmall({ children, className }: TypographyElementProps) {
  return (
    <p className={clsx("text-sm font-light leading-snug", className)}>
      {children}
    </p>
  );
}

export function TypographyMuted({ children, className }: TypographyElementProps) {
  return (
    <p className={clsx("text-gray-500", className)}>
      {children}
    </p>
  );
}
