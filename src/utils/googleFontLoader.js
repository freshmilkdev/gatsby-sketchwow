window.addEventListener("load", function(){
    const preConnectAPI = document.createElement('link');
    preConnectAPI.setAttribute('rel', 'preconnect');
    preConnectAPI.setAttribute('href', 'https://fonts.googleapis.com');

    const preConnectCDN = document.createElement('link');
    preConnectCDN.setAttribute('rel', 'preconnect');
    preConnectCDN.setAttribute('href', 'https://fonts.gstatic.com');
    preConnectCDN.setAttribute('crossorigin', '');

    const font = document.createElement('link');
    font.setAttribute('rel', 'stylesheet');
    font.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    document.head.appendChild(font);
});