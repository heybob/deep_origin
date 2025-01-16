import { useState, memo } from "react";
import "./AssigneeCount.scss";
import NameTagListItem from "../../NameTag/NameTagListItem";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IAssigneeValue } from "../../Interfaces/interfaces";

interface IAssigneeCountProps {
  assignees: IAssigneeValue[];
  maxNames: number;
}
function AssgineeCount({ assignees, maxNames = 1}: IAssigneeCountProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  let assgineeLength = assignees.length;

  function handleTooltipOpen() {
    setTooltipOpen(true);
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        className="assignee-count__container"
        onMouseEnter={handleTooltipOpen}
        onMouseLeave={() => setTooltipOpen(false)}
      >
        <div className="assignee-count">+{assgineeLength - maxNames} </div>
        {tooltipOpen && (
          <div className="assignee-count__tooltip__container">
            <ul>
              {assignees.slice(maxNames).map((assignee) => (
                <NameTagListItem key={assignee.id} assignee={assignee} />
              ))}
            </ul>
          </div>
        )}
      </div>
      {tooltipOpen && (
        <div className="assignee-count__tooltip__arrow">
          <BsFillCaretDownFill />
        </div>
      )}
    </div>
  );
}
export default memo(AssgineeCount);
