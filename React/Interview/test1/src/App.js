import './App.css';

const records = ([
  {
    id: 1,
    priority: 3,
    lead: 1,
    name: "bob"
  },
  {
    id: 3,
    priority: 2,
    name: "suzy"
  },
  {
    id: 4,
    priority: 0,
    name: "rick"
  },
  {
    id: 5,
    priority: 1,
    name: "cody"
  },
  {
    id: 2,
    priority: 3,
    lead: 1,
    name: "zach"
  },
  {
    id: 9,
    priority: 3,
    lead: 1,
    name: "tina"
  },
  {
    id: 7,
    priority: 3,
    name: "james"
  }
  
]);

const partialSort = (arr, start, end) => {
  var preSorted = arr.slice(0, start), postSorted = arr.slice(end);
  var sorted = arr.slice(start, end).sort();
  arr.length = 0;
  arr.push.apply(arr, preSorted.concat(sorted).concat(postSorted));
  return arr;
}


export const sortRecords = (recordsArg) => {
  return recordsArg.sort((a, b) => {
    if (a.priority < b.priority) {
      return 1;
    } else if (a.priority > b.priority) {
      return -1;
    } else {
      if (!a.lead && !b.lead) {
        return a.name.localeCompare(b.name);
      } else if (!a.lead && b.lead) {
        return 1;
      } else if (a.lead && !b.lead) {
        return -1;
      } else {
        return a.name.localeCompare(b.name);
      }
    }
  })
}

console.log(sortRecords(records))

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRIORITY</th>
            <th>LEAD</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}

export default App;
