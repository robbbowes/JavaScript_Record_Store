var Record = function (artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype.logRecord = function() {
  var details = "Artist: " + this.artist + ", Title: " + this.title +
  ", Genre: " + this.genre + ", Price: " + this.price + ". Thanks.";
  return details;
};

module.exports = Record;
