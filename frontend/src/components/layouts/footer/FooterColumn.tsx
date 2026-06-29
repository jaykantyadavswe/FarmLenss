interface Props {
  title: string;
  links: string[];
}

export default function FooterColumn({
  title,
  links,
}: Props) {
  return (
    <div>

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <div className="mt-5 space-y-3">

        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="block text-muted-foreground transition hover:text-green-600"
          >
            {link}
          </a>
        ))}

      </div>

    </div>
  );
}