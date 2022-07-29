const input = document.querySelector("input");
const btn = document.querySelector(".searchbtn");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const followings = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");
const gitBio = document.querySelector(".githubBio");
let img = document.createElement("img");
let block = document.querySelector(".mainImg");

btn.addEventListener("click", function () {
  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    const dateData = data.created_at.slice(0, data.created_at.length - 10);

    img.src = data.avatar_url;
    block.appendChild(img);
    block.style.border = "none";

    user.innerHTML = data.name;
    login.innerHTML = `@${data.login}`;
    joined.innerHTML = `Joined ${dateData}`;
    repo.innerHTML = data.public_repos;
    follower.innerHTML = data.followers;
    followings.innerHTML = data.following;
    locations.innerHTML =
      data.location === "" || data.location === null
        ? "No Location"
        : data.location;
    twit.innerHTML =
      data.twitter_username === "" || data.twitter_username === null
        ? "No Twitter"
        : data.twitter_username;
    websites.innerHTML =
      data.blog === "" || data.blog === null ? "No Website" : data.blog;
    companies.innerHTML =
      data.company === "" || data.company === null
        ? "No Company"
        : data.company;
    gitBio.innerHTML =
      data.bio === "" || data.bio === null
        ? "This profile has no bio..."
        : data.bio;
  }
  getUrl();
  input.value = "";
});

const toggle = function (e) {
  if (e.currentTarget.classList.contains("light--hidden")) {
    document.documentElement.setAttribute("color-mode", "light");
    localStorage.setItem("color-mode", "light");
    return;
  }
  document.documentElement.setAttribute("color-mode", "dark");
  localStorage.setItem("color-mode", "dark");
};

const toggleColorButtons = document.querySelectorAll(".color-mode__btn");
toggleColorButtons.forEach((btn) => {
  btn.addEventListener("click", toggle);
});
