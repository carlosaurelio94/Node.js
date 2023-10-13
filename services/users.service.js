const { faker } = require('@faker-js/faker');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate(limit, offset){
    this.users = []
    for (let index = 0; index < limit; index++) {
      let object = {
        id: faker.string.uuid(),
        name: faker.person.firstName()
      }
      this.users.push(object);
    }
  }

  create(){

  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }

}

module.exports = UsersService
