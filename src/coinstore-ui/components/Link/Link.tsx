import classNames from 'classnames';
import { FC } from 'react';

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
}

export const Link: FC<LinkProps> = (props) => {
  const { className, children, disabled, href } = props;

  return (
    <a className={classNames('link', { disabled }, className)} href={href}>
      {children}
    </a>
  );
};

export default Link;
