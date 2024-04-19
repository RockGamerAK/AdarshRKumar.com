var postsEle = document.querySelector('.posts')

var xhr = new XMLHttpRequest()
xhr.open('POST', 'https://blogfeed.adarshrkumar.dev/getAllPosts')
xhr.addEventListener('load', function() {
  var posts = this.responseText
  if (
    (posts.startsWith('[') && posts.endsWith(']')) || 
    (posts.startsWith('{') && posts.endsWith('}'))
  ) {
    posts = JSON.parse(posts)
  }
  addPosts(posts)
})
xhr.send()

function addPosts(posts) {
  posts.forEach(function(post) {
    var post = document.createElememt('div')

    if (post.image) {
      var image = document.createElement('img')
      image.classList.add('post__img')

      if (post.image.src) image.src = post.image.src
      if (post.image.alt) image.alt = post.image.alt

      post.appendChild(image)
    }
    
    if (post.title || post.content) {
      var info = document.createElement('div')

      if (post.title) {
        var title = document.createElement('h3')
        title.classList.add('post__title')
        title.textContent = post.title
        info.appendChild(title)
      }

      if (post.content) {
        var postContent = document.createElement('p')
        
        var convEle = document.createElement('span')
        convEle.innerHTML = post.content
        document.body.appendChild(convEle)
        post.content = convEle.innerText
        convEle.remove()

        if (post.content.includes('\n')) post.content = post.content.split('\n').join('<br>')

        postContent.innerHTML = post.content
      }

      post.appendChild(info)
    }

    postsEle.appendChild(post)
  })
}