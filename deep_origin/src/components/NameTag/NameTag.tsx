import "./NameTag.scss";
import { getInitials } from "../../utils/utils";
import { memo } from "react";
import { IAssigneeValue } from "../../Interfaces/interfaces";

interface INameTagProps {
  assignee: IAssigneeValue;
}

function NameTag({ assignee }: INameTagProps) {
    const backgroudStyle = assignee.img ? { backgroundImage: `url(/img/${assignee.img})`, backgroundSize: 'cover'}:{backgroundImage: 'none'};

  return (
    <div className="tag"  style={backgroudStyle}title={assignee.name}>
      <div className="tag-text">
        {!assignee.img && getInitials(assignee.name)}
      </div>
    </div>
  );
}
export default memo(NameTag);
