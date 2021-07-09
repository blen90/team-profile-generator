           // team();


            // newEngineer();
            // newIntern();

            //create boiler plate
            // create html for the card

            //start - put boiler plate html

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let finalHTML = [];

    const startHtml = () => {
    finalHTML +=
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My team</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <!--  Jumbotron with My Team  -->
    <div class="jumbotron text-center">
            <h1 class="display-4">Blenda's team</h1>
        </div>


   `;
                    //cards for employees
                const addEmployee = (answers) => {
                    employeeList.forEach(emp => {
                        finalHtml += `
        <div class="card">
        ${employee.getName}
        ${employee.getId}
        ${employee.getEmail}
        </div>
        `;
                        })


                //Card for manager role
                const addManager = manager => {
                    finalHtml += `
    <div class="team-cards col-9 d-flex justify-content-center">
    <div class="team-card mb-3" style="width: 18rem;">
        <div class="card-header">
            <h2 class="card-name">${manager.getName}</h2>
            <h3 class="card-position"><i class="fas fa-mug-hot">${manager.getRole}</i></h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId}</li>
                <li class="list-group-item">E-mail <a href="mailto:${manager.getEmail}">${manager.getEmail}</a></li>
                <li class="list-group-item">Office number: ${manager.getOffice}</li>
            </ul>
        </div>`;
                };


                //cards for engineer role
                const addEngineer = engineer => {
                    finalHtml += `
    <div class="team-cards col-9 d-flex justify-content-center"></div>
<div class="team-card" style="width: 18rem;">
    <div class="card-header">
        <h2 class="card-name">${engineer.getName}</h2>
        <h3 class="card-position"><i class="fas fa-glasses">${engineer.getRole}</i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId}</li>
            <li class="list-group-item">E-mail <a href="mailto:${engineer.getEmail}">${engineer.getEmail}</a></li>
            <li class="list-group-item">Github<a href="https://github.com/${engineer.getGithub}" target="_blank">${engineer.getGithub}</a></li>
        </ul>
    </div>
    `;
        };
                //card for intern role
                const addIntern = intern => {
                    finalHtml += `
        <div class="team-card" style="width: 18rem;">
    <div class="card-header">
        <h2 class="card-name">${intern.getName}</h2>
        <h3 class="card-position"><i class="fas fa-user-graduate">${intern.getRole}</i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId}</li>
            <li class="list-group-item">E-mail <a href="mailto:${intern.getEmail}">${intern.getEmail}</a></li>
            <li class="list-group-item">School: ${intern.getSchool}</li>
        </ul>
    </div>
        `;
                };
            const endHtml = () => {
            finalHtml +=
                                            `
    </body>
    </html>
    `;
            }
     }
}

// Push functions to empty final Html array
finalHtml.push(startHtml, addEmployee, addManager, addEngineer, addIntern);



// writeHtml function
function writeHtml() {
    fs.writeFile('main.html', writeHtml()), html, err => {
        if(err){
            console.log("err");
        }
        console.log("main.html file created");
    }
}