// Creating array of objects(posts), and comment object will inturn be an array of objects(comments)
let defaultThreads = [
    {
        id:1,
        title: "Post Heading",
        author: "User123",
        date: Date.now(),
        content: "Post description",
        count:0,
        comments:[
            {
                author:"Ronnie",
                date: Date.now(),
                content:"Hey there"
            },
            {
                author:"Rohan",
                date: Date.now(),
                content:"Hello!"
            }

        ]
    },
    {
        id:2,
        title: "Post Heading",
        author: "User123",
        date: Date.now(),
        content: "Post description",
        count:0,
        comments:[
            {
                author:"Ronnie",
                date: Date.now(),
                content:"Hey there"
            },
            {
                author:"Rohan",
                date: Date.now(),
                content:"Hello!"
            }

        ]
    }
]

// localStorage.clear();

// assigning default values to our threads(array of objects/JSON)
let threads= defaultThreads;
// checking if local storage is available, if yes then trying to get its value
if(localStorage && localStorage.getItem('threads')){
    threads= JSON.parse(localStorage.getItem('threads')) //local storage can only store strings so we convert it back to JSON array.
}
else{
    threads = defaultThreads;
    localStorage.setItem('threads',JSON.stringify(defaultThreads)) //converting JSON object to strings and storing in local storage under name 'threads'
}



