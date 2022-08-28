// SWITCH / CASE

function getWeekDay(weekDay) {
  let weekDayText;

  switch (weekDay) {
    case 0:
      weekDayText = 'Dom';
      return weekDayText;
    case 1:
      weekDayText = 'Seg';
      return weekDayText;
    case 2:
      weekDayText = 'Ter';
      return weekDayText;
    case 3:
      weekDayText = 'Qua';
      return weekDayText;
    case 4:
      weekDayText = 'Qui';
      return weekDayText;
    case 5:
      weekDayText = 'Sex';
      return weekDayText;
    case 6:
      weekDayText = 'Sab';
      return weekDayText;

    default:
      weekDayText = 'Dia inválido';
      return weekDayText;
  }
}

const date = new Date('2003-01-23 12:30:15');
const weekDay = date.getDay();
const weekDayText = getWeekDay(weekDay);
console.log(weekDay, weekDayText)

// swicht normal

// const date = new Date();
// const weekDay = date.getDay();
// let weekDayText;

// switch (weekDay) {
//   case 0:
//     weekDayText = 'Dom';
//     break;
//   case 1:
//     weekDayText = 'Seg';
//     break;
//   case 2:
//     weekDayText = 'Ter';
//     break;
//   case 3:
//     weekDayText = 'Qua';
//     break;
//   case 4:
//     weekDayText = 'Qui';
//     break;
//   case 5:
//     weekDayText = 'Sex';
//     break;
//   case 6:
//     weekDayText = 'Sab';
//     break;

//   default:
//     weekDayText = 'Dia inválido';
//     break;
// }

//console.log(weekDay, weekDayText);
