$(document).ready(setFirebase);

function setFirebase() {
    var config = {
        apiKey: "AIzaSyC_DFth0P7ZONo5H8LMsV04f9iFmlEwoxQ",
        authDomain: "elmis-81b8f.firebaseapp.com",
        databaseURL: "https://elmis-81b8f.firebaseio.com",
        storageBucket: "elmis-81b8f.appspot.com",
        messagingSenderId: "884585399306"
    };
    firebase.initializeApp(config);
};

function writeUserData(name, email) {
  firebase.database().ref('leads/').push({
    username: name,
    email: email
  });
}

$('#investorForm').submit(function (e) {
    // prevent default submiting form
    e.preventDefault();
    
    ga('send', 'event', 'Buttons', 'click', 'inversion');
    
    var InputName = $("#InputName").val();
    var InputEmail = $("#InputEmail").val();
    writeUserData(InputName, InputEmail);
    
    toastr.success('Gracias nos comunicaremos muy pronto!', $("#InputName").val());
    $("#InputName").val("");
    $("#InputEmail").val("");
    return false;
});