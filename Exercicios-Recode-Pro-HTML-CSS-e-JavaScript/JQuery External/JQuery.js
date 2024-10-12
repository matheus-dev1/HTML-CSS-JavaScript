/*this significa que o evento vai acontecer no proprio elemento. */

$(document).ready(function(){
    $("p, h2").click(function(){
          $(this).hide();
    });
});