import React, { FC } from "react";
import { Link, LinkProps } from "react-scroll";

type Props = {
  to: string;
  children: string | React.ReactNode;
  offset?: number;
  className?: string;
};

const NavLink: FC<Props> = ({ to, children, offset, className }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      className={className}
    >
      {children}
    </Link>
  );
};

export default NavLink;
