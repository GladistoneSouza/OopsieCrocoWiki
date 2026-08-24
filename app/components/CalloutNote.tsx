type Props = {
  tone?: "info" | "warning" | "dark";
  title: string;
  text: string;
};

export function CalloutNote({ tone = "info", title, text }: Props) {
  return (
    <aside className={`callout callout-${tone}`}>
      <b>{title}</b>
      <span>{text}</span>
    </aside>
  );
}
