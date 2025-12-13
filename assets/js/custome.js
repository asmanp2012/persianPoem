let allWords = {};
function loadWords() {
  if (wordList && wordListDontNeed) {
    // ترکیب دو لیست
    allWords = {...wordList, ...wordListDontNeed};
    elTotal = document.getElementById('totalWords');
    elNeed  = document.querySelector('.count-word-need');
    elAccept = document.querySelector('.count-word-accept');
    elNotAccept = document.querySelector('.count-word-not-accept');
    elDontNeed = document.querySelector('.count-word-dont-need');

    console.log(`✅ ${Object.keys(allWords).length} کلمه بارگیری شد`);
    
    if(elTotal != null){elTotal.textContent = Object.keys(allWords).length;}
    if(elNeed != null){elNeed.innerHTML = Object.keys(wordList).length;}
    if(elAccept != null) { elAccept.innerHTML = Object.keys(acceptWordList).length;}
    if(elNotAccept != null){ elNotAccept.innerHTML = Object.keys(wordList).length - Object.keys(acceptWordList).length;}
    if(elDontNeed != null) {elDontNeed.innerHTML = Object.keys(wordListDontNeed).length;}
  }
}

loadWords();


// تابع برای toggle کردن منو در موبایل
function toggleNavbar() {
  const navbar = document.getElementById('navbarNav');
  navbar.classList.toggle('show');
  
  // تغییر آیکون همبرگری (اختیاری)
  const togglerIcon = document.querySelector('.navbar-toggler-icon');
  if (navbar.classList.contains('show')) {
    togglerIcon.classList.toggle('open', true);
    togglerIcon.innerHTML = '✕'; // آیکون بستن
    togglerIcon.style.fontSize = '1.5rem';
  } else {
    togglerIcon.classList.toggle('open', false);
    togglerIcon.innerHTML = '<span class="navbar-toggler-icon"></span>'; // آیکون همبرگری استاندارد
  }
}