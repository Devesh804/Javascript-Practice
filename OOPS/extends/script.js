class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    checkRole() {
        return `you are a ${this.role}`;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "admin";
    }

    remove() {
        document.querySelectorAll.forEach(function(elem) {
            elem.remove();
        });
    }
}

let u1 = new User("Harsh", "Bhopal", "async123", "heyhey@gmail.com");
let u2 = new User("Harshita", "Delhi", "harshitaaa", "harshita@gmail.com");
let a1 = new Admin("Admin1", "Mumbai", "adminn", "admin1@gmail.com");



// HERE, we have created two classes -  userr and admin.
// also, we have methods write() and remove() which we can use in any onbject. 

// extends ki help se hum kisi dusri class ke properties use kar skrte hn. 
// like yaha, admin, user class ki property ka use kr skta hai
// check image.png 