var assert = require("assert");
var Record = require("../record");
var Customer = require("../customer");

describe("Customer", function() {

  var customer;
  var record;
  var record2;

  beforeEach(function() {
    customer = new Customer("Barry the customer", 8)
    record = new Record("Radio Futura", "Escuela de Calor", "Pop Español", 10);
    record2 = new Record("Extremoduro", "Iros todos a tomar por culo", "Rock Español", 5);
  })

  it("should have a name", function () {
    assert.strictEqual(customer.name, "Barry the customer")
  });

  it("should be able to buy albums", function () {
    customer.buyRecord(record2);
    assert.strictEqual(customer.cash, 3);
    assert.deepStrictEqual(customer.records, [record2]);
  });

  it("should be able to sell albums", function () {
    customer.records.push(record);
    customer.records.push(record2);
    customer.sellRecord(record);
    assert.strictEqual(customer.cash, 18);
    assert.deepStrictEqual(customer.records, [record2]);
  });

  it("shouldn't be able to buy album if not enough moneys in pockets", function () {
    customer.buyRecord(record);
    assert.strictEqual(customer.cash, 8);
    assert.strictEqual(customer.records.length, 0);
  });

  it("should be able to get value of records", function () {
    customer.records.push(record);
    customer.records.push(record2);
    assert.strictEqual(customer.getValueOfRecords(), 15);
    assert.deepStrictEqual(customer.records, [record, record2]);
  });

  it("should be able to get value of specific genre", function () {
    customer.records.push(record);
    customer.records.push(record2);
    customer.records.push(record);
    customer.records.push(record2);
    assert.strictEqual(customer.getValueOfRecords(), 30);
    assert.strictEqual(customer.getValueOfSpecificGenre("Rock Español"), 10);
  });

  it("should be able to get most valuable record", function () {
    customer.records.push(record);
    customer.records.push(record2);
    customer.records.push(record);
    assert.strictEqual(customer.getValueOfRecords(), 25);
    assert.strictEqual(customer.getMostValuableRecord(), record);
  });

  


})
