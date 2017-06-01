/**
 * Created by komar on 5/30/2017.
 */
setTimeout(function () {
    var modal = document.getElementsByClassName('modal');
    for(i = 0; i<modal.length; i++){
        modal[i].classList.add('show');
    }
}, 3000);
document.getElementById('close').addEventListener("click", function () {
    var modal = document.getElementsByClassName('modal');
    for(i = 0; i<modal.length; i++){
        modal[i].classList.remove('show');
    }
});
document.getElementById('submit').addEventListener("click", function () {
   document.getElementById('modal').innerHTML = "<h1 class='modal-title'>THANKS!</h1><a href='#' class='close' id='close'>&times;</a>";
});