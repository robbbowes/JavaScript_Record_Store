var Customer = function (name, cash) {
  this.name = name;
  this.cash = cash;
  this.records = [];
}

Customer.prototype.buyRecord = function (record) {
  if (this.cash >= record.price) {
  this.records.push(record);
  this.cash -= record.price;
  }
}

Customer.prototype.sellRecord = function (record) {
  var recordsToKeep = this.records.filter(function( currentRecord) {
    return (currentRecord !== record)
  })
  this.records = recordsToKeep;
  this.cash += record.price;
}

Customer.prototype.getValueOfRecords = function() {
  var valueOfRecords = 0;

  this.records.forEach( function(record) {
    valueOfRecords += record.price;
  })
  return valueOfRecords;
}

Customer.prototype.getValueOfSpecificGenre = function(genre) {
  var matchingGenreArray = this.records.filter(function(record) {
    return record.genre === genre;
  })
  return matchingGenreArray.reduce(function(accum, record) {
    return accum + record.price;
  }, 0)
}

Customer.prototype.getMostValuableRecord = function() {
  var mostValableRecord = this.records[0];
  this.records.forEach(function (record){
    if (record.price > mostValableRecord.price){
      mostValableRecord = record;
    }
  });
  return mostValableRecord;
}

module.exports = Customer;
