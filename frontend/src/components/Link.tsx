interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    // eslint-disable-next-line
    return <a href={href} {...rest} />;
  }

  if (isAnchorLink) {
    // eslint-disable-next-line
    return <a href={href} {...rest} />;
  }

  return (
    // eslint-disable-next-line
    <a
      className="special-underline-new text-primary-color no-underline hover:text-gray-100"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
};

export default CustomLink;
