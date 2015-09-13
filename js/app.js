var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('jess');
  this.imgsrc = ko.observable('http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg')
  
  this.nickList = ko.observableArray(
      [
      { name: "Bungle" },
      { name: "George" },
      { name: "Zippy" }
  ])
};




var ViewModel = function() {
  var self = this;
  this.currentCat = ko.observable( new Cat() );
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1)
  };
};

ko.applyBindings(new ViewModel());
