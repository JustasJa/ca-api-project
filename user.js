
const queryParams = window.location.search;
const urlParams = new URLSearchParams(queryParams);
const userId = urlParams.get('user_id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(res => res.json())
.then(user => {
    console.log(user)
    const userWrapper = document.createElement('div');
    userWrapper.classList.add('po-wrap');
    document.querySelector('body').append(userWrapper);
    userWrapper.innerHTML = `<h1>User info:</h1>
                            <h3>Name:  </h3> ${user.name} 
                            <h3>User name:  </h3> ${user.username} 
                            <h3>User email: </h3> <a href="mailto:${user.email}">${user.email}</a> 
                            <h3>Adress: </h3> <a href="https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}"> St.${user.address.street} ${user.address.suite}, ${user.address.city}, (zipcode: ${user.address.zipcode})</a>
                            <h3>User phone: </h3> <a href="tel:"> ${user.phone} </a>
                            <h3>User website: </h3> <a href="hildegard.org">${user.website}</a> 
                            `;
fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
      .then(response => response.json())
      .then(posts => {
        const postsWrapper = document.createElement('div');
        postsWrapper.classList.add('posts-wrapper');
        document.querySelector('body').append(postsWrapper);
        posts.map(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
      
            postElement.innerHTML = `<h2><a href="post.html?post_id=${post.id}">${post.title}</a></h2><p>${post.body}</p>`;
            
            postsWrapper.append(postElement);
      })
    })
fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
    .then(res => res.json())
    .then(albums => {
      const albumsWrapper = document.createElement('div');
      albumsWrapper.classList.add('albums-wrapper');
      
      const albumsList = document.createElement('ul');
      albumsList.classList.add('albums-list');
        albumsList.innerHTML = `<h1>User Almbums: </h1>`
      albums.map(album => {
        albumsList.innerHTML += `</h1><li><a href="album.html?album_id=${album.id}">${album.title}</a></li>`;
      })

      albumsWrapper.append(albumsList);

      document.body.append(albumsWrapper);

      let div = document.createElement('div');
      div.classList.add("btn-wrap")
      const btn = document.createElement('button');
      btn.classList.add("btn")
      
      btn.innerHTML = `<a href="/">Back</a>`;
      
      div.append(btn);
      document.body.append(div);
  
  })

  

})

