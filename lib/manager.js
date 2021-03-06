const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, position, office){
        super(name, id, email, position)

        this.office  = office;
    }
    getOffice(){
        return this.office
    }
}

module.exports = Manager;