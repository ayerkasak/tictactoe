
function getPosts(){
    const dataRecords = localStorage.getItem("posts");
    return dataRecords ? JSON.parse(dataRecords) : [];
}

function savePosts(posts){
    
    localStorage.setItem("posts", JSON.stringify(posts))
}

function updateData(index){

    const posts = getPosts();


    document.getElementById("title").value = posts[index].title;
    document.getElementById("content").value = posts[index].content;


        savePosts(posts);
        showData();
    }


function deleteData(index){

    const posts = getPosts();
    posts.splice(index, 1);   

    savePosts(posts);

    showData();  
}

function showData(){
    const postList = document.getElementById("postList");
    postList.textContent = "";

    const posts = getPosts();

    posts.forEach((post, index) => {
        const div = document.createElement("div");
        div.textContent = post.title + " - " + post.content;

        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";

        deletebtn.addEventListener('click', function(){
            deleteData(index);
        });

        updateBtn.addEventListener('click', function(){
            updateData(index)
        })

        postList.appendChild(div)
        div.appendChild(updateBtn)
        div.appendChild(deletebtn);
       
    });
}

showData();

function handleFormSubmit(event){
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

   const posts = getPosts();
   posts.push({title, content});

   savePosts(posts);

   showData();

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}