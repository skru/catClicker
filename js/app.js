$(function(){
    var model = {
        cats : {
        'jess': {count: 0,
            imgsrc:'http://www.gordonrigg.com/the-hub/wp-content/uploads/2015/06/little_cute_cat_1920x1080.jpg'},
        'mog': {count: 0,
            imgsrc:'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'},
        'coolio': {count: 0,
            imgsrc:'http://dreamatico.com/data_images/cat/cat-6.jpg'},
        'trumps': {count: 0,
            imgsrc:'http://stylonica.com/wp-content/uploads/2014/04/Cat-Wallpaper.jpg'},
        'grrrr': {count: 0,
            imgsrc:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIMDDmRw8GAAGozumauOKrUSAzBIcTbiibOMuOmccKheGi4_VPxg'},
        'tubles': {count: 0,
            imgsrc:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHI4IKefbN94RugdzdQqh77jWjSZULfePrWvPnNW3ysbrlHvpc'}
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
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };
    model.init();
   
    $.each( model.cats, function( index, value ){
        
        var box = $('<div/>', {
            text: index,
            class: 'cat-box'
            
        });
        box.css('display','none');
        
        var img = $('<img />', {
            class: 'cat',
            src: value.imgsrc,
            alt: index
        });
        img.appendTo(box);
        
        var counter = $('<div/>', {
            text: value.count,
        });
        counter.appendTo(box);
        
        box.appendTo('#cat-container');
        
        $(box).click( function(){
            var count = $(counter).text()
            count++
            $(counter).text(count)
            //console.log(model.cats[index].count++)
            model.add(index)
        });
      
      
        var catlist = $('<li/>', {
            text: index,
        });
        catlist.appendTo('#cat-list');
        $(catlist).click( function(){
            console.log(index)
            $('.cat-box').css('display','none');
            box.css('display','inline-block');
        });
  
    
  
  
        
    });
});