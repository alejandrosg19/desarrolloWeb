"use stict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const cargarMasPublicaciones = entry=>{ //Siempre recibe array
    if(entry[0].isIntersecting) cargarPublicaciones(3); //Cantidad de pulicaciones nuevas que se cargan cuando llega al final de la pagina
}

const observer = new IntersectionObserver(cargarMasPublicaciones);

const createPublicationCode = (name, content)=>{
    const container = document.createElement('div');
    const comentarios = document.createElement('div');
    const nombre = document.createElement('h3');
    const contenido = document.createElement('p');
    const btnComentario = document.createElement('input');
    const btnEnviar = document.createElement('input');

    container.classList.add('publicacion')
    comentarios.classList.add('comentarios')
    btnComentario.classList.add('comentario')
    btnEnviar.classList.add('enviar')

    btnEnviar.type = 'submit';

    btnComentario.setAttribute('placeholder', 'Introduce un comentario')
    nombre.textContent = name;
    contenido.textContent = content;

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre)
    container.appendChild(contenido)
    container.appendChild(comentarios)

    return container
}

const cargarPublicaciones = async num=>{
    const request = await fetch("information.txt");
    const result = await request.json();
    const content = result.content;
    const fragment = document.createDocumentFragment();
    
    for(let i=0; i<num; i++){
        if (content[contador] != undefined){
            const newElemento = createPublicationCode(content[contador].nombre, content[contador].contenido);
            fragment.appendChild(newElemento);
            contador++;

            if(i == num-1) observer.observe(newElemento); //Cuando se llegue ala ultima publicación llamara al callback que invocara de nuevo la creación de nuevas publicaciones
        }else{
            if(publicaciones.lastChild.id !== 'noMore'){
                const noMore = document.createElement('H2');
                noMore.textContent = 'No hay mas publicaciones';
                noMore.id = 'noMore';
                fragment.appendChild(noMore)
                break;
            }
        }
    }
    publicaciones.appendChild(fragment);
}

cargarPublicaciones(2);