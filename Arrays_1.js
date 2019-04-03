function people() {
    var people = [
        { firstname: "John", lastname: "Smith" },
        { firstname: "Mary", lastname: "Jane" },
        { firstname: "Ajay", lastname: "Singala" }
    ];

    for(var i = 0; i < people.length; i++) {
        alert(people[i].firstname + " " + people[i].lastname);
    }
}

var people = [];
function addPersonToArray(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var person={
        firstname:fname,
        lastname:lname
    };
    people.push(person);
}
function showAll(){
    for(var i=0; i<people.length; i++){
        alert(people[i].firstname+" "+people[i].lastname);
    }
}