import { useState, useEffect, useContext, useCallback, memo } from "react";
import AssigneeFilterList from "./Editor/AssigneeFilterList";
import NameTag from "../../NameTag/NameTag";
import "./AssigneeCell.scss";
import { CgCloseO } from "react-icons/cg";
import { DataTableContext } from "../../../contexts/contexts";
import AssgineeCount from "./AssigneeCount";
import { keyGen } from "../../../utils/utils";
import {
  IAssigneeValue,
  ICellEditorProps
} from "../../../Interfaces/interfaces";

interface AssigneeCellNameProps {
  assignee: IAssigneeValue;
}
//TODO: Implement Editor
function AssigneeCell({ cell, editor }: ICellEditorProps) {
  const { editModeApi } = useContext(DataTableContext);
  const [editMode, setEditMode, editSubscriberId] = editModeApi;
  const [cellValue, setCellValue] = useState<IAssigneeValue[]>(cell.value as IAssigneeValue[]);
  const [cellEditMode, setCellEditMode] = useState(false);
  const [maxName] = useState(1);

  useEffect(() => {
    if (cell.id !== editSubscriberId && cellEditMode) {
      setCellEditMode(false);
    }
  }, [editSubscriberId]);

  useEffect(() => {
    if (!editMode && cellEditMode) {
      setCellEditMode(false);
    }
  }, [editMode]);

  //TODO: Make edit mode a subscrioptiong with callback to close edit mode in the data provider to close edit modes on other cells. sub/pub patern.
  function edMode(e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) {
    e.stopPropagation();
    if (!editMode) {
      setEditMode(true, cell.id);
      setCellEditMode(true);
    } else {
      setEditMode(true, cell.id);
      setCellEditMode(true);
    }
  }

  //TODO: Add to Context API
  const addAssigneeCallback = useCallback(addAssignee, [cellValue]);

  function addAssignee(
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    assignee: IAssigneeValue
  ) {
    e.stopPropagation();
    if (!cellValue.find((value) => value.name === assignee.name)) {
      setCellValue([...cellValue, assignee]);
    }
  }
  //TODO: Add to Context API
  const removeAssigneeCallback = useCallback(removeAssignee, [cellValue]);

  function removeAssignee(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    assignee: IAssigneeValue
  ) {
    e.stopPropagation();
    let val: IAssigneeValue | undefined = cellValue.find(
      (value: IAssigneeValue) => value.name === assignee.name
    );
    let index = cellValue.indexOf(val as IAssigneeValue);
    let newAssignees = [...cellValue];
    newAssignees.splice(index, 1);
    setCellValue(newAssignees);
  }
  function getEditor(editor:string) {
    switch(editor) {
        case 'AssigneeFilterList':
            return (<AssigneeFilterList selectedAssignees={cellValue} addAssigneeCallback={addAssigneeCallback}/>)
    }
  }
  function AssigneeCellName({ assignee }: AssigneeCellNameProps) {
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

  return (
    <>
      <td className="assignee-cell" onClick={(e) => edMode(e)}>
        {cellValue.length > 0 && !editMode &&
          cellValue.map((assignee, i) => {
            return i < (maxName) ? (<AssigneeCellName key={keyGen()} assignee={assignee} />) : (<></>);
          })}
          {cellValue.length > 0 && editMode &&
          cellValue.map((assignee) => {
            return (<AssigneeCellName key={keyGen()} assignee={assignee} />);
          })}
        {cellValue.length === 0 && <>Unassigned</>}
        {cellValue.length > maxName  && !editMode && (
          <AssgineeCount assignees={cellValue as IAssigneeValue[]} maxNames={maxName}/>
        )}
        {cellEditMode && editMode && getEditor(editor as string)}
      </td>
    </>
  );
}
export default memo(AssigneeCell);
