import { memo, useContext } from "react";
import NameTag from "./NameTag";
import "./NameTaglistItem.scss";
import { IAssigneeValue } from "../../Interfaces/interfaces";
import { AssigneeCellContext } from "../../contexts/contexts";

interface INameTagListItemProps {
  assignee: IAssigneeValue;
    isDisabled?: boolean | null;
}

function NameTagListItem({
  assignee,
  isDisabled,
}: INameTagListItemProps) {
  const className = isDisabled ? "name-tag__li-disabled" : "name-tag__li";
  const {addAssigneeCallback} = useContext(AssigneeCellContext);
  return (
    <li className={className} onClick={(e) => {if(addAssigneeCallback) {addAssigneeCallback(e, assignee)}}}>
      <NameTag assignee={assignee} />
      {assignee.name}
    </li>
  );
}
export default memo(NameTagListItem);
