import { useState, useEffect, useContext, useCallback, memo } from "react";
import AssigneeFilterList from "./Editor/AssigneeFilterList";
import "./AssigneeCell.scss";
import { AssigneeCellContext, DataTableContext } from "../../../contexts/contexts";
import AssgineeCount from "./AssigneeCount";
import { keyGen } from "../../../utils/utils";
import {
  IAssigneeValue,
  ICellEditorProps
} from "../../../Interfaces/interfaces";
import AssigneeCellName from "./AssigneeCellName";


function AssigneeCell({ cell, editor }: ICellEditorProps) {
  const { editModeApi } = useContext(DataTableContext);
  const [editMode, setEditMode, editSubscriberId] = editModeApi;
  const [cellValue, setCellValue] = useState<IAssigneeValue[]>(cell.value as IAssigneeValue[]);
  const [cellEditMode, setCellEditMode] = useState(false);
  const [maxName] = useState(2);

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
            return (<AssigneeFilterList selectedAssignees={cellValue} />)
    }
  }

  return (
    <AssigneeCellContext.Provider value={{addAssigneeCallback: addAssigneeCallback, removeAssigneeCallback: removeAssigneeCallback}}>
      <td className="assignee-cell"  onClick={(e) => edMode(e)}>
        {cellValue.length > 0 && !cellEditMode && 
          [...cellValue].slice(0,maxName).map((assignee) => {
            return (<AssigneeCellName cellEditMode={cellEditMode} editMode={editMode} key={keyGen()} assignee={assignee} />) 
          })}
          {cellValue.length > 0 && cellEditMode &&
          cellValue.map((assignee) => {
            return (<AssigneeCellName cellEditMode={cellEditMode} editMode={editMode} key={keyGen()} assignee={assignee} />);
          })}
        {cellValue.length === 0 && <>Unassigned</>}
        {cellValue.length > maxName  && !cellEditMode && (
          <AssgineeCount assignees={cellValue as IAssigneeValue[]} maxNames={maxName}/>
        )}
        {cellEditMode && editMode && getEditor(editor as string)}
      </td>
    </AssigneeCellContext.Provider>
  );
}
export default memo(AssigneeCell);
