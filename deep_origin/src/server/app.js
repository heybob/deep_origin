import express, { json } from "express";
const app = express();
const port = 3001;
const talbeData = {
  rows: [
    [
      { id: "C1", name: "ID", type: "link", value: "DO001" },
      { id: "C2", name: "Task Name", type: "text", value: "Task 1" },
      {
        id: "C3",
        name: "Description",
        type: "text",
        value: "Task 1 Description",
      },
      { id: "C4", name: "Status", type: "progress", value: "In Progress" },
      {
        id: "C5",
        name: "Assignee",
        type: "assignee",
        value: [
          { name: "Bob Filiczkowski", id: "N62", img:"IMG_6041_sm.jpg"},
          { name: "Kelly Filiczkowski", id: "N101", img:"IMG_6042_sm.jpg" },
        ],
      },
    ],
    [
      { id: "C6", name: "ID", type: "link", value: "DO002" },
      { id: "C7", name: "Task Name", type: "text", value: "Task 2" },
      {
        id: "C8",
        name: "Description",
        type: "text",
        value: "Task 2 Description",
      },
      { id: "C9", name: "Status", type: "progress", value: "Todo" },
      {
        id: "C10",
        name: "Assignee",
        type: "assignee",
        value: [
          { name: "Bob Filiczkowski", id: "N62", img:"IMG_6041_sm.jpg" },
          { name: "Kelly Filiczkowski", id: "N101", img:"IMG_6042_sm.jpg" },
        ],
      },
    ],
    [
      { id: "C11", name: "ID", type: "link", value: "DO003" },
      { id: "C12", name: "Task Name", type: "text", value: "Task 3" },
      {
        id: "C13",
        name: "Description",
        type: "text",
        value: "Task 3 Description",
      },
      { id: "C14", name: "Status", type: "progress", value: "In Progress" },
      {
        id: "C15",
        name: "Assignee",
        type: "assignee",
        value: [
          { name: "Bob Filiczkowski", id: "N62", img:"IMG_6041_sm.jpg" },
          { name: "Kelly Filiczkowski", id: "N101", img:"IMG_6042_sm.jpg" },
        ],
      },
    ],
  ],
  type: "statusDataTable",
};

const assignees = [
  { id: "N1", name: "Donny McLaughlin" },
  { id: "N2", name: "Alberta Casper DVM" },
  { id: "N3", name: "Dr. Lauretta Renner" },
  { id: "N4", name: "Claudine Sawayn" },
  { id: "N5", name: "Demarcus Kuhlman" },
  { id: "N6", name: "Lenna Fritsch DVM" },
  { id: "N7", name: "Susie Anderson MD" },
  { id: "N8", name: "Sandrine Waters" },
  { id: "N9", name: "Ayana Steuber" },
  { id: "N10", name: "Nikko Bednar" },
  { id: "N11", name: "Lawrence Emard III" },
  { id: "N12", name: "Brandt Berge" },
  { id: "N13", name: "Aidan Koelpin" },
  { id: "N14", name: "Hailee Toy" },
  { id: "N15", name: "Danny Gislason" },
  { id: "N16", name: "Jayde Hyatt" },
  { id: "N17", name: "Devonte Breitenberg" },
  { id: "N18", name: "Margret Tillman" },
  { id: "N19", name: "Elyse O'Reilly" },
  { id: "N20", name: "Sterling Crona" },
  { id: "N21", name: "Hermann Harªann" },
  { id: "N23", name: "Kailey Harris" },
  { id: "N24", name: "Dortha Erdman" },
  { id: "N25", name: "Miss Ludwig Ziemann" },
  { id: "N26", name: "Jakayla Bartoletti" },
  { id: "N27", name: "Miss Meagan Ernser" },
  { id: "N28", name: "Trisha Sipes" },
  { id: "N29", name: "Dion Aufderhar" },
  { id: "N30", name: "Weston Block V" },
  { id: "N31", name: "Christina Kuhn" },
  { id: "N32", name: "Miss Lindsay Metz" },
  { id: "N33", name: "Fannie Tromp" },
  { id: "N34", name: "Garfield Hirthe" },
  { id: "N35", name: "Keven Zemlak" },
  { id: "N36", name: "Chadd Leffler" },
  { id: "N37", name: "Beryl Parker" },
  { id: "N38", name: "Ena Walsh" },
  { id: "N39", name: "Jessyca Klein Jr." },
  { id: "N40", name: "Kiana Conn" },
  { id: "N41", name: "Miss Sonya Stokes" },
  { id: "N42", name: "Dane Stokes" },
  { id: "N43", name: "Fred Auer" },
  { id: "N44", name: "Dortha Conroy" },
  { id: "N45", name: "Cordia Lakin" },
  { id: "N46", name: "Diego Kuphal" },
  { id: "N47", name: "Miss Enos Runolfsson" },
  { id: "N48", name: "Marcia Moen" },
  { id: "N49", name: "Glenna Lakin" },
  { id: "N50", name: "London Haag" },
  { id: "N51", name: "Mrs. Donnie O'Hara" },
  { id: "N52", name: "Garland Eichmann" },
  { id: "N53", name: "Darrin Kling" },
  { id: "N54", name: "Jamel Grimes II" },
  { id: "N55", name: "Ardith Schoen" },
  { id: "N56", name: "Mrs. Otho Williamson" },
  { id: "N57", name: "Parker Murazik DDS" },
  { id: "N58", name: "Gordon Johnston" },
  { id: "N59", name: "Gloria Ortiz DDS" },
  { id: "N60", name: "Emily Parisian" },
  { id: "N61", name: "Odie Dach" },
  { id: "N62", name: "Bob Filiczkowski", img:"IMG_6041_sm.jpg" },
  { id: "N63", name: "Chloe Heathcote" },
  { id: "N64", name: "Abe Kerluke" },
  { id: "N65", name: "Ariel Wilkinson" },
  { id: "N66", name: "Miss Opal Runolfsdottir" },
  { id: "N67", name: "Priscilla McGlynn" },
  { id: "N68", name: "Janelle Smitham" },
  { id: "N69", name: "Aurelie Jerde" },
  { id: "N70", name: "Pascale Altenwerth" },
  { id: "N71", name: "Bert Pacocha" },
  { id: "N72", name: "Guadalupe Thompson" },
  { id: "N73", name: "Oleta Dare" },
  { id: "N74", name: "Jefferey Dach" },
  { id: "N75", name: "Roselyn Koss" },
  { id: "N76", name: "Laverna Sauer" },
  { id: "N77", name: "Mr. Cassie Yost" },
  { id: "N78", name: "Mrs. Yesenia Reichert" },
  { id: "N79", name: "Braden Dach III" },
  { id: "N80", name: "Domingo Lebsack IV" },
  { id: "N81", name: "Mr. Donnell Cummings" },
  { id: "N82", name: "Walton Pfeffer" },
  { id: "N83", name: "Freida White" },
  { id: "N84", name: "Hillary McClure" },
  { id: "N85", name: "Destin Rutherford" },
  { id: "N86", name: "Wade Walker" },
  { id: "N87", name: "Maxine Lemke" },
  { id: "N88", name: "Milo Kihn" },
  { id: "N89", name: "Camron Orn" },
  { id: "N90", name: "Paolo Guªann II" },
  { id: "N91", name: "Matilda Yost" },
  { id: "N92", name: "Madeline Farrell" },
  { id: "N93", name: "Jordon Hodkiewicz DDS" },
  { id: "N94", name: "Herta Murazik" },
  { id: "N95", name: "Concepcion Baumbach" },
  { id: "N96", name: "Immanuel McDermott" },
  { id: "N97", name: "Anjali Hagenes" },
  { id: "N98", name: "Jasmin Stracke" },
  { id: "N99", name: "Arely Lynch" },
  { id: "N100", name: "Cristal Lueilwitz IV" },
  { id: "N101", name: "Kelly Filiczkowski", img:"IMG_6042_sm.jpg" },
];
// Middleware
app.use(json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/assignees/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  let key = req.query.name;
  let size = 25;
  if (!key) {
    res.send([]);
  } else {
    let filteredAssgnees = assignees.filter((assignee) => {
      return assignee.name.toLowerCase().includes(key.toLowerCase());
    });
    res.send(filteredAssgnees.sort().slice(0, 25));
  }
});

app.get("/tableData", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(talbeData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
