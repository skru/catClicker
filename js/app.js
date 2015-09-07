$(function() {
    var model = {
        cats: {
            'jess': {
                count: 0,
                imgsrc: 'http://www.gordonrigg.com/the-hub/wp-content/uploads/2015/06/little_cute_cat_1920x1080.jpg'
            },
            'mog': {
                count: 0,
                imgsrc: 'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'
            },
            'coolio': {
                count: 0,
                imgsrc: 'http://dreamatico.com/data_images/cat/cat-6.jpg'
            },
            'trumps': {
                count: 0,
                imgsrc: 'http://stylonica.com/wp-content/uploads/2014/04/Cat-Wallpaper.jpg'
            },
            'grrrr': {
                count: 0,
                imgsrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIMDDmRw8GAAGozumauOKrUSAzBIcTbiibOMuOmccKheGi4_VPxg'
            },
            'tubles': {
                count: 0,
                imgsrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHI4IKefbN94RugdzdQqh77jWjSZULfePrWvPnNW3ysbrlHvpc'
            }
        },
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
        addToCount: function(index) {
            model.add(index)
            view.render(index);
        },

        init: function() {
            model.init();
            listview.init();
        },

        showCat: function(index) {
            view.render(index);
        }
    };



    var view = {
        init: function() {
            view.render();
        },
        
        render: function(index) {
            $('#cat-container').empty();
            
            var obj = model.cats[index];
            var box = $('<div/>', {
                id: 'cat' + index,
                text: index,
                class: 'cat-box'
            });

            var img = $('<img />', {
                class: 'cat',
                src: obj.imgsrc,
                alt: index
            });
            img.appendTo(box);

            var counter = $('<div/>', {
                text: obj.count,
            });
            counter.appendTo(box);

            box.appendTo('#cat-container');

            $(box).click(function() {
                octopus.addToCount(index)
                $(counter).text(obj.count)
            });
        }
    };
    var listview = {
        init: function() {
            listview.render();
        },
        render: function() {
            $.each(model.cats, function(index, value) {
                var catlist = $('<li/>', {
                    text: index,
                });
                catlist.appendTo('#cat-list');
                $(catlist).click(function() {
                    octopus.showCat(index);
                });
            });
        }
    };
    octopus.init()
});