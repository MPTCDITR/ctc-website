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
  titleblog: {
    tag: "h2",
    tw: styles.titleblog,
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
  as?: Tag;
} & React.ComponentProps<Tag>;

export function TextElement({
  children,
  variant = "body",
  className,
  as,
  ...rest
}: Props) {
  const { tag: DefaultTag, tw } = CONFIG[variant];
  const DynamicText = as || DefaultTag;

  return (
    <DynamicText {...rest} className={cn(tw, className)}>
      {children}
    </DynamicText>
  );
}

TextElement.displayName = "TextElement";

export default TextElement;
