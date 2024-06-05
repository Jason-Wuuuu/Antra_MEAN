// 1
const names = [
  { userid: 2, name: "Velen" },
  { userid: 56, name: "Illidan" },
  { userid: 23, name: "Muradin" },
  { userid: 12, name: "Sylvanas" },
  { userid: 44, name: "Cenarius" },
  { userid: 4, name: "Gul'Dan" },
];

const roles = [
  { userid: 2, role: "Mage" },
  { userid: 4, role: "Worlock" },
  { userid: 56, role: "Demon Hunter" },
  { userid: 66, role: "Druid" },
  { userid: 87, role: "Shaman" },
  { userid: 12, role: "Hunter" },
];

/*
  expect: [
    {
      userid: 2, name:  "Velen", role: "Mage"
    },
    {
      userid: 44, name:  "Cenarius", role: null
    },
    ...
  ]
*/

// merge names and roles
const merged = names.map((name) => {
  // Find role object with userid
  const roleObj = roles.find((role) => role.userid === name.userid);
  // Return merged object
  return {
    ...name,
    role: roleObj ? roleObj.role : null, // role set to null if not found
  };
});

console.log("\nResult for problem 1:", merged);

// 2
const callback1 = (a) => a + 2; // 6
const callback2 = (b) => b * 2; // 12
const callback3 = (c) => c - 2; // 10

function runAll(initNum) {
  return function (...callbacks) {
    // Use reduce to apply each callback to the accumulated result
    return callbacks.reduce((acc, callback) => callback(acc), initNum);
  };
}

console.log(
  "\nResult for problem 2:",
  runAll(4)(callback1, callback2, callback3)
); // 10

// 3
source = [
  ["Foley", "Chemicals", "CHEM"],
  ["Foley", "Chemicals", "CTO"],
  ["Foley", "Chemicals", "LK"],
  ["Foley", "Chemicals", "R8"],
  ["Foley", "Chemicals", "WT"],
  ["Foley", "Finishing", "LB2"],
  ["Foley", "Finishing", "LB4"],
  ["Foley", "Finishing", "RW1"],
  ["Foley", "Finishing", "RW2"],
  ["Foley", "Line 3", "LN3"],
  ["Foley", "Line 3", "Production Process"],
  ["Foley", "Line 4", "LN4"],
  ["Foley", "Line 4", "Prod Process"],
  ["Foley", "Mill General", "Wastewater Treatment"],
  ["Foley", "Powerhouse", "BB1"],
  ["Foley", "Powerhouse", "BB2"],
  ["Foley", "Powerhouse", "EV5"],
  ["Foley", "Powerhouse", "FWE"],
  ["Foley", "Powerhouse", "PB1"],
  ["Foley", "Powerhouse", "PB2"],
  ["Foley", "Powerhouse", "RB2"],
  ["Foley", "Powerhouse", "RB3"],
  ["Foley", "Powerhouse", "RB4"],
  ["Foley", "Powerhouse", "TG2"],
  ["Foley", "Powerhouse", "TG3"],
  ["Foley", "Powerhouse", "TG4"],
];

/*
[['Foley', 'Powerhouse', 'TG3', 'Bright']...] --->
[{
  name:'Foley',
  children: [
    {
      name: 'Powerhouse',
      children: [
        {
          name: 'TG3',
          children: [
            {name: 'Bright', children: []}
          ]
        }
      ]
    }
  ] 
},
...]
*/

const transformData = (data) => {
  const result = [];

  // Iterate over each path in the source data
  data.forEach((path) => {
    let curLevel = result;

    // Iterate over each name in the path
    path.forEach((name) => {
      // Find the node with the current name at the current level
      let existingNode = curLevel.find((node) => node.name === name);

      // Check if node exists, if no, create a new one
      if (!existingNode) {
        existingNode = { name, children: [] };
        curLevel.push(existingNode);
      }

      // update reference to the children of the current node
      curLevel = existingNode.children;
    });
  });

  return result;
};

const transformedData = transformData(source);
console.log(
  "\nResult for problem 3:",
  JSON.stringify(transformedData, null, 2)
);
