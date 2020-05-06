// ========= Fetch with Text ===

const fetchTextFile = () => {
  fetch("./plain.txt")
    .then((response) => response.text())
    .then((data) => {
      //   console.log(data);
      document.querySelector(".result").innerHTML = data;
    })
    .catch((err) => console.log(err));
};

// ========= Fetch with JSON ===

const fetchJsonFile = () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      let userCard = "<h2> All Users </h2>";
      data.forEach((user) => {
        userCard += `
          <div class = 'card' id = ${user.id}>
            <div class = 'avatar'> ${user.photo} </div>
            ${user.name}, <span> ${user.age} </span> old, and lives 
            in <span> ${user.city} </span>
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userCard;
    });
};

// ========= Fetch with API ===

const fetchApi = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      let imgCard = "<h2> Images </h2>";
      data.forEach((img) => {
        imgCard += `
          <div id = ${img.id}>
            <img src = ${img.thumbnailUrl} alt = ${img.title}>
            <h3> ${img.title} </h3>
            <img src = ${img.url} alt = ${img.title}>
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = imgCard;
    });
};
