import { CgCloseO } from "react-icons/cg";
import { IAssigneeValue } from "../../../Interfaces/interfaces";
import NameTag from "../../NameTag/NameTag";
import { memo, useContext } from "react";
import { AssigneeCellContext } from "../../../contexts/contexts";

interface AssigneeCellNameProps {
    cellEditMode: boolean,
    editMode: boolean,
    assignee: IAssigneeValue;
  }
//TODO Assignee Cell Context with remove AssigneeCallback


function AssigneeCellName({ cellEditMode, editMode, assignee }: AssigneeCellNameProps) {
    const {removeAssigneeCallback} = useContext(AssigneeCellContext);
    return (
      <div
        key={assignee.id}
        className={
          !cellEditMode
            ? "assignee-cell__container"
            : "assignee-cell__container_edit"
        }>
        <NameTag assignee={assignee} />
        <div className="assignee-cell__name">{assignee.name}</div>
        {cellEditMode && editMode && (
          <button
            className="assignee-cell__button"
            onClick={(e) => removeAssigneeCallback(e, assignee)}>
            <CgCloseO className="assignee-cell__delete" />
          </button>
        )}
      </div>
    );
  }
  export default memo(AssigneeCellName);