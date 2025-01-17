import { useState, useEffect, memo } from "react";
import "./App.css";
import DataTable from "../components/DataTable/DataTable";
import SearchCacheProvider from "../providers/SearchCacheProvider";
import DataTableProvider from "../providers/DataTableProvider";
import { IDataTableData } from "../Interfaces/interfaces";

function App() {
  const [table, setTable] = useState<IDataTableData | undefined>();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTableData() {
      try {
        if(error) {
          setError(false);
        }
        let res = await fetch("http://localhost:3001/tableData");
        let data: IDataTableData = await res.json();
        setTable(data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }
    getTableData();
  }, []);

  return (
    <SearchCacheProvider>
      <DataTableProvider>
        {table && !error && (
          <DataTable type={table.type} rows={table.rows}></DataTable>
        )}
        {error && (
          <div className="error">
            <h1>Oops...</h1>
            <div>There was an error fetching the table data.</div>
            <div>
              Check to make sure you have an active internet connection or if
              the server is running.
            </div>
          </div>
        )}
      </DataTableProvider>
    </SearchCacheProvider>
  );
}

export default memo(App);
