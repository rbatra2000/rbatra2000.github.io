// Get the modals
var modal = document.getElementsByClassName('modal');

// Get the buttons that open the modals
var btn = document.getElementsByClassName("btn");

// Get the <span> elements that closes the modals
var span = document.getElementsByClassName("close");

//This accounts for a specific modal to add opening/closing functionality
function modalFunc(btn,modal,span) {
  btn.addEventListener("click", function(){
    modal.style.display = "block";
  }, false);

  span.addEventListener("click", function(){
    modal.style.display = "none";
    $("iframe").each(function() {
        var src= $(this).attr('src');
        $(this).attr('src',src);
});
  }, false);

}
// Add event listeners to each button
for (var i = 0; i < btn.length; i++) {
  modalFunc(btn[i],modal[i],span[i]);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for (var i = 0; i < modal.length; i++) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
  $("iframe").each(function() {
        var src= $(this).attr('src');
        $(this).attr('src',src);
});
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
