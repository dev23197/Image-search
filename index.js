const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-image");
const searchResultEl = document.getElementById("result-search");
const ShowMoreResultEl = document.getElementById("show-more-result");

let inputData = "";
let page = 1;

async function searchImages(){
  inputData = searchInputEl.Value;

  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1){
    searchResultEl.innerhtml = "";
  }

  const result = data.result;
  result.foreach((result) =>{
const resultCount = document.createElement('p');
resultCount.textContent = `${data.total} results found`;
imageContainer.prepend(resultCount);
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("search-result");


  const image = document.createElement("img");
  image.src = result.url.small;
  image.alt = result.alt_description;


  const imageLink = document.createEllement("a");
  imageLink.href = result.links.html;
  imageLink.target = result.alt_description || "view image";


  imageWrapper.appendChild(image);
  imageWrapper.appendChild(imageLink);
  searchResultEl.appendChild(imageWrapper);

  });
  
page++;


if (page > 1){
  ShowMoreResultEl.style.display = "block";
}
}

formEl.addEventListener("submit" , (event) => {
   event.preeventDefault();
   page =1;
   searchImages();
});

ShowMoreResultEl.addEventListener("click", ()=> {
    searchImages();
});

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}