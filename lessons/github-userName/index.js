"use strict"; // 'sloppy mode';

class GitHubApi {
  // ========== CONSTRUCTOR ===
  constructor(options = {}) {
    this.options = {
      container: "#anyElement",
    };
    Object.assign(this.options, options); // assign obj {container: '#anyElement'} => obj {container: '.result'}
    this.apiUrl = "https://api.github.com"; // fixe part of the url
    this.userNameEndpoint = "/users/:username/repos"; // changing part of the url
    this.elements = {}; // create new empty object called elements
    this.init(); // start widget init
  }

  // ========== INIT ===
  init() {
    this.elements.container = document.querySelector(this.options.container); // create new property 'container' and assign it to 'result'
    this.elements.container.innerHTML = this.parsedInitialTemplate(); // set the content of 'container' (form + div for repositories)

    // Getting all the elements
    this.elements.form = this.elements.container.querySelector(".form");
    this.elements.input = this.elements.container.querySelector(".inputText");
    this.elements.list = this.elements.container.querySelector(".repositories");

    // Events
    this.registerEvents();
  }

  // ========== EVENT ===
  registerEvents() {
    this.elements.form.addEventListener("submit", (e) => {
      e.preventDefault(); // avoid form to push out by default

      // Getting the value from input field
      const username = this.elements.input.value.trim(); // assign the user input and delete all white spaces
      this.getRepositories(username, (repositories) => {
        repositories = this.filterRepositoryResults(repositories); // filter (description, name, url, createdAt)
        const markup = this.createListTemplate(repositories); // create a div where we map all repo and return what we filtered
        this.elements.list.innerHTML = markup; // assign to our div the result
      });
    });
  }

  // ========== GET REPO ===
  getRepositories(username, callback) {
    // replace the changing part of the url and encode user input
    const url = `${this.apiUrl}${this.userNameEndpoint}`.replace(
      ":username",
      encodeURIComponent(username)
    );

    // get data from the github API
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data); // test purpose
        callback(data);
      });
  }

  // ========== FILTER ===
  filterRepositoryResults(repositoryData) {
    const repositories = repositoryData.map((repo) => {
      return {
        description: repo.description,
        name: repo.name,
        url: repo.html_url,
        createdAt: repo.created_at,
      };
    });
    return repositories;
  }

  // ========== PARSED INITIAL TEMPLATE ===
  parsedInitialTemplate() {
    return `
    <form class = "form">
     <label for = "username"> Name </label>
     <input type = "text" class = "inputText" placeholder = "Github username" required>
     <input type = "submit" class = "btn" value = "Submit"/>
    </form>
    <div class = "repositories"></div>
    `;
  }

  // ==========  CREATE LIST TEMPLATE ===
  createListTemplate(repositories) {
    return ` 
    <div>
     ${repositories.map((repository) => this.listTemplate(repository)).join("")}
    </div>
  `;
  }

  // ========== LIST TEMPLATE ===
  listTemplate(repository) {
    return `
  <a href="${repository.url}" target="_blank" class="widget-box">
     <h4>${repository.name}</h4>
     <small>${repository.createdAt}</small>
     <p>${repository.description}</p>
  </a>
  `;
  }
}

const widget = new GitHubApi({ container: ".result" });
