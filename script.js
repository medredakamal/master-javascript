/**
 * Master Javascript - by Med Reda Kamal
 * Script File
 */

/* Tip 1 : Iterate with for...of loop using Symbol.iterator - (Users Example) */
const usersArr = [
  { name: "Kamal", email: "kamal@gmail.com", status: "Active" },
  { name: "Ilham", email: "ilham@gmail.com", status: "Not active" },
  { name: "Youssef", email: "youssef@gmail.com", status: "Active" },
];
const usersArrIterator = usersArr[Symbol.iterator]();
const usersListDOM = document.getElementById("usersList");

for (let user of usersArrIterator) {
  const userRow = document.createElement("tr");
  const userNameDOM = document.createElement("td");
  const userEmailDOM = document.createElement("td");
  const userStatusDOM = document.createElement("td");

  userNameDOM.textContent = user.name;
  userEmailDOM.textContent = user.email;
  userStatusDOM.textContent = user.status;

  userRow.appendChild(userNameDOM);
  userRow.appendChild(userEmailDOM);
  userRow.appendChild(userStatusDOM);

  usersListDOM.appendChild(userRow);
}
