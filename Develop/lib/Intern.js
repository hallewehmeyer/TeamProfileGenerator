// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.github = github;
        this.school = school;
    }

    getName(){
        return this.name;
    }
    getID(){
        return this.ID;
    }
    getEmail(){
        return this.email;
    }
    getSchool(){
        return this.school;
    }
}
module.expert = Intern;