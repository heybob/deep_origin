import { memo } from "react";

interface ITableHeaderProps {
  name: string;
}
function TableHeader({ name }: ITableHeaderProps) {
  return <h3>{name}</h3>;
}
export default memo(TableHeader);
