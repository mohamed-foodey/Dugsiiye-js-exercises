const titleInput = document.querySelector('#post-title');
const imgInput = document.querySelector('#img-url');
const contentInput = document.querySelector('#content');
const btn = document.querySelector('#btn-posts');
const postsContainer = document.querySelector('.div-append');

// domka loaded 
document.addEventListener("DOMContentLoaded", loadPosts)

function loadPosts() {
    const aqriso = getPostsToLocalStorage();
    
    aqriso.forEach(aqri => {
        // Halkan isticmaal CreatePostToDom halkii aad createPost ka isticmaali lahayd
        CreatePostToDom(aqri); 
    });
}

btn.addEventListener("click", createPost);

function createPost() {
    const title = titleInput.value.trim();
    const imgUrl = imgInput.value.trim();
    const content = contentInput.value.trim();
    
    
    // SAXID: Hubi in meeluhu aysan marneyn (!== "")
    if (title !== "" && content !== "" && imgUrl !== "") {
        const post = {
            id: Date.now(),
            title: title,
            imgUrl: imgUrl,
            content: content,
            completed: false
        };

        // Ku dar DOM-ka
        CreatePostToDom(post);
        // Ku dar Local Storage
        savePostsToLocalStorage(post);

        // Nadiifi meelaha laga qoro (Clear inputs)
        titleInput.value = "";
        imgInput.value = "";
        contentInput.value = "";
    } 
    // else {
    //     alert("Fadlan buuxi dhamaan meelaha banaan!");
    // }
}

function CreatePostToDom(post) {
    const postCard = document.createElement('div');
    postCard.className = "posts-container";
    postCard.dataset.id = post.id;

    
    postCard.innerHTML = `
        <h3>${post.title}</h3>
        <img src="${post.imgUrl}" alt="${post.title}" style="max-width: 100%;">
        <p>${post.content}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    
    postsContainer.appendChild(postCard);

        // Delete button functionality

        attachEventListeners(postCard, post);



}

// delete button functionality
function attachEventListeners(postCard, post) {
    const deleteBtn = postCard.querySelector('.delete-btn');
    const editBtn = postCard.querySelector('.edit-btn');

   deleteBtn.addEventListener('click', function() {

        // Ka saar DOM-ka
        postCard.remove();
        // Ka saar Local Storage
        const existingPosts = getPostsToLocalStorage();
        const updatedPosts = existingPosts.filter(p => p.id !== post.id);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        
   }) 

   editBtn.addEventListener('click', function() {
        handleEdit(postCard, post.id);

        const titleUserInterFace = postCard.querySelector('h3');
        const imgUserInterFace = postCard.querySelector('img');
        const textUserInterFace = postCard.querySelector('p');

        const newTitle = prompt("Enter new title:", titleUserInterFace.innerHTML);
        const newImgUrl = prompt("Enter new image URL:", imgUserInterFace.src);
        const newContent = prompt("Enter new content:", textUserInterFace.innerHTML);

        if (newTitle !== null && newImgUrl !== null && newContent !== null) {
            // Update the DOM
            titleUserInterFace.innerHTML = newTitle;
            imgUserInterFace.src = newImgUrl;
            textUserInterFace.innerHTML = newContent;
        }

        // Update Local Storage
        updatePostInLocalStorage(post.id, newTitle, newImgUrl, newContent);


   })
}

function updatePostInLocalStorage(postId, newTitle, newImgUrl, newContent) {
    const existingPosts = getPostsToLocalStorage();
    const updatedPosts = existingPosts.map(post => {
        if (post.id === postId) {
            return {
                ...post,
                title: newTitle,
                imgUrl: newImgUrl,
                content: newContent
            };
        }
        return post;
    });
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
}

function handleEdit(postCard, postId){

}



function savePostsToLocalStorage(posts) {
    // kuwi hore ee localstorage haye ayu ku so celinah
    const existingPosts = getPostsToLocalStorage();
    // ku dar mid cusub .push
    existingPosts.push(posts);
    // kuwi hore+midki cusba all ayu ku diwngalinah
    localStorage.setItem("posts", JSON.stringify(existingPosts));

}

function getPostsToLocalStorage(){
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    return existingPosts;

}