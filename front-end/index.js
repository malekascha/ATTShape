function sendData(){
    var keywords = [];
    var words = document.getElementById('keywords').value;
    keywords = words.split(',');
    
    var request = new XMLHttpRequest();
    request.open('POST', 'https://api.scriptrapps.io/m2x/postdata?auth_token=STlERTNEN0QyRA==', true);
    request.setRequestHeader("Content-type", "application/xml");
    request.send(words);
}

function getName(){
    var name = document.getElementById('inputName').value;
    document.getElementById('outputName').innerHTML = name;
}