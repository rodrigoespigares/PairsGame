window.onload = () => {
    cards();
    let footer = document.querySelector("footer");
    year = new Date()
    footer.innerHTML=`© ${year.getFullYear()}~${year.getFullYear()+1} Rodrigo Espigares Fernandez`
}