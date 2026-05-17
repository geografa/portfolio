import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

function classForVariant(variant: Variant) {
  if (variant === "primary") return "btn btn-primary";
  if (variant === "secondary") return "btn btn-secondary";
  return "btn btn-ghost";
}

type LinkButtonProps = {
  href: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type NativeButtonProps = {
  href?: undefined;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  if ("href" in props && props.href) {
    const {
      href,
      external,
      children,
      className,
      variant = "primary",
      ...rest
    } = props;
    const cls = [classForVariant(variant), className].filter(Boolean).join(" ");
    if (external) {
      return (
        <a
          className={cls}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    ...rest
  } = props as NativeButtonProps;
  const cls = [classForVariant(variant), className].filter(Boolean).join(" ");
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
