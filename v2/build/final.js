/* pós-montagem: ícones e pathLength para o efeito de desenho */
document.querySelectorAll("[data-ico]").forEach((el,i)=>{el.insertAdjacentHTML("afterbegin",icoSvg(el.dataset.ico,el.dataset.icod||i%8))});
function fixPaths(root){(root||document).querySelectorAll(".ico *").forEach(p=>p.setAttribute("pathLength","1"))}
fixPaths();
