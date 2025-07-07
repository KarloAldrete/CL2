interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string,
  href: string,
  buttonStyle: 'solid' | 'outlined',
  sizeText?: string,
}

const Button = ({ title, href, buttonStyle, sizeText, ...rest }: Props) => { 
  const baseStyle = 'py-2 px-6 rounded-md transition-colors duration-200';
  
  const solid = 'bg-coder-green text-black';
  const outlined = 'border border-coder-green text-white';
  const smallText = 'text-sm sm:text-base';
  const baseText = 'text-lg sm:text-xl';

  const styleClasses = buttonStyle === 'solid' ? solid : outlined;
  const sizeButton = sizeText === 'baseText' ? baseText : smallText;

  const combinedClassName = `${baseStyle} ${styleClasses} ${sizeButton} ${rest.className || ''}`.trim();

  return (
    <a {...rest} className={combinedClassName} href={href}>
      {title}
    </a>
  );
}

export default Button;