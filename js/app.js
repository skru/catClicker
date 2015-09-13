// DATA //
var initialCats = [
  {
    clickCount: 0,
    name: 'tabbs',
    imgsrc: 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg',
    nicknames: ['a','b','c']
  },
  {
    clickCount: 0,
    name: 'shnoop',
    imgsrc: 'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    nicknames: ['t','w','4']
  },
  {
    clickCount: 0,
    name: 'doops',
    imgsrc: 'http://static3.businessinsider.com/image/5238c9c5ecad047f12b2751a/internet-famous-grumpy-cat-just-landed-an-endorsement-deal-with-friskies.jpg',
    nicknames: ['r','x','a']
  }
]
// Model //////////////////////////////////////////
var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgsrc = ko.observable(data.imgsrc)
  this.nickList = ko.observableArray(data.nicknames)
};



// ViewModel ///////////////////////////////////////
var ViewModel = function() {
  
  var self = this;
  
  this.catList = ko.observableArray([]);
  
  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem) );
  })
  
  this.currentCat = ko.observable( this.catList()[0]);
  
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1)
  };
  
  changeCat = function(e) {
    self.currentCat(e);
  };
};

ko.applyBindings(new ViewModel());
