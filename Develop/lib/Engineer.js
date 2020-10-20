// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.ID;
    }
    getEmail(){
        return this.email
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }
    
}

module.experts = Engineer;