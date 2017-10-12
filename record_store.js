var Record = require("./record");

var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addAlbum = function(record) {
  this.inventory.push(record);
}

RecordStore.prototype.listInventory = function() {
  return this.inventory.map( function(record) {
    return record.logRecord();
  });
}

RecordStore.prototype.sellRecord = function(record) {
  var moneysToAdd = record.price;
  var indexOfRecordToRemove = this.inventory.indexOf(record)

  this.inventory.splice(indexOfRecordToRemove, 1);
  this.balance += moneysToAdd;
}

RecordStore.prototype.getValueOfInventory = function() {
  var valueOfStuff = 0;

  this.inventory.forEach( function(record) {
    valueOfStuff += record.price;
  })
  return valueOfStuff;
}

RecordStore.prototype.reportFinancialSituation = function () {
  var financialSituation = "Store's balance: " + this.balance + ", value of inventory: " + this.getValueOfInventory();
  return financialSituation;
}

RecordStore.prototype.getAlbumsByGenre = function(genre) {
  var matchingGenreArray = this.inventory.filter(function(record) {
    return record.genre === genre
  });
  return matchingGenreArray;
}

module.exports = RecordStore;

var recordStore = new RecordStore("console.log(records)", "Edinburgh");
var record = new Record("Radio Futura", "Escuela de Calor", "Pop Español", 10);
var record2 = new Record("Extremoduro", "Iros todos a tomar por culo", "Rock Español", 5);
recordStore.addAlbum(record);
recordStore.addAlbum(record2);
var a = recordStore.getAlbumsByGenre("Rock Español");
console.log("This is where I call the method", a);
