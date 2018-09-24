function getAttributes() {
    const anchor = document.getElementById('externo');
    const article = document.querySelector('.article');

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `O elemento ${ anchor.nodeName } possui os seguintes atributos: `;

    const list = document.createElement('ul');
    
    for (let att of anchor.attributes) {
        const item = document.createElement('li');
        item.innerHTML = `${att.nodeName}="${att.value}"`;
        list.appendChild(item);
    }
    
    article.appendChild(paragraph);
    article.appendChild(list);
}

/*
function getAttributes() {
    const $body = document.querySelector( 'body' );
    for (let tag of $body.getElementsByTagName('*')) {
        if (!tag.attributes.length) {
            console.log(`O elemento ${tag.nodeName} não possui atributos!`);
        }
        else {
            console.log( `O elemento ${tag.nodeName} possui os seguintes atributos: ` );
            for (let att of tag.attributes) {
                console.log(att);
            }
        }
    }
}
*/