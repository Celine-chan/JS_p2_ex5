let day = prompt('Saisissez un nombre entre 1 et 7 :');

switch (parseInt(day)) {
    case 1:
        alert('Lundi');
        break;
    case 2:
        alert('Mardi');
        break;
    case 3:
        alert('Mercredi');
        break;
    case 4:
        alert('Jeudi');
        break;
    case 5:
        alert('Vendredi');
        break;
    case 6:
        alert('Samedi');
        break;
    case 7:
        alert('Dimanche');
        break;

    default:
        alert('Ce n\'est pas un jour de la semaine');
        break;
}

// ou...

// let day = 6;

// switch (day) {
//     case 1:
//         alert('Lundi');
//         break;
//     case 2:
//         alert('Mardi');
//         break;
//     case 3:
//         alert('Mercredi');
//         break;
//     case 4:
//         alert('Jeudi');
//         break;
//     case 5:
//         alert('Vendredi');
//         break;
//     case 6:
//         alert('Samedi');
//         break;
//     case 7:
//         alert('Dimanche');
//         break;

//     default:
//         alert('Ce n\'est pas un jour de la semaine');
//         break;
// }