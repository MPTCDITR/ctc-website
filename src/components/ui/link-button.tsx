import * as React from "react";

import { Button, buttonVariants } from "./button";
import type { VariantProps } from "class-variance-authority";

interface LinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a {...props}>{props.children}</a>
    </Button>
  );
};
