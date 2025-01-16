import { memo } from "react";
import NameTag from "./NameTag";
import "./NameTaglistItem.scss";
import { IAssigneeValue } from "../../Interfaces/interfaces";

interface INameTagListItemProps {
  assignee: IAssigneeValue;
  selectCallback?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, name: IAssigneeValue) => void;
    isDisabled?: boolean | null;
}

function NameTagListItem({
  assignee,
  selectCallback,
  isDisabled,
}: INameTagListItemProps) {
  const className = isDisabled ? "name-tag__li-disabled" : "name-tag__li";
  return (
    <li className={className} onClick={(e) => {if(selectCallback) {selectCallback(e, assignee)}}}>
      <NameTag assignee={assignee} />
      {assignee.name}
    </li>
  );
}
export default memo(NameTagListItem);
