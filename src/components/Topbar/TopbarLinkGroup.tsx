"use client";
import { ReactNode, useState } from "react";

interface TopbarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

const TopbarLinkGroup = ({
  children,
  activeCondition,
}: TopbarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};

export default TopbarLinkGroup;
