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
            if (!localStorage.catclicker) {
                localStorage.catclicker = JSON.stringify(model.cats);
                console.log('st')
            } else {
                model.cats = JSON.parse(localStorage.catclicker);
              
                console.log(localStorage.catclicker)
            }
        },
        add: function(obj) {
            model.cats[obj].count++;
            localStorage.catclicker = JSON.stringify(model.cats);
        },
    };


    var octopus = {

        init: function() {
            model.init();
            model.currentCat = model.cats[0];
            listView.init();
            view.init();
            adminView.init();
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
            model.currentCat = (model.cats[cat]);
            view.render()
        },

        showAdmin: function() {
            adminView.render();
        },
        
        hideAdmin: function() {
            adminView.hide();
        },
        
        updateCat: function(n,c,i) {
            cat = model.currentCat;
            cat.name = n;
            cat.imgsrc = i;
            cat.count = c;
            view.render();
        }
    };

    var view = {
        init: function() {
            this.catElem = $('#cat-box');
            this.catNameElem = $('#cat-name');
            this.catImageElem = $('#cat-img');
            this.countElem = $('#cat-count');
            this.catImageElem.click(function() {
                octopus.addToCount();
            });

            this.catAdmin = $('#cat-admin');
            this.catAdmin.click(function() {
                octopus.showAdmin();
            });
            this.formCancel = $('#form-cancel');
            $(this.formCancel).click({
                form: this.form,
            },function(e){
                //e.data.form.hide();
                octopus.hideAdmin();
            });
        },

        render: function(index) {
            var currentCat = octopus.getCurrentCat();
            this.catNameElem.text(currentCat.name);
            this.catImageElem.attr("src", currentCat.imgsrc);
            this.countElem.text(currentCat.count);
        }
    };
    
    var listView = {
        init: function() {
            listView.render();
        },
        render: function() {
            $.each(octopus.getCats(), function(cat, value) {
                var catlist = $('<li/>', {
                    text: value.name,
                });
                catlist.appendTo('#cat-list');
                $(catlist).click(function() {
                    octopus.setCurrentCat(cat);
                    adminView.init();
                });
            });
        }
    };
    
    var adminView = {
        init: function() {
            this.formName = $('#form-name');
            this.formCount = $('#form-count');
            this.formSrc = $('#form-imgsrc');
            this.form = $('#formy');
            
            this.form.hide();
            
            
        },
        render: function() {
            this.form.show();
            var currentCat = octopus.getCurrentCat();
            this.formName.val(currentCat.name);
            this.formCount.val(currentCat.count);
            this.formSrc.val(currentCat.imgsrc);
            // passing variable to event
            // preventDefault to stop page reload
            $(this.form).submit({
              form: this.form },
              function(e) {
                octopus.updateCat(
                    $('#form-name').val(),
                    $('#form-count').val(),
                    $('#form-imgsrc').val()
                );
                e.data.form.hide();
                e.preventDefault();
            });
   
        },
        hide: function() {
            this.form.hide();
        }
    };
    octopus.init()
});