let day = "";
day = prompt("Enter a day of the week:");
switch (day) {
    case "Monday":
        console.log("Your task for Monday is: Finish your Assignments.");
        break;
    case "Tuesday":
        console.log("Your task for Tuesday is: Finish your Activities.");
        break;
    case "Wednesday":
        console.log("Your task for Wednesday is: Double Check all your Activities .");
        break;
    case "Thursday":
        console.log("Your task for Thursday is: Arrange your Activities.");
        break
    case "Friday":
        console.log("Your task for Friday is: Pass all your Activities .");
        break;
    case "Saturday":
        console.log("Your task for Saturday is: Do the house chores.");
        break;
    case "Sunday":
        console.log("Your task for Sunday is: Me time.");
        break;
    default:
        console.log("No specific task assigned for this day.");
}
