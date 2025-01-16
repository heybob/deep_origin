import { memo } from "react";
import { ICellEditorProps } from "../../Interfaces/interfaces";

//TODO: Implement Editor
function LinkCell({ cell  }: ICellEditorProps) {
  return (
    <td key={cell.id} onClick={() => alert(cell.value)}>
      <a href="#">{cell.value as string}</a>
    </td>
  );
}
export default memo(LinkCell);
