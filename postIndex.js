document.addEventListener("DOMContentLoaded", ()=>{

    let allPost = document.querySelector("#allPost")
    let ul = document.querySelector("ul");
    // console.log(allPost)
    allPost.addEventListener("submit", (event)=>{
        event.preventDefault()
        getAllPost()
    })
    const getAllPost = async()=>{
        let response = await axios.get("http://localhost:3000/posts/all")
        let posts = response.data.posts
        ul.innerHTML=""
        posts.forEach(el=>{
            let li = document.createElement("li")
            li.innerText = el.body
            ul.appendChild(li)
        })
    }

    let allPostByUser = document.querySelector("#allPostByUser")
    // console.log(allPostByUser)
    allPostByUser.addEventListener("submit", (event)=>{
        event.preventDefault()
        // debugger
        getAllPostsByUser(event.target.elements[0].value)
    })
    const getAllPostsByUser = async(userID)=>{
        console.log("hello")
        let response = await axios.get(`http://localhost:3000/posts/${userID}`)
        let allPosts =response.data.postsByUser
        ul.innerHTML=""
        allPosts.forEach(el=>{
            let li = document.createElement("li")
            li.innerText = el.body
            ul.appendChild(li)
        })
    }
    
    const getAllUserID = async()=>{
        let response = await axios.get("http://localhost:3000/users/all")
        // debugger
        let user = response.data.users
        let userList = document.querySelector("#userList")
        user.forEach(el=>{
            let option = document.createElement("option")
            option.innerText = el.id
            option.value = el.id
            userList.appendChild(option)
        })
    }

    // event.target.elements[0].value
    
    getAllUserID()


    
})