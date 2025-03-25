let iframe = document.createElement('iframe');
iframe.src = "https://dos.zone/doom-dec-1993/";
iframe.width = "800";  // Largura do iframe (ajuste conforme necessário)
iframe.height = "600"; // Altura do iframe
iframe.style.position = "fixed";
iframe.style.top = "10px";
iframe.style.left = "10px";
iframe.style.zIndex = "9999";
iframe.style.border = "none";

document.body.appendChild(iframe);
