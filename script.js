function consultar() {
    document.getElementById('loading').style = "opacity:1;"
    const userName = document.getElementById("iBuscar").value;

    const request = new XMLHttpRequest();

    request.open('GET', `https://api.github.com/users/${userName}`);
    request.send();



    request.onload = function() {
        document.getElementById('loading').style = "opacity:0;"
        const perfil_obj = JSON.parse(request.responseText);
        document.getElementById('name').innerHTML += perfil_obj.name;
        document.getElementById('location').innerHTML += perfil_obj.location;
        document.getElementById('criado_em').innerHTML += perfil_obj.created_at;
        document.getElementById('public_repos').innerHTML += perfil_obj.public_repos;
        document.getElementById('public_gists').innerHTML += perfil_obj.public_gists;
        document.getElementById('followers').innerHTML += perfil_obj.followers;
        document.getElementById('following').innerHTML += perfil_obj.following;
        document.getElementById('foto').src = perfil_obj.avatar_url;
        document.getElementById('corpo').style = "opacity: 1;"
        document.getElementById('iBuscar').disabled = true;
    }


}

function limpar() {
    document.getElementById('name').innerHTML = "Nome: ";
    document.getElementById('location').innerHTML = "Localização: ";
    document.getElementById('criado_em').innerHTML = 'Criado em: ';
    document.getElementById('public_repos').innerHTML = 'Repositorios publicos: ';
    document.getElementById('public_gists').innerHTML = 'Gists Publicos:';
    document.getElementById('followers').innerHTML = 'Seguidores: ';
    document.getElementById('following').innerHTML = 'Seguindo: ';
    document.getElementById('foto').src = '';
    document.getElementById('corpo').style = "opacity: 0;"
    document.getElementById('iBuscar').value = ' ';
    document.getElementById('iBuscar').disabled = false;
}