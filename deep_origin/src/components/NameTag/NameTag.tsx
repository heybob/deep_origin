import "./NameTag.scss";
import { getInitials } from "../../utils/utils";
import { memo } from "react";
import { IAssigneeValue } from "../../Interfaces/interfaces";
import { Tooltip } from 'react-tooltip'

interface INameTagProps {
  assignee: IAssigneeValue;
}

function NameTag({ assignee }: INameTagProps) {
    const backgroudStyle = assignee.img ? { backgroundImage: `url(/img/${assignee.img})`, backgroundSize: 'cover'}:{backgroundImage: 'none'};

  return (
    <div className="tag" data-tooltip-id={assignee.id} data-tooltip-content={assignee.name}
    data-tooltip-place="top" style={backgroudStyle}>
      <div className="tag-text">
        {!assignee.img && getInitials(assignee.name)}
      </div>
      <Tooltip className="tag-tooltip" id={assignee.id} style={{backgroundColor: 'white', color:'black', boxShadow:'2px 2px 8px #aaa'}} />
    </div>
  );
}
export default memo(NameTag);
