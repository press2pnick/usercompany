const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url).then(function(response) {
    response.json().then(function(data) {
        data.map((value) => { displayUser(value) })
    });
});

function displayUser(user) {
    let div = document.createElement('div');
    div.innerHTML = `<div>#${user.id}. ${user.name}</div>`;
    document.body.append(div);
}