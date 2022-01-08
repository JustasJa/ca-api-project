
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
  
  
  btn.innerHTML = `<a href="/index.html">Back</a>`;
  
  div.append(btn);
  document.body.append(div);
  

// (function($){

//   // Init empty gallery array
//   let container = [];

//   // Loop over gallery items and push it to the array
//   $('#gallery').find('figure').each(function(){
//     let $link = $(this).find('a'),
//         item = {
//           src: $link.attr('href'),
//           w: $link.data('width'),
//           h: $link.data('height'),
//           title: $link.data('caption')
//         };
//     container.push(item);
//   });

//   // Define click event on gallery item
//   $('a').click(function(event){

//     // Prevent location change
//     event.preventDefault();

//     // Define object and gallery options
//     let $pswp = $('.pswp')[0],
//         options = {
//           index: $(this).parent('figure').index(),
//           bgOpacity: 0.85,
//           showHideOpacity: true
//         };

//     // Initialize PhotoSwipe
//     let gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
//     gallery.init();
//   });

// }(jQuery));

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
//   .then(response => response.json())
//   .then(posts => {
//     const postsWrapper = document.createElement('div');
//     postsWrapper.classList.add('posts-wrapper');
//     document.querySelector('body').prepend(postsWrapper);
//     posts.map(post => {
//       fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
//         .then(res => res.json())
//         .then(userData => {
//           const postElement = document.createElement('div');
//           postElement.classList.add('post');
//           const showCommentsButton = document.createElement('button');
//           showCommentsButton.classList.add('comments-button');
//           showCommentsButton.textContent = 'Read Comments';
//           showCommentsButton.addEventListener('click', () => {
//             fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//               .then(res => res.json())
//               .then(comments => {
//                 const commentsList = document.createElement('div');
//                 commentsList.classList.add('comments-list');
//                 comments.map(comment => {
//                   console.log(comment);
//                   const commentElement = document.createElement('div');
//                   commentElement.classList.add('comment-wrapper');
//                   commentElement.innerHTML = `<h3>${comment.name}</h3>                                              <span>Message by: ${comment.email}</span>                                              <p>${comment.body}</p>`;
//                   commentsList.append(commentElement);
//                 })
//                 postElement.append(commentsList);
//                 showCommentsButton.remove();
//               })
//           })
//           postElement.innerHTML = `<h2><a href="post.html?post_id=${post.id}">${post.title}</a></h2>                                   <span>Author: <a href="user.html?user_id=${post.userId}">${userData.name}</a></span>                                   <p>${post.body}</p>`;
//           postElement.append(showCommentsButton);
//           postsWrapper.append(postElement);
//         })
//     })
//   })