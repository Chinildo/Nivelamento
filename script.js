var userName;
const ajax = new XMLHttpRequest();
const perfil = new XMLHttpRequest();
let perfil_obj;

function consultar() {
    userName = document.getElementById("iBuscar").value;
    ajax.open('GET', 'https://api.github.com/search/users?q=' + userName);
    ajax.send();

    ajax.addEventListener('readystatechange', function() {
        if (ajax.readyState === 4) {
            let resp = JSON.parse(ajax.responseText);
            if (resp.total_count <= 0) {
                console.log("Usuario nao existe");
                return
            }
            perfil.open('GET', resp.items[0].url);
            perfil.send();
        }

    })

    perfil.addEventListener('readystatechange', function() {
        if (perfil.readyState == 4) {
            perfil_obj = JSON.parse(perfil.responseText);
            console.log(perfil_obj);
            document.getElementById('name').innerHTML = perfil_obj.name;
            document.getElementById('location').innerHTML = perfil_obj.location;
            document.getElementById('criado_em').innerHTML = perfil_obj.created_at;
            document.getElementById('public_repos').innerHTML = perfil_obj.public_repos;
            document.getElementById('public_gists').innerHTML = perfil_obj.public_gists;
            document.getElementById('followers').innerHTML = perfil_obj.followers;
            document.getElementById('following').innerHTML = perfil_obj.following;
        }
    })


}