//EventEmitter

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        setTimeout(() => {
            this.emit ('User logged', data);
        }, 2000);
       
    }
}

const users = new Users();

emitter.on('User logged', data =>{
 console.log(data);
});

Users.userLogged({ user: 'Elaine Souza'});
Users.userLogged({ user: 'Souza Elaine'});

// EventTarget

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        setTimeout(() => {
            this.emit ('User logged', data);
        }, 2000);
       
    }
}

