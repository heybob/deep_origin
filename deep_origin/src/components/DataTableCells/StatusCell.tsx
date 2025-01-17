import { memo } from "react";
import { ICellEditorProps } from "../../Interfaces/interfaces";

function StatusCell({ cell }: ICellEditorProps) {
  return <td key={cell.id}>{cell.value as string}</td>;
}
export default memo(StatusCell);
