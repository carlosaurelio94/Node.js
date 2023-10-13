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
    let findById = this.users.find(item => item.id === id);
    if(findById == undefined){
      return {status:404, data:"Id error"};
    } else {
      return {status:202, data:findById};
    }
  }

  update(){

  }

  delete(){

  }

}

module.exports = UsersService
