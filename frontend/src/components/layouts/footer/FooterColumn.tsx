interface Props {
  title: string;
  links: string[];
  href: string[];
}

export default function FooterColumn({
  title,
  links,
  href
}: Props) {
  return (
    <div>

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <div className="mt-5 space-y-3">

        {links.map((link, index) => (
          <a
            key={link}
            href={href[index]}
            className="block text-muted-foreground transition hover:text-green-600"
          >
            {link}
          </a>
        ))}

      </div>

    </div>
  );
}