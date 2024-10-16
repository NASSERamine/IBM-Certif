// Constructeur de l'objet Personne
var Personne = function(fname, lname, birthdate) {
    this.fname = fname;
    this.lname = lname;
    this.birthdate = birthdate;  // Correction ici
}

var members = [];

// Fonction pour soumettre le formulaire
function submitform() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var bdate = document.getElementById('bd').value;
    
    var p = new Personne(fname, lname, bdate);
    
    var exists = members.some(function(member) {
        return member.fname === p.fname && member.lname === p.lname && member.birthdate === p.birthdate;
    });

    if (exists) {
        console.log("Vous êtes déjà enregistré");
        return;
    } else {
        members.push(p);
        console.log("Ajout avec succès !");
    }
    console.log(members);
}

// Fonction pour afficher la liste des membres
function afficherliste() {
    var list = document.getElementById("lista");
    
    // Vider la liste avant de la remplir à nouveau
    list.innerHTML = "";

    // Parcourir les membres et les afficher dans la liste
    for (var i = 0; i < members.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = members[i].fname + " " + members[i].lname + " (" + members[i].birthdate + ")";
        list.appendChild(li);
    }
}
