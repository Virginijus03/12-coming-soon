function socials(selector, data){

    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const social of data) {
       console.log(social);
       HTML += `<a href="${social.href}" 
                target="_blank" 
                class="fa fa-${social.icon}"></a>`;
        
    }
    DOM.innerHTML = HTML;
}

export { socials }