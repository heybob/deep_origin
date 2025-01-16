export const statusDataTableMeta = {
  columnDef: [
    { name: "ID", type: "link", editor: null, style: { width: "10%" } },
    { name: "Task Name", type: "text", editor: null, style: { width: "20%" } },
    {
      name: "Description",
      type: "text",
      editor: null,
      style: { width: "20%" },
    },
    {
      name: "Progress",
      type: "progress",
      editor: null,
      style: { width: "20%" },
    },
    {
      name: "Assignee",
      type: "assignee",
      editor: "AssigneeFilterList",
      style: { width: "30%" },
    },
  ],
  displayName: "Status Data",
  name: "statusDataTable",
  editors: {
    link: null,
    text: null,
    progress: null,
    assignee: "AssigneeFilterList",
  },
};
