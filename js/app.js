$(function() {
    var model = {
        currentCat: null,
        cats: [
            {
                name: 'jess',
                count: 0,
                imgsrc: 'http://www.gordonrigg.com/the-hub/wp-content/uploads/2015/06/little_cute_cat_1920x1080.jpg'
            },
            {
                name: 'mog',
                count: 0,
                imgsrc: 'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'
            },
            {
                name: 'coolio',
                count: 0,
                imgsrc: 'http://dreamatico.com/data_images/cat/cat-6.jpg'
            },
            {
                name: 'trumps',
                count: 0,
                imgsrc: 'http://stylonica.com/wp-content/uploads/2014/04/Cat-Wallpaper.jpg'
            },
            {
                name: 'grrr',
                count: 0,
                imgsrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIMDDmRw8GAAGozumauOKrUSAzBIcTbiibOMuOmccKheGi4_VPxg'
            },
            {
                name: 'tubles',
                count: 0,
                imgsrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHI4IKefbN94RugdzdQqh77jWjSZULfePrWvPnNW3ysbrlHvpc'
            }
        ],
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify(model.cats);
            } else {
                model.cats = JSON.parse(localStorage.notes);
            }
        },
        add: function(obj) {
            model.cats[obj].count++
                localStorage.notes = JSON.stringify(model.cats);
        },
    };


    var octopus = {
        
        init: function() {
            model.init();
            model.currentCat = model.cats[0];
            listview.init();
            view.init();
        },
        
        addToCount: function() {
            model.currentCat.count++;
            view.render();
        },

        showCat: function(index) {
            view.render(index);
        },
        
        getCurrentCat: function() {
            return model.currentCat;
        },
        
        getCats: function() {
            return model.cats;
        },
        
        setCurrentCat: function(cat) {
          //console.log(cat)
            model.currentCat = (model.cats[cat]);
            view.render()
            
        }
        
        // showAdmin: function(index) {
        //     adminview.render(index);
        // }
    };



    var view = {
        init: function() {
            this.catElem = $('#cat-box');
            this.catNameElem = $('#cat-name');
            this.catImageElem = $('#cat-img');
            this.countElem = $('#cat-count');
            this.catElem.click(function() {
                octopus.addToCount()
            });
        },
        
        render: function(index) {
            var currentCat = octopus.getCurrentCat();
            this.catNameElem.text(currentCat.name);
            this.catImageElem.attr("src", currentCat.imgsrc);
            this.countElem.text(currentCat.count);
            
            
 
            //form
            
            // var adminButton = $('<input/>').attr({
            //     type: "button",
            //     id: "field",
            //     value: 'admin'
            // });
            // //adminButton.appendTo(box);
            // $(adminButton).click(function() {
            //     console.log('jij')
            //     octopus.showAdmin(index);
            // });

            //box.appendTo('#cat-container');

            
            
            
        }
    };
    var listview = {
        init: function() {
            listview.render();
        },
        render: function() {
            $.each(octopus.getCats(), function(cat, value) {
              console.log(value)
                var catlist = $('<li/>', {
                    text: value.name,
                });
                catlist.appendTo('#cat-list');
                $(catlist).click(function() {
                    octopus.setCurrentCat(cat);
                });
            });
        }
    };
    var adminview = {
        init: function() {
            adminview.render();
        },
        render: function(index) {
            console.log(index)
        }
    };
    octopus.init()
});