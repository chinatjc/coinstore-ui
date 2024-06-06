import classNames from 'classnames';
import { FC } from 'react';
import './style.scss';

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
}

const Link: FC<LinkProps> = (props) => {
  const { className, children, disabled, href } = props;

  return (
    <a className={classNames('link', { disabled }, className)} href={disabled ? undefined : href}>
      {children}
    </a>
  );
};

export default Link;
