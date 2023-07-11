const posts = [{title: 'POST1'}];;
 function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post)
            resolve(posts);
        }, 5000)
    }) 
 }

function lastSeen(){
   return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve("Last seen = " + new Date().getTime());
    },1000)
   })
}

Promise.all([createPost({title: 'POST2'}),lastSeen()])
.then(([value,value2])=> {
    console.log(value);
    console.log(value2);
})

