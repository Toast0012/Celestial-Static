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
    localStorage.setItem('cloakedTitle', 'Home | Schoology');
    localStorage.setItem('cloakedIcon', '/Static/Assets/Fav-Img/Schoologyfav.png');
    tabCloak();
}

function applyBare(bare) {
  localStorage.setItem('bare', bare);
  console.log(localStorage.getItem('bare'));
}

var storedBare = localStorage.getItem('bare');
const bareSelect = document.getElementById('bareSwitcher');
bareSelect.value = storedBare;

bareSelect.addEventListener('change', function() {
  const selectedBare = this.value;
  localStorage.setItem('bare', selectedBare);
  applyBare(selectedBare);
})
