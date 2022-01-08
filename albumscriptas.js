
const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const albumId = urlParams.get('album_id');
fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=10`)
  .then(res => res.json())
  .then(photos => {
    const photosWrapper = document.createElement('div');
    photosWrapper.classList.add('photos-wrapper');
    photos.map(photo => {
      const image = document.createElement('img');
      image.setAttribute('src', photo.thumbnailUrl);
      photosWrapper.append(image);
    })
    document.body.prepend(photosWrapper);
  })
  let div = document.createElement('div');
  div.classList.add("btn-wrap")
  const btn = document.createElement('button');
  btn.classList.add("btn")
  
  
  btn.innerHTML = `<a href="index.html">Back</a>`;
  
  div.append(btn);
  document.body.append(div);
  

