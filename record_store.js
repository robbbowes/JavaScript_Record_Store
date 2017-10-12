var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addAlbum = function(album) {
  this.inventory.push(album);
}

module.exports = RecordStore;
