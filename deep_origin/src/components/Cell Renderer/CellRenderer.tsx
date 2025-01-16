import LinkCell from "../DataTableCells/LinkCell";
import StatusCell from "../DataTableCells/StatusCell";
import AssigneeCell from "../DataTableCells/AssigneeCell/AssigneeCell";
import { memo } from "react";
import { IDataTableDataCell } from "../../Interfaces/interfaces";

interface ICellRendererProps {
  cell: IDataTableDataCell;
  editor: string;
}

function CellRenderer({ cell, editor }: ICellRendererProps) {
  return (
    <>
      {(() => {
        switch (cell.type) {
          case "link":
            return <LinkCell cell={cell} editor={editor} />;
          case "progress":
            return <StatusCell cell={cell} editor={editor} />;
          case "assignee":
            return <AssigneeCell cell={cell} editor={editor} />;
          default:
            return <td>{cell.value as string}</td>;
        }
      })()}
    </>
  );
}
export default memo(CellRenderer);
