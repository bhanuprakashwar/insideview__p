/* Given a list of entries which has information about employees in an organization.
The format of each entry is as follows.

employeeId,firstName, lastName, managerId

Here is a sample of the inputs.
Example:
1, Rob, Choi, 2 
2, Joseph, Grant
3, Andy, Zuckerman, 1
4, Mark, O'Donnell, 1 */
/* 
Joseph Grant
         Rob Choi
               Andy Zuckerman
               Mark O'Donnell */

const data = [{ id: 1, first: "Rob", second: "Choi", managerId: 2 },
{ id: 2, first: "Joseph", second: "Grant" },
{ id: 3, first: "Andy", second: "Zuckerman", managerId: 1 },
{ id: 4, first: "Mark", second: "O'Donnell", managerId: 1 }];

const printTree = (root, space = 4, level = 0) => {
    if (root) {
        console.log(" ".repeat(level), root.first + " " + root.second);
        for (const i of root.reporters) {
            printTree(i, space, level + space);
        }
    }
};

const buildingTree = (data) => {
    const obj = {};
    let root;
    for (const i of data) {
        obj[i.id] = { reporters: [], ...obj[i.id], ...i };

        if (i.managerId) {
            obj[i.managerId] = { reporters: [], ...obj[i.managerId] };
            obj[i.managerId].reporters.push(obj[i.id]);
        }
        else {
            root = obj[i.id];
        }
    }
    return root;
};


printTree(buildingTree(data));

