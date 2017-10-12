var assert = require("assert");
var RecordStore = require("../record_store")
var Record = require("../record")

describe("Record Store", function() {

  var recordStore;
  var record;
  var record2;

  beforeEach( function() {
    recordStore = new RecordStore("console.log(records)", "Edinburgh");
    record = new Record("Radio Futura", "Escuela de Calor", "Pop Español", 10);
    record2 = new Record("Extremoduro", "Iros todos a tomar por culo", "Rock Español", 5);
  });

  it("should have a name", function () {
    assert.strictEqual(recordStore.name, "console.log(records)")
  });

  it("should have a city", function () {
    assert.strictEqual(recordStore.city, "Edinburgh");
  });

  it("should have start with an empty inventory", function () {
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it("should have start with no money", function () {
    assert.strictEqual(recordStore.balance, 0);
  });

  it("can add a record to store", function () {
    recordStore.addAlbum(record);
    assert.strictEqual(recordStore.inventory.length, 1);
  });

  it("should list the inventory", function () {
    recordStore.addAlbum(record);
    recordStore.addAlbum(record);
    assert.deepStrictEqual(recordStore.listInventory(),
     ['Artist: Radio Futura, Title: Escuela de Calor, Genre: Pop Español, Price: 10. Thanks.',
   'Artist: Radio Futura, Title: Escuela de Calor, Genre: Pop Español, Price: 10. Thanks.']);
  });

  it("can sell a record and get moneys 4 it", function () {
    recordStore.addAlbum(record);
    recordStore.addAlbum(record);
    recordStore.sellRecord(record);
    assert.strictEqual(recordStore.inventory.length, 1);
    assert.strictEqual(recordStore.balance, 10);
  });

  it("can get value of inventory", function() {
    recordStore.addAlbum(record);
    recordStore.addAlbum(record);
    recordStore.addAlbum(record);
    recordStore.addAlbum(record);
    assert.strictEqual(recordStore.getValueOfInventory(), 40)
  });

  it("should report the financial situation", function() {
    recordStore.addAlbum(record);
    recordStore.addAlbum(record);
    recordStore.addAlbum(record);
    assert.strictEqual(recordStore.getValueOfInventory(), 30);
    recordStore.sellRecord(record);
    assert.strictEqual(recordStore.reportFinancialSituation(), "Store's balance: 10, value of inventory: 20")
  });

  it("can get album by genre", function() {
    recordStore.addAlbum(record);
    recordStore.addAlbum(record2);
    assert.deepStrictEqual(recordStore.getAlbumsByGenre("Rock Español"), [record2]);
  });

})
