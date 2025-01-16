import { memo } from "react";
import { ICellEditorProps } from "../../Interfaces/interfaces";

//TODO: Implement Editor
function StatusCell({ cell }: ICellEditorProps) {
  return <td key={cell.id}>{cell.value as string}</td>;
}
export default memo(StatusCell);
