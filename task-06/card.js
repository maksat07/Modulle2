const body = document.querySelector('body')
body.style.fontFamily = "Outfit, sans-serif";
body.style.fontSize = '18px';
body.style.backgroundColor = 'hsl(217, 54%, 11%)';
body.style.height = '100vh';
body.style.margin = '0';
body.style.color = 'hsl(0, 0%, 100%, 60%)';


const container = document.createElement("div");
container.className = ("container");
container.style.backgroundColor = 'hsl(216, 50%, 16%)';
container.style.width = '450px';
container.style.padding = '1.25rem';
container.style.borderRadius = '1rem';
container.style.margin = '0 auto 1rem'
document.body.appendChild(container);
  
const mainImage = document.createElement("div");
mainImage.className = ("main-image");
mainImage.style.position = 'relative';
container.appendChild(mainImage);

const mainPhoto = document.createElement('img');
mainPhoto.className = ("main-photo");
mainPhoto.style.maxWidth = '100%';
mainPhoto.src = './images/image-equilibrium.jpg'
mainImage.appendChild(mainPhoto);

const hoverImg = document.createElement("div")
hoverImg.className = ("hover-img");
hoverImg.style.position = 'absolute';
hoverImg.style.top = '0';
hoverImg.style.borderColor = 'hsl(178, 100%, 50%, 60%)'
hoverImg.style.width = '100%';
hoverImg.style.height = 'calc(100% - 4px)';
hoverImg.style.zIndex = '999';
hoverImg.style.opacity = '0';
hoverImg.style.transition = 'opacity 0.3s ease-in-out'
mainImage.appendChild(hoverImg);

// const hoverImg = document.createElement("div")
// hoverImg.className = ("hover-img");
// hoverImg.hover.style.opacity = '1';
// hoverImg.style.cursor = 'pointer';
// mainImage.appendChild(hoverImg)

const imgHover = document.createElement("img");
imgHover.className = ("img-hover");
imgHover.src = './images/icon-view.svg';
imgHover.style.position = 'absolut';
imgHover.style.left = '50%';
imgHover.style.top = '50%';
    imgHover.style.transform = 'translate(-50%, -50%)';
   imgHover.style.maxWidth = '100%' 
hoverImg.appendChild(imgHover)

const div1 = document.createElement("div");
div1.className = ("div-1")
container.appendChild(div1);
  
const h2 = document.createElement("h2");
h2.innerText = 'Equilibrium #3429'
h2.style.color = 'white';
h2.style.margin = '1rem 0.5rem 0.5rem 0';
div1.appendChild(h2);

// const h2hover = document.createElement("h2");
// h2hover.innerText = 
// //h2hover.style.hover.color = 'var(--cyan)';
// //h2hover.style.hover.cursor = 'pointer';
// div1.appendChild(h2hover);

const text = document.createElement("p");
text.className = ("text");
    text.innerText = 'Our Equilibrium collection promotes  balance and calm.'
    text.style.fontWeight = '300'
div1.appendChild(text);

const ul = document.createElement("ul");
ul.style.display = 'flex';
ul.style.alignItems = 'center';
ul.style.justifyContent = 'space-between';
ul.style.padding = '2rem';
    ul.style.borderBottom = '1.5px solid linen';
    ul.style.listStyleType = 'none';
div1.appendChild(ul);
   
const icon1 = document.createElement('div');
icon1.className = ("icon1");
icon1.style.display = 'flex';
ul.appendChild(icon1);

  
const ethereum = document.createElement("img");
ethereum.className = ("ethereum");
ethereum.src = './images/icon-ethereum.svg';
ethereum.style.margin = '0 5rem 0 0;';
    icon1.appendChild(ethereum);

   
const miniTex = document.createElement("li");
miniTex.className = ("mini-tex");
miniTex.innerText = '0.041 ETH'
miniTex.style.color = 'rgb(0, 255, 247)';
miniTex.style.alignItems = 'center';
miniTex.style.paddingLeft = '10px'
icon1.appendChild(miniTex);
    
const icon2 = document.createElement('div');
icon2.className = ("icon2");
icon2.style.display = 'flex';
ul.appendChild(icon2);


const clock = document.createElement("img");
clock.className = ("clock")
clock.src = './images/icon-clock.svg';
clock.style.margin = '0 5rem 0 0;';
    icon2.appendChild(clock);

const texMini = document.createElement("li");
texMini.className = ("tex-mini");
texMini.innerText = '3 days left'
texMini.style.display = 'flex';
texMini.style.alignItems = 'center';
texMini.style.paddingLeft = '10px'
   icon2.appendChild(texMini);


  
// const hr = document.createElement('hr');
// hr.style.height = '0.2px';
// hr.style.borderColor = 'rgb(139, 172, 218)';
//  container.appendChild(hr);


const avatar = document.createElement("div");
avatar.className = ("avatar");
avatar.style.display = 'flex';
avatar.style.alignItems = 'center';
avatar.style.justifyContent = 'start';
avatar.style.paddingTop = '2rem';
container.appendChild(avatar);
  
const avatarImg = document.createElement("img");
avatarImg.className = ("avatar-img");
avatarImg.src = './images/image-avatar.png'
avatarImg.style.width = '3.5rem';
avatarImg.style.border = '2px solid white';
avatarImg.style.borderRadius = '50%';
avatarImg.style.marginRight = '1rem';
avatar.appendChild(avatarImg);

const creation = document.createElement("p");
creation.className = ("creation");
creation.innerText = 'Creation of';
// creation.style.color = 'hsl(215, 32%, 27%)';
avatar.appendChild(creation);

const authorName = document.createElement("span");
authorName.className = ("author-name");
authorName.innerText = 'Jules Wyvern';
authorName.style.fontWeight = '400'
authorName.style.color = 'white';
authorName.style.padding = '0 10px'
    creation.appendChild(authorName);
