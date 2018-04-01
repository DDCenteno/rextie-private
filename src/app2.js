$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})

 var circle1 = document.getElementById('circle1');
console.log(circle1);


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}