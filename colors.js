var Links = {
    setColor: function (color){
        var links = document.querySelectorAll('a');
        var i = 0;
        while(i < links.length) {
        links[i].style.color =  color;
        i = i + 1 ;
    }
    }
};

var Body = {
    setColor : function (color) {
    document.querySelector('body').style.color = color;
},
    setBackgroundColor: function (color){
    document.querySelector('body').style.backgroundColor = color;
}
};

function nightDayHandler(self) {
    var target = document.querySelector('body');

    if(self.value === '블랙모드') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '화이트모드';
    
    Links.setColor('white');

    } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = '블랙모드';

    Links.setColor('gray');
    }
};