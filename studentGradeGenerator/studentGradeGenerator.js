let marks = prompt("Enter student marks:");
marks = Number(marks);
//A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.
if (marks > 100 || marks< 0){
    console.log("Inavlid input. Enter a number between 0 and 100")
} else if (marks > 79){
    console.log("Grade: A");
} else if (marks >= 60){
    console.log("Grade: B");
} else if (marks >=49){
    console.log("Grade: C");
} else if (marks >= 40){
    console.log("Grade: D");
} else {
    console.log("Grade: E");
}