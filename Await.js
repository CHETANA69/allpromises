
const post = async ()=>{
    const posts = [{title: 'POST1'}]; 
 function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post)
            resolve(posts);
        }, 2000)
    }) 
 }

function lastSeen(){
   return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve("Last seen = " + new Date().getTime());
    },1000)
   })
}



    let [post, lastActive, remove] = await Promise.all([createPost({title: 'POST2'}),lastSeen() ])

    console.log(post);
    console.log(lastActive);
    
}

post().then()

