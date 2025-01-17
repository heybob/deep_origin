import { memo } from "react";
import { IColumnDef } from "../../Interfaces/interfaces";
import { keyGen } from "../../utils/utils";

interface DataTableColumnsProps {
    columns: IColumnDef[]
}

function DataTableColumns({columns}: DataTableColumnsProps) {
  return columns.map((col) => {
    return (
      <th key={keyGen()} style={col.style}>
        {col.name}
      </th>
    );
  });
}

export default memo(DataTableColumns);