const { faker } = require('@faker-js/faker');


class StoresService {

  constructor() {
    this.stores = [];
    this.generate();
  }

  generate(){
    this.stores = [{id: "1", name: 'Caballito', location: 'Caba'}, {id: "3", name: 'Palermo', location: 'Caba'}];
  }

  create(){

  }

  find(){
    return this.stores;
  }

  findOne(id){
    let findById = this.stores.find(item => item.id === id);
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

module.exports = StoresService
