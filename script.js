function consultar() {
    const userName = document.getElementById("iBuscar").value;

    const request = new XMLHttpRequest();
    
    request.open('GET', `https://api.github.com/users/${userName}`);
    request.send();

    request.onload = function() {
        const perfil_obj = JSON.parse(request.responseText);
        console.log(perfil_obj);
        document.getElementById('name').innerHTML = perfil_obj.name;
        document.getElementById('location').innerHTML = perfil_obj.location;
        document.getElementById('criado_em').innerHTML = perfil_obj.created_at;
        document.getElementById('public_repos').innerHTML = perfil_obj.public_repos;
        document.getElementById('public_gists').innerHTML = perfil_obj.public_gists;
        document.getElementById('followers').innerHTML = perfil_obj.followers;
        document.getElementById('following').innerHTML = perfil_obj.following;
    }
}
