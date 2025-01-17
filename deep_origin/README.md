# Deep Origin Frontend Technical Assessment
## by Bob Filiczkowski
Completion Data: 1/17/2025

Note: No AI was used to generate this code. Code was all written by me.

Requirements
Node v20+
NPM 10.2.5+

## Terminal Installation Instructions
1. In a terminal, Clone git repo
2. Navigate to the deep_origin folder
3. run 'npm install’
4. "cd src/server"
4. run the server by typing" 'node app.js' (server uses localhost:3001)
5. In a new terminal, navigate to the deep_origin folder
6. Run 'npm run build'
7. Run 'npm preview' or 'npm run dev' to start the application
7. Once the application is running, navigate to the local url displayed in the terminal.
   ex. http://localhost:4173/

## Frontend Architecture
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
    b. Component based architecture
    c. No need for other react frameworks such as nextJS
3. Typescript
  Reasons:
    a. Required
    b. Type safety = less errors
4. SCSS
  Reasons:
    a. One of the most commonly used CSS pre-processor
    b. Separation of JS / CSS
    c. Cleaner HTML / Easier to read HTML
    d. Name-spaced properly will reduce any css conflicts / bugs
5. No UI Library
  Reasons:
    a. No ui libraries installed because because it’s a coding 	exercise project
6. Icon Library react-icons
  Reasons:
    a. Many icon libraries to choose from
    b. Easy to find icons through their website via search
7. State Management (React Context)
  Reasons:
    a. Context is a standard feature from React 16.x+ to manage state across the application.    
	  b. Built into react, no additional dependencies such as redux
    d. Avoids passing state via props across components
8. Data Fetching using fetch
  Reasons:
    a. Small project (only 2 end points)
    b. no external dependency
    c. Pretty easy to use

## Frontend Performance Considerations
1. Memo: All components are wrapped in memo to improve performance. They will only re-render if their props are changed
2. UseCallback: I applied useCallback to function so they only re-render when their dependencies change.
3. SearchCache: I applies a very crude cache for the names data call when using the filter list. It caches every search term result. This reduces duplicate requests. 
4. Search input debounce: The input is debounce on user keyboard clicks. This reduces the amount of data calls while the user is typing.
5. Name search input results limit: Limited the results to 25 list items. Reducing the number of results and requiring the user to be more specific reduces DOM elements and memory which could be a performance issue if many element are downloaded. Especially with images. Added a note to use about the limit.
6. JS minification

## Backend Architecture
1. Node Server using Express
2. Two get apis
	a. /assignees : gets a list of assignees
		Params: name: String
		Returns: [{id: String, name: String, img:”String”}]
	b. /tabledata : get table data for statusDataTable
		params: none		Returns: [{id: String, name: String, type: String, value: [] | null }]
3. Static, generated data for the names & table
  Reasons:
    a. Easy and fast to use
    b. Minimal
    c. Not a major focus for this assessment.

## Basic Assumptions
 1. This is a basic assessment and not 100% production ready code.
 2. Data table functionality such as sorting, selections, filtering, pagination implementation not required
 3. Main focus is on developing a metadata driven table component with cell rendering for use with the multi-select component
 4. No accessibility requirement so that was not considered
 5. Basic UX and UI design of the multi-select component
 8. Desktop only, not considering mobile devices / views
 9. Only showing one table as an example
 10. No Requirement for test cases
 11. Using Functional Components vs Class Components
 12. No internationalization
 13. Hard coding strings is ok for assessment but would not do so in production.

## Multi-select Assumptions
1. Table row can expand vertically
2. Names can wrap casing the cell row to enlarge.
3. Editor can be within the cell
4. Gracefully handing overflow using adaptive breakpoints. 
  a. Avatars and names: 1200px and above
  b. Only Avatar: 0 to 1200px
5. Assignee Cell Component has hardcoded variable called "maxNames" attribute to limit the number of visible names.

## Improvements
1. The application would need to conform to production error handling.
2. Some functions could be moved into utility to be reused (debounce)
3. The caching of the search terms is very crude. It would need a caching strategy and a way to invalidate the cache if new names are added to the list. 
4. The application would need to use a UX/UI component library. This would need to be adapted to work with any existing libraries in the parent application
5. Testing. Component and unit testing would need to be implemented
6. State management would have to conform to it’s parent application if not using React Context. If using React context, providers would have to be placed appropriately.
7. UX of the component may need to be altered to existing UX patterns for adding / removing.
8. Styles used would need to be adapted to production css standards
9. The data structures for tables and cells would most likely change or be different.
10. Table meta data could be expanded and improved to add more style attributes and properties as needed.
11. AssigneeCount component tooltip of a list of names could use additional boundary edge detection to handle cases where the tooltip maybe out of view.
12. AssigneeCell component could expose "maxNames" limiting property to limit the number of visible names via metadata definition

Thank you for the opportunity. If you'd like to discuss more, please feel free to contact me on [LinkedIn](http://www.linkedin.com/in/heybob).