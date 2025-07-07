interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string,
  href: string,
  buttonStyle: 'solid' | 'outlined',
  sizeText?: 'small' | 'base',
}

const Button = ({ title, href, buttonStyle, sizeText, ...rest }: Props) => { 
  const baseStyle = 'py-2 px-6 rounded-md transition-colors duration-200';
  
  const solid = 'bg-coder-green border border-coder-green text-black hover:bg-opacity-70';
  const outlined = 'border border-coder-green text-white hover:bg-coder-green hover:bg-opacity-10';
  const smallText = 'text-sm sm:text-base';
  const baseText = 'text-lg sm:text-xl';

  const styleClasses = buttonStyle === 'solid' ? solid : outlined;
  const sizeButton = sizeText === 'small' ? smallText : baseText;

  const combinedClassName = `${baseStyle} ${styleClasses} ${sizeButton} ${rest.className || ''}`.trim();

  return (
    <a {...rest} className={combinedClassName} href={href}>
      {title}
    </a>
  );
}

export default Button;