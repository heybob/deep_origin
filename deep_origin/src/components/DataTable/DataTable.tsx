import CellRenderer from "../Cell Renderer/CellRenderer";
import "./DataTable.scss";
import TableHeader from "./TableHeader";
import { memo } from "react";
import { statusDataTableMeta } from "./dataTableMeta";
import { keyGen } from "../../utils/utils";
import {
  IColumnDef,
  IDataTableProps,
  IEditors,
  IStatusDataTableMeta,
} from "../../Interfaces/interfaces";

interface IDataTableMetaObj {
  statusDataTable: IStatusDataTableMeta;
}

const tables: IDataTableMetaObj = {
  statusDataTable: statusDataTableMeta,
};
function getTable(tableName: string): IStatusDataTableMeta {
  return tables[tableName as keyof IDataTableMetaObj];
}

function DataTable({ rows, type }: IDataTableProps) {
  const table = getTable(type);
  const columnItems = table.columnDef.map((col: IColumnDef) => (
    <th key={keyGen()} style={col.style}>
      {col.name}
    </th>
  ));
  const bodyItems = rows.map((row) => (
    <tr key={keyGen()}>
      {row.map((cell) => (
        <CellRenderer
          key={keyGen()}
          cell={cell}
          editor={table.editors[cell.type as keyof IEditors]}
        />
      ))}
    </tr>
  ));
  return (
    <>
      <TableHeader name={table.displayName} />
      <table className="data-table">
        <thead>
          <tr>{columnItems}</tr>
        </thead>
        <tbody>{bodyItems}</tbody>
      </table>
    </>
  );
}
export default memo(DataTable);
