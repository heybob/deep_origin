import { createContext } from "react";
import {
  IAssigneeCellContextAPI,
  IEditModeApi,
  ISearchCacheAPI,
} from "../Interfaces/interfaces";

export const DataTableContext = createContext<IEditModeApi>({
  editModeApi: [false, () => {}, ""],
});
export const SearchCacheContext = createContext<ISearchCacheAPI>({
  searchCacheApi: [{}, () => {}],
});
export const AssigneeCellContext = createContext<IAssigneeCellContextAPI>({
  addAssigneeCallback: () => {},
  removeAssigneeCallback: () => {},
});
