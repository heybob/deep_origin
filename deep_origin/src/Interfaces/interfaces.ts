export interface IAssigneeValue {
  name: string;
  id: string;
  img?: string;
}

export interface IDataTableDataCell {
  id: string;
  name: string;
  type: string;
  value: string | INameID[];
}
export interface IDataTableData {
  rows: IDataTableDataCell[][];
  columns: IColumnDef[];
  type: keyof IStatusDataTableMeta;
  name: keyof IStatusDataTableMeta;
}

export interface IColumnDef {
  name: string;
  type: string;
  editor: string | null;
  style: {
    width: string;
  };
}
export interface IDataTableProps {
  rows: IDataTableDataCell[][];
  type: keyof IStatusDataTableMeta;
}
export interface IColumnDef {
  name: string;
  type: string;
  editor: string | null;
  style: {
    width: string;
  };
}

export interface IStatusDataTableMeta {
  displayName: string;
  columnDef: IColumnDef[];
  editors: IEditors;
  name: string;
}

export interface ICellEditorProps {
  cell: IDataTableDataCell;
  editor?: string;
}
export interface IEditors {
  assignee: string;
}

export interface INameID {
  name: string;
  id: string;
}

export interface IChildren {
  children: React.ReactNode;
}

export type EmptyObj = Record<PropertyKey, never>;

export interface IEditModeApi {
  editModeApi: [
    boolean,
    (value: boolean, subscriberId: string) => void,
    string
  ];
}

export interface ISearchCacheAPI {
  searchCacheApi: [
    Record<PropertyKey, any>,
    (value: Record<PropertyKey, any>) => void
  ];
}

export interface IAssigneeCellContextAPI {
  addAssigneeCallback: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    assignee: IAssigneeValue
  ) => void;
  removeAssigneeCallback: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    assignee: IAssigneeValue
  ) => void;
}
