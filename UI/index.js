const signInButton = document.querySelector('#sign-in-button');
const getStarted = document.querySelectorAll('.getStarted');

class User {
    constructor(name, surname, email){
        _firstName = name;
        _lastName = surname;
        _email = email;
        isMentor = false;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    set firstName(newFirstName){
        this._firstName = newFirstName;
    }

    set lastName(newLastName){
        this._lastName = newLastName;
    }

    userName(){
        return `${this.firstName} ${this.lastName}`;
    }

    signIn(){
        location.href = 'signIn.html';
    }

    signUp(){
        for(let i = 0; i < getStarted.length; i++){
            getStarted[i].addEventListener('click', () => {
                location.href = 'signUp.html';
            });
        }
    }
}

signInButton.addEventListener('click', () => {
    User.signIn();
});

User.signUp();