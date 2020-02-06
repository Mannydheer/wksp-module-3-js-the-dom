
//This will add main header to body.

//MAIN - all under the main DIV
const mainHone = document.createElement('h1');
mainHone.innerText = "The best How I Met Your Mother episode (according to fans)";
document.getElementById('main').appendChild(mainHone);

//class for H1

//Style for mainHone

mainHone.style.textAlign = "center";

//PARAGRAPHS

const mainParah =  document.createElement('p');
mainParah.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
document.getElementById('main').appendChild(mainParah);

const mainHtwo =  document.createElement('h2');
mainHtwo.innerText = "The Slap Bet (Season 2, Episode 9)";
document.getElementById('main').appendChild(mainHtwo);

const mainParahtwo =  document.createElement('p');
mainParahtwo.innerText = "IMDB Rating: 9.5";
document.getElementById('main').appendChild(mainParahtwo);

// ----------------------------------------------------------------

//ADD MAIN PICTURE with TEXT
const firstImg =  document.createElement('img');
firstImg.src = ("/workshop/exercise-1/exercise-1-3/images/robin-sparkles.jpg");
document.getElementById('main').appendChild(firstImg);

const paraOne =  document.createElement('p');
paraOne.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
document.getElementById('main').appendChild(paraOne);

const paraTwo =  document.createElement('p');
paraTwo.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
document.getElementById('main').appendChild(paraTwo);

// FOOTER

const footerOne =  document.createElement("a");
footerOne.innerText = "Source";
document.getElementById('main').appendChild(footerOne).href = "#";


const linkJs = document.createElement('link');
linkJs.href = './styles.css';
linkJs.rel = "stylesheet";
linkJs.className = "css";
document.querySelector('head').appendChild(linkJs);

//STYLING. 

//body style

const body = document.querySelector("body");
body.style.background = 'rgba(246,187,33, .8) url(./images/yellow-umbrella.jpg) no-repeat';
body.style.backgroundSize = "100%";
body.style.fontFamily = 'Playfair Display', serif;

//main style

const mainEle = document.getElementById('main');
mainEle.style.background= "#fafafa;";
mainEle.style.borderRadius = "4px";
mainEle.style.boxShadow = "8px 10px 25px 0 rgba(128, 128, 128, .44)";
mainEle.style.minWidth = "320px";
mainEle.style.maxWidth = "600px";
mainEle.style.margin = "35px";
mainEle.style.padding = "4px 32px 32px";

//h1 & h2
mainHone.style.fontFamily = 'Open Sans', sans-serif;
mainHone.style.textAlign = "center";
mainHtwo.style.fontFamily = 'Open Sans', sans-serif;
mainHtwo.style.textAlign = "center";

//h2
mainHtwo.style.textAlign = "left";

//paragrapsh



