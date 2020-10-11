var Button = document.getElementById('button');
var SearchValue = document.querySelector('input[name=userName]');
var users;
var html;

function API(userName){
    fetch(`https://api.github.com/users/${userName}`)
    .then(function(response){
        if (!response.ok){
            users = "<p>Nenhum registro encontrado!</p>"
            html = document.getElementById('user').innerHTML = users;
        }else{
            return response.json();
        }
    })
    .then(
        data=>{
            users = 
                `
                    <img src="${data.avatar_url}" alt="Perfil" srcset="">
                    <strong>${data.login}</strong>
                    <p>seguidores: ${data.followers}</p>
                    <p>seguindo: ${data.following}</p>
                    <p>repositorios: ${data.public_repos}</p>
                    <p>Perfil: <a href="${data.html_url}">${data.html_url}</a></p>
                    
                `
                html = document.getElementById('user').innerHTML = users;
    })
}

Button.onclick = function() {
    API(SearchValue.value);
}


