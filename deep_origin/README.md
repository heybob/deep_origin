Deep Origin Frontend Techinical Assessment
by Bob Filiczkowski

Note: No AI was used to generate this code. Code was all written by me.

Requirments
Node v20.10.0+
NPM 10.2.5+

Terminal Installation Instructions
1. In a terminal, Clone git repo
2. Navigate to the deep_origin folder
3. run 'npm install'
4. run the server by typing" 'node app.js' (server uses localhost:3001)
5. In a new terminal, navigate to the deep_origin folder
6. Run 'npm run build'
7. Run 'npm preview' or 'npm run dev' to start the applicaiton
7. Once the application is running, navigate to the local url displayed in the terminal.
   ex. http://localhost:4173/



Frontend Architecture
1. Vite (React)
  Reasons: 
     a. Vite is a next-generation, front-end tool that focuses on speed and performance.
     b. Faster spin-up of the development server
     c. Less waiting time for reflecting file updates
     d. Improved build performance
     e. Rich features
2. React
  Reasons:
    a. Required by assessment
    b. Componenet based architecture
    c. No need for other react frameworks such as nextJS
3. Typescript
  Reasons:
    a. Required
    b. Type safety = less errors
4. SCSS
  Reasons:
    a. Been using SASS for many years without issues
    b. Like the seperation of JS / CSS
    c. Cleaner HTML / Easier to read HTML
    d. Namespaced properly will reduce any css conflicts
5. No UI Library
  Reasons:
    a. No ui libraries installed beause they were not really needed or this small exercise
6. Icon Library react-icons
  Reasons:
    a. Many icon libraries to choose from
    b. Easy to find icons through their website via search
7. State Managment (ContextApi)
  Reasons:
    a. Project is very small so no need for state managment such as Redux.
    b. Built into react, no additional dependency
    c. Easy to code
    d. Actions are minimal
8. Data Fetching using fetch
  Reasons:
    a. Small project (only 2 end points)
    b. no external dependency
    c. Pretty easy to use

Frontend Performance Considerations
1. Memo: All componenets are wrapped in memo to improve performance. They will only re-render if their props are changed
2. UseCallback: I applied useCallback to function so they only re-render when their dependenices change.
3. SearchCache: I applies a very crude cache for the names data call when using the filter list. It caches every search term result. This reduces duplicate requests. 
4. Search input debounce: The input is debounce when the user types. This reduces the amount of data calls while the user is typing.
5. Name Search input results limited to 25. Reducing the number of results and requiring the user to be more specific reduces dom elements and memory which could be a performance issue if many element are downloaded. Especially with images.
6. JS minifiation

Backend Architecture
1. Node Server using Express
2. Static Data for the table
3. Static generated data for the names
  Reasons:
    a. Easy and fast to use
    b. Minimal
    c. Not a major focus for this assessment.

Basic Assumptions
 1. This is a baisc assessment and not 100% production ready code.
 2. Data table functionality such as sorting, selections, filtering, pagination implementation not required
 3. Main focus is on developing a metadata driven table component with cell rendering for use with the multiselect component
 4. No accessability requirment so that was not considered
 5. Basic ux and ui design of the multiselect component
 8. Desktop, no mobile
 9. Only showing one table as an example
 10. No Requriment for test cases
 11. Using Functional Components vs Class Components
 12. No internationalization
 13. Hard coding strings is ok.

Multiselect Assumptions
1. Table row can expand vertically
2. Names can wrap casing the cell row to enlarge.
3. Editor can be within the cell
4. Gracefully handing overflow using adaptive breakpoints. 
  a. Avatars and names: 1200px and above
  b. Only Avatar: 0 to 1200px
5. Component can use a maxNames attribute to limit the number of visible names