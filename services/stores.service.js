const { faker } = require('@faker-js/faker');


class StoresService {

  constructor() {
    this.stores = [];
    this.generate();
  }

  generate(){
    this.stores = [{id: "1", name: 'Caballito', location: 'Caba'}, {id: "2", name: 'Palermo', location: 'Caba'}];
  }

  create(){

  }

  find(){
    return this.stores;
  }

  findOne(id){
    return this.stores.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }

}

module.exports = StoresService
