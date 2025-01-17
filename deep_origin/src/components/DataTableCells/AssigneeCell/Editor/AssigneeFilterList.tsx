import { useState, useEffect, useContext, useCallback } from "react";
import "./AssigneeFilterList.scss";
import { CgSpinner, CgSearch } from "react-icons/cg";
import NameTagListItem from "../../../NameTag/NameTagListItem";
import { SearchCacheContext } from "../../../../contexts/contexts";
import { IAssigneeValue } from "../../../../Interfaces/interfaces";
import { keyGen } from "../../../../utils/utils";
import { BiErrorCircle } from "react-icons/bi";

interface IAssgineeFilterListProps {
    selectedAssignees: IAssigneeValue[]
}

function AssigneeFilterList({selectedAssignees}:IAssgineeFilterListProps) {
  const { searchCacheApi } = useContext(SearchCacheContext);
  const [searchCache, setSearchCache] = searchCacheApi;
  const [searchTerm, setSearchTerm] = useState("");
  const [assignees, setAssignees] = useState([]);
  const [timeoutPromise, setTimeoutPromise] = useState<number | null | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const timeoutTime = 500;
  

  const fetchAssigneesNamesCallback = useCallback(
    async function fetchAsigneeNames() {
      try {
        if(error){
          setError(false);
        }
        let res = await fetch(
          `http://localhost:3001/assignees?name=${searchTerm}`
        );
        let result = await res.json();
        setAssignees(result);
        let cacheResult:Record<PropertyKey, any> = {};
        cacheResult[searchTerm] = result;
        setSearchCache({ ...searchCache, ...cacheResult });
        
        setIsLoading(false);
      } catch (err) {
        setError(true);
        console.log(err);
        setIsLoading(false);
      }
    },
    [isLoading, searchTerm, searchCache, assignees]
  );

  useEffect(() => {
    async function getAsigneeNames() {
      if (timeoutPromise) {
        clearTimeout(timeoutPromise);
        setTimeoutPromise(null);
      }
      let timeout = setTimeout(() => {
        fetchAssigneesNamesCallback();
      }, timeoutTime);
      setTimeoutPromise(timeout);
    }
    if (searchTerm.length > 0) {
      if (!searchCache[searchTerm]) {
        setIsLoading(true);
        getAsigneeNames();
      } else {
        setAssignees(searchCache[searchTerm]);
      }
    }
  }, [searchTerm]);

  const handleSearchTermChangeCallback = useCallback(
    function handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>) {
      e.stopPropagation();
      setSearchTerm(e.target.value);
    },
    []
  );

  const inDisabledCallback = useCallback(
    function isDisabled(assignee:IAssigneeValue) {
        let user = selectedAssignees.find((value) => value.id === assignee.id);
        return user ? true : false;
    },
    [selectedAssignees]
  );

  return (
    <div className="flist">
      <CgSearch className="flist__input__search" />
      <input
        className={error ? 'flist__input_error' : ''}
        type="text"
        onClick={(e) => e.stopPropagation()}
        onChange={handleSearchTermChangeCallback}
        value={searchTerm}
        autoFocus
        placeholder="Enter a name to search."
      />
      {isLoading && <CgSpinner className="flist__input__spinner" />}
      {error && <BiErrorCircle className="flist__input__error" />}
      {searchTerm.length > 0 && (
        <ul>
          {assignees &&
            searchTerm.length > 0 &&
            assignees.map((assignee:IAssigneeValue) => (
              <NameTagListItem
                key={keyGen()}
                isDisabled={inDisabledCallback(assignee)}
                assignee={assignee}
              />
            ))}
          {assignees.length == 25 && (
            <>
              <hr />
              <li className="flist__msg">
                Showing max 25 results. Please refine your search.
              </li>
            </>
          )}
          {assignees.length == 0 && searchTerm.length > 0 && (
            <li className="flist__msg">No Results Found.</li>
          )}
        </ul>
      )}
    </div>
  );
}
export default AssigneeFilterList;
