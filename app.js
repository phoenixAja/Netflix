/**
 * Created by plogan on 11/20/15.
 */


$(".changeTheme").click(function() {
    var img_array = ["photo1.jpg", "photo2.jpg", "Watch-Netflix2.jpg"];
    var i = Math.floor(Math.random()*2);
    $("body").css('background-image',"url("+img_array[i]+")");
});


document.getElementById("changeTheme").click = function() {

}