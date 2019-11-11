function openForum() {
    document.getElementById("sendBox").style.display = "block";
}
function closeForum() {
    document.getElementById("sendBox").style.display = "none";
}

function sendMessage() {
    alert("Message sent!");
    // var text1 = document.getElementById('textarea').value;
}

function grabMessageText() {
    var text = document.getElementById("messageArea").value;
    return text;
}