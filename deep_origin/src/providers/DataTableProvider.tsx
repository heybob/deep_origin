import { useState, memo,  useEffect } from "react";
import { DataTableContext } from "../contexts/contexts";
import { IChildren, IEditModeApi } from "../Interfaces/interfaces";

function DataTableProvider({ children }: IChildren) {
  const [editMode, setEditMode] = useState(false);
  const [editSubscriberId, setEditSubscriberId] = useState<string>("");
  const editModeApi: IEditModeApi = {
    editModeApi: [editMode, setEditModeCallback, editSubscriberId],
  };

  useEffect(() => {
    document.addEventListener("click", exitEditMode);
    return () => {
      document.removeEventListener("click", exitEditMode);
    };
  }, []);

  function exitEditMode(e: MouseEvent) {
    e.stopPropagation();
    setEditModeCallback(false, null);
  }

  function setEditModeCallback(value: boolean, subscriberId: string | null) {
    setEditMode(value);
    if (subscriberId) {
      setEditSubscriberId(subscriberId);
    }
  }

  return (
    <DataTableContext.Provider value={editModeApi}>
      {children}
    </DataTableContext.Provider>
  );
}
export default memo(DataTableProvider);
