//создать список с данными юзеров
const users = [
  {
    id: 1,
    name: "name1",
    surname: "surname1",
    imgSrc: "#",
  },
  {
    id: 2,
    name: "name2",
    surname: "surname2",
    imgSrc: "#",
  },
  {
    id: 3,
    name: "name3",
    surname: "surname3",
    imgSrc: "#",
  },
];

const userListElem = document.getElementById("userList");

users.forEach((user) => {
  userListElem.append(createUserListElem(user));
});

function createUserImageElem({ imageSrc }) {
  const userImageContainerElem = document.createElement("div");
  userImageContainerElem.classList.add("userImageContainer");
  const userImageElem = document.createElement("img");
  userImageElem.classList.add("userImage");
  userImageElem.setAttribute("src", imageSrc);
  userImageElem.setAttribute("alt", "user photo");
  userImageContainerElem.append(userImageElem);
  return userImageContainerElem;
}

function createUserFullNameElem({ name, surname }) {
  const userFullNameElem = document.createElement("div");
  userFullNameElem.innerText = `${name} ${surname}`;
  return userFullNameElem;
}

//создание 1 новой карточки
function createUserCardElem(user) {
  const userCardWrapperElem = document.createElement("div");
  userCardWrapperElem.classList.add("userCardWrapper");
  userCardWrapperElem.append(createUserImageElem(user));
  userCardWrapperElem.append(createUserFullNameElem(user));
  return userCardWrapperElem;
}

function createUserListElem(user) {
  // создание нового элемента списка
  const userListItemElem = document.createElement("li");
  // присоединяем карточку в li
  userListItemElem.append(createUserCardElem(user));
  // устанавливаем новый атрибут для li <li id=1></li>
  userListItemElem.setAttribute("id", user.id);
  return userListItemElem;
}
