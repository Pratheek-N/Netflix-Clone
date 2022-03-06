"use strict";
const navListItem = document.querySelectorAll(".navList");
const navElement = document.querySelectorAll(".navElement");
let headName = document.querySelector(".heading");

for (let i = 0; i < navListItem.length; i++) {
  navListItem[i].className +=
    " mt-6 md:ml-[20px] md:w-[110px]  transition font-semibold hover:text-gray-400 hover:duration-500";
}

for (let i = 0; i < navElement.length; i++) {
  navElement[i].className +=
    "  md:ml-[23px]  transition font-semibold hover:text-gray-300  hover:duration-300";
}

function clickedHome() {
  headName.textContent = "Home";
  document.querySelector(".headerDetail").style = "width:9rem";
}
function clickedTvShows() {
  headName.textContent = "TV Shows";
  document.querySelector(".headerDetail").style = "width:16rem";
}
function clickedMovies() {
  headName.textContent = "Movies";
  document.querySelector(".headerDetail").style = "width:9rem";
}
function clickedNewPopular() {
  headName.textContent = "New & Popular";
  document.querySelector(".headerDetail").style = "width:32rem";
}
function clickedMyList() {
  headName.textContent = "My List";
  document.querySelector(".headerDetail").style = "width:12rem";
}
