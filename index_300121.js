/*let class1 = document.getElementsByClassName("class1");
let class2 = document.getElementsByClassName("class2");
let classAll = document.getElementsByClassName("class1 class2");

//получить параграфы и сделать им др. фон
document
  .getElementsByClassName("class1")
  .getElementsByTagName("p").style.background = "green";

let col11 = document.querySelectorAll("p.class2");
for (i=0; i<col11.length; i++) {
  col11[i].style.backgroundColor = "blue";
}
  */
/*let col1 = document.querySelector("ul").children;
col1[1].style.backgroundColor = "red";
*/ /*
let colP = document.getElementsByTagName("p");
colP[0].innerText; // текст внутри параграфа
*/
let elemUl = document.querySelector("ul").childNodes; //узлы
let elemLi = document.querySelector("ul").children; // получили li
document.querySelector("ul").firstElementChild; // доступ к 1 li
document.querySelector("ul").lastElementChild; // доступ к последней li
document.querySelector("ul").lastElementChild.style.background = "orange";

let childNodesUl = document.querySelector("ul").childNodes;
for (let i of document.querySelector("ul").childNodes) {
  console.log(i);
}

nextSibline - следующ.элемент;
previousSibline - предыдущ.элемент;

//поменять ссылку на картинку
let imgs = document.getElementsByTagName("img");
imgs[1].src =
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FyAr1DfrX77A%2Fmqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyAr1DfrX77A&tbnid=UfmoHXXS35VSoM&vet=12ahUKEwiEmbX_vcTuAhXCwCoKHUUjD6UQMygAegUIARCQAQ..i&docid=DQG2w-KoYaQ5zM&w=320&h=180&itg=1&q=dfvfd&safe=active&ved=2ahUKEwiEmbX_vcTuAhXCwCoKHUUjD6UQMygAegUIARCQAQ";

//поменять линк ссылки
let links = document.getElementsByTagName("a");
links[0].href =
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FyAr1DfrX77A%2Fmqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyAr1DfrX77A&tbnid=UfmoHXXS35VSoM&vet=12ahUKEwiEmbX_vcTuAhXCwCoKHUUjD6UQMygAegUIARCQAQ..i&docid=DQG2";
links[0].innerText = "textTest";

//создадим h1 c текстом на странице
let newH1 = document.createElement("h1");
let newText = document.createTextNode("hello");
newH1.appendChild(newText);

//создать список и присоеденить li
let r = document.createElement("ul").appendChild(document.createElement("li"));

// поменять цвет ссылок на красный, если в начале линка есть http
let links = document.querySelectorAll("a");
for (let i of links) {
  let href = i.getAttribute("href");
  if (href.includes("http://")) {
    i.style.color = "red";
  }
}

//создать список с данными юзеров
const users = [
  {
    id: 1,
    name: 'name1',
    surname: 'surname1',
    imgSrc: '#',
  }
  {
    id: 2,
    name: 'name2',
    surname: 'surname2',
    imgSrc: '#',
  }
  {
    id: 3,
    name: 'name3',
    surname: 'surname3',
    imgSrc: '#',
  }
];

const userListElem = document.getElementById('userList');

users.forEach(
  (user) => {
    userListElem.append(createUserListElem(user));
  }
)

function createUserListElem(user) {
  //создание нового элемента списка
  const userListItemElem = document.createElement('li');

  //контейнер для карточки/ новая каточка
  const userCardWrapperElem = document.createElement('div');
  //userCardWrapperElem.setAttribute('class', 'userCardWrapper');
  userCardWrapperElem.classList.add('userCardWrapper');

  //контейнер для изображения
  const userImageContainerElem = document.createElement('div');
  userImageContainerElem.classList.add('userImageContainer');

  //изображение пользователя
  const userImageElem = document.createElement('img');
  userImageElem.classList.add('userImage');
  userImageElem.setAttribute('src', user.imageSrc);
  userImageElem.setAttribute('alt', 'user photo');

  //присоединяем изображение в контейнер изображения
  userImageContainerElem.append(userImageElem);
  //присоединяем контейнер фото в карточку
  userCardWrapperElem.append(userImageContainerElem);

  //создание fullName
  const userFullNameElem = document.createElement('h1');
  userFullNameElem.innerText = `${user.name} ${user.surname}`;
  userCardWrapperElem.append(userFullNameElem);

  //присоединяем карточку в li
  userListItemElem.append(userCardWrapperElem);
  //устанавливаем новый атрибут для li
  userListItemElem.setAttribute('id', user.id);

  return userListItemElem;
}