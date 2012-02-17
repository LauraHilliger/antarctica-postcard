var dropbox = document.querySelector("#front img");

dropbox.addEventListener("dragenter", noOp, false);
dropbox.addEventListener("dragexit", noOp, false);
dropbox.addEventListener("dragover", noOp, false);
dropbox.addEventListener("drop", drop, false);

function noOp(e) {
    e.stopPropagation();
    e.preventDefault();
}

function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files;
    if(files.length > 0) fileList(files);
}

function fileList(selectedFiles) {
    document.querySelector("#front h2").setAttribute("style", "visibility:hidden;")
    dropbox.setAttribute("src", window.URL.createObjectURL(selectedFiles[0]));
}