let who = prompt("Who are you ");

if (who === "Admin") {
    let login = prompt("Tell your Password");
    if (login === "TheMaster") {
        alert("Welcome!");
    } else if (login === null) {
        alert("Canceled");
    } else {
        alert("Wrong Password");
    }
} else if (who === null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}
// // let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }