// ========== let's make hot chocolate! ===

function prepareHotChocolate(callback) {
  setTimeout(() => {
    let milk = "boiled";
    // we want hot milk to start next step
    callback(milk, callback2);
  }, 6000);
}

function callback(milk, callback2) {
  if (milk == "boiled") {
    let chocolate = "added";
    // we can now add chocolate
    callback2(chocolate, callback3);
  }
}

function callback2(chocolate, callback3) {
  if (chocolate == "added") {
    // let's add a final touch
    let secretIngredient = "added";
    callback3(secretIngredient);
  }
}

function callback3(secretIngredient) {
  if (secretIngredient == "added") {
    // our hot chocolate is ready!
    console.log("--------------------");
    console.log("Hot Chocolate ready!");
  }
}

prepareHotChocolate(callback);

// ========== let's do it with async await now! ===

function stepOne() {
  return new Promise((resolve, reject) => {
    console.log("Water is boiling.");
    let water = "boiled";

    if (water === "boiled") {
      resolve("Water is ready!");
    } else {
      reject("We don't want an ice tee!");
    }
  });
}

function stepTwo() {
  return new Promise((resolve, reject) => {
    console.log("Select your favorite tee.");
    let tee = "added";

    if (tee === "added") {
      resolve("We just added tee in the water.");
    } else {
      reject("We said tee! Not cafe!");
    }
  });
}

function stepTree() {
  return new Promise((resolve, reject) => {
    console.log("Do you want a sugar with it?");
    let sugar = false;

    if (sugar === false) {
      resolve("Your tee is finish!");
    } else {
      reject("We don't serve tee with sugar!");
    }
  });
}

async function prepareTee() {
  try {
    const reponse = await stepOne();
    const reponse2 = await stepTwo(reponse);
    const reponse3 = await stepTree(reponse2);
    console.log(reponse3);
  } catch (err) {
    console.lof(err);
  }
}

prepareTee();
