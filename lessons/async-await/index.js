// ========== Promise 1 ===
const userStatus = new Promise((resolve, reject) => {
  let hasKids = false;
  let hasDog = true;
  if (hasDog) {
    resolve({
      status: "User is cool",
      emoji: "🐕",
    });
  } else if (hasKids) {
    resolve({
      status: "User is going crazy",
      emoji: "😵",
    });
  } else {
    reject({
      status: "User is alone",
      emoji: "😞",
    });
  }
});

userStatus
  .then((obj) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${obj.status} => ${obj.emoji}`;
  })
  .catch((err) => {
    document.querySelector(
      ".result"
    ).innerHTML = `${err.status} => ${err.emoji}`;
  });

// =========== Promise 2 ===

function stepOne(userName) {
  return new Promise((resolve, reject) => {
    console.log(`User data being loaded`);
    if (userName == "Ali") {
      resolve("Welcome back!");
    } else {
      reject("Sorry I don't know you.");
    }
  });
}

function stepTwo(response) {
  return new Promise((resolve) => {
    console.log("Still loading..");
    resolve(`We have been waiting for you! ${response}`);
  });
}

// // call WITHOUT async await
// stepOne("Ali")
//   .then((response) => {
//     console.log("response just arrived");
//     return stepTwo(response);
//   })
//   .then((secondResponse) => {
//     console.log(secondResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// call WITH async await
async function startSomething() {
  try {
    const response = await stepOne("Ali");
    console.log("response just arrived");
    const secondResponse = await stepTwo(response);
    console.log(secondResponse);
  } catch (err) {
    console.log(err);
  }
}

startSomething();
