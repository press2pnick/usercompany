const urlUser = 'https://jsonplaceholder.typicode.com/users'
fetch(urlUser).then(function(response) {
    response.json().then(function(data) {
        data.map((value) => { displayUser(value) })
    });
});

function displayUser(user) {
    let div = document.createElement('div');
    div.innerHTML = `<div>#${user.id}. ${user.name}</div>`;
    document.body.append(div);
}

const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
fetch(urlPosts).then(function(response) {
    response.json().then(function(data) {
        data.map((value) => { displayPosts(value) })
    });
});

function displayPosts(post) {
    let div = document.createElement('div');
    div.innerHTML = `<div> <p>Title:${post.title}</p> 
    <p>Body: ${post.body} </p></div>`;
    document.body.append(div);
}