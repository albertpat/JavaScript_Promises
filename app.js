/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

let errorP = document.querySelector("#error");
let ul = document.querySelector("#list");

let promise = getList();

// TODO: Handle the resolved or rejected states of the promise
function handleList(list){
  list.forEach((hobbit) => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    ul.appendChild(li);
  });
}
function handleErr(err){
  errorP.textContent = err.message;
  console.log(err);
}
promise.then(handleList).catch(handleErr);
// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
