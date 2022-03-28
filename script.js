function changeName() {
    document.getElementById('name').innerText = "Jimmy";
}


function getridofandcount1() {
    
    var value = document.getElementById("badge").innerHTML;

    console.log(value);

    value--;

    document.getElementById("badge").innerHTML = value;

    document.getElementById("item1").remove();

}

function getridofandcount2() {

    var value = document.getElementById("badge").innerHTML;

    console.log(value);

    value--;

    document.getElementById("badge").innerHTML = value;

    document.getElementById("item2").remove();

}
function addconnect() {
    var value = document.getElementById("connectcount").innerHTML;

    console.log(value);

    value++;

    document.getElementById("connectcount").innerHTML = value;
}