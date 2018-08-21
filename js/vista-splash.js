/*window.onload=timeout;
function timeout(){
window.setTimeout("redirect()",2000)}

function redirect(){
window.location="../html/vista-principal.html"

return}*/
/* Esta funcion pasa de la vista splash a la vista restaurant en 5 segundos */
$(document).ready(function() {
    setTimeout(function() {
      window.location.assign('../html/vista-principal.html');
    }, 2000);
  });