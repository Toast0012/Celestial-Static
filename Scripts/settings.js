// TAB CLOAK SHIT

function googleCloak() {
    localStorage.setItem('cloakedTitle', 'Google');
    localStorage.setItem('cloakedIcon', '/Static/Assets/Fav-Img/Googlefav.png');
    tabCloak();
}

function docsCloak() {
    localStorage.setItem('cloakedTitle', 'Google Docs');
    localStorage.setItem('cloakedIcon', '/Static/Assets/Fav-Img/Docsfav.png');
    tabCloak();
}
function gmailCloak() {
    localStorage.setItem('cloakedTitle', 'Inbox');
    localStorage.setItem('cloakedIcon', '/Static/Assets/Fav-Img/Gmailfav.png');
    tabCloak();
}
function classroomCloak() {
    localStorage.setItem('cloakedTitle', 'Classes');
    localStorage.setItem('cloakedIcon', '/Static/Assets/Fav-Img/Classroomfav.png');
    tabCloak();
}
function schoologyCloak() {
    localStorage.setItem('cloakedTitle', 'Home | Schoology')
    localStorage.setItem('cloakedIcon', '/Static/Assets/Fav-Img/Schoologyfav.png')
    tabCloak();
}

var bareStored = localStorage.getItem("bare")
var bareSel = document.getElementById("bareSwitcher")

function switchBare() {
  var selecter = document.getElementById("bareSwitcher");
  var selectedOption = selecter.value;

  localStorage.setItem("bare", selectedOption);
  var storedChoice = localStorage.getItem("bare");
  console.log(storedChoice)
};
