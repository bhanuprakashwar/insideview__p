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
let root = null;
const obj = data.reduce((acc, cur) => {
    Object.assign(acc[cur.id] = acc[cur.id] || {}, cur);
    if (!cur.managerId) {
        root = cur.id;
    }
    acc[cur.managerId] = acc[cur.managerId] || {};
    acc[cur.managerId][cur.id] = acc[cur.id];
    return acc;
}, {});

console.log(obj[root]);

