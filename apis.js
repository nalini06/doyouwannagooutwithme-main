// apiRequest.js
function sendRequestAndNavigate() {
    // var audio = document.getElementById('yesAudio');
    // audio.play();

    // Send a request to the server
    fetch('http://localhost:3000/api/yes', {
        method: 'GET', // or 'POST' depending on your server's endpoint
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers you may need
        },
        // body is not needed for GET requests
    })


    var audio = document.getElementById('yesAudio');
    audio.play();

    // Navigate to the next page
    window.location.href = "yes.html";
}


function moveButton() {
    var audio = document.getElementById('noAudio');
    audio.play();
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
    fetch('http://localhost:3000/api/no', {
        method: 'GET', // or 'POST' depending on your server's endpoint
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers you may need
        },
        // body is not needed for GET requests
    })

}
