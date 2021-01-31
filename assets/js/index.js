// <div class="userCard">
const divUserCard = document.createElement("div");
divUserCard.classList.add("userCard");

//<div class="userPhoto">
const divUserPhoto = document.createElement("div");
divUserPhoto.classList.add("userPhoto");

//изображение пользователя
const userImage = document.createElement("img");
userImage.setAttribute(
  "src",
  "https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg"
);
userImage.setAttribute("alt", "user photo");

divUserPhoto.append(userImage);
divUserCard.append(divUserPhoto);

//<div class="userStat">
const divUserStat = document.createElement("div");
divUserStat.classList.add("userStat");

//<div class="userStatValue">
const divUserStatValue = document.createElement("div");
divUserStatValue.classList.add("userStatValue");

// <p>
const p1UserStatValue = document.createElement("p");
divUserStatValue.append(p1UserStatValue);
p1UserStatValue.innerText("183");

const p2UserStatValue = document.createElement("p");
divUserStatValue.append(p2UserStatValue);
p2UserStatValue.innerText("92778");

const p3UserStatValue = document.createElement("p");
divUserStatValue.append(p3UserStatValue);
p3UserStatValue.innerText("30");

//<div class="userStatName">
const divUserStatName = document.createElement("div");
divUserStatName.classList.add("userStatName");

//<p>
const p1UserStatName = document.createElement("p");
divUserStatName.append(p1UserStatName);
p1UserStatName.innerText("shots");

const p2UserStatName = document.createElement("p");
divUserStatName.append(p2UserStatName);
p2UserStatName.innerText("followers");

const p3UserStatName = document.createElement("p");
divUserStatName.append(p3UserStatName);
p3UserStatName.innerText("projects");

divUserStat.append(divUserStatValue);
divUserStat.append(divUserStatName);

divUserCard.append(divUserStat);

//<div class="userButton">
const divUserButton = document.createElement("div");
divUserButton.classList.add("userButton");

//<p>
const pUserButton = document.createElement("p");
divUserButton.append(pUserButton);
pUserButton.innerText("Follow");

divUserCard.append(divUserButton);

document.body.append(divUserCard);
