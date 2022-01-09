// transform small image into big immage

document.getElementById("smart_thumbnail");

let  thumbnailElement = document.getElementById("smart_thumbnail");

thumbnailElement.addEventListener("click", function() {

    if (thumbnailElement.className == ""){
	thumbnailElement.className = "small"}
    else{thumbnailElement.className = ""}
});


