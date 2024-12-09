import { cn } from "@/lib/utils";
import { styles } from "@/components/text-element/ElementStyle";

const CONFIG = {
  heading: {
    tag: "h1",
    tw: styles.heading,
  },
  title: {
    tag: "h3",
    tw: styles.title,
  },
  body: {
    tag: "p",
    tw: styles.body,
  },
  small: {
    tag: "p",
    tw: styles.small,
  },
  paragraph: {
    tag: "p",
    tw: styles.paragraph,
  },
  button: {
    tag: "p",
    tw: styles.button,
  },
} as const;

type TextVariant = keyof typeof CONFIG;
type Tag = (typeof CONFIG)[TextVariant]["tag"];

type Props = {
  variant?: TextVariant;
  children?: React.ReactNode;
  className?: string;
  itemProp?: string;
} & React.ComponentProps<Tag>;

export function TextElement({
  children,
  variant = "body",
  className,
  ...rest
}: Props) {
  const { tag: DynamicText, tw } = CONFIG[variant];

  return (
    <DynamicText {...rest} className={cn(tw, className)}>
      {children}
    </DynamicText>
  );
}

TextElement.displayName = "TextElement";

export default TextElement;
