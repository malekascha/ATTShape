var buttons = document.querySelectorAll('.button');
var titles = document.querySelectorAll('h1');
var texts = document.querySelectorAll('p');
var inputs = document.querySelectorAll('input');
var articles = document.querySelectorAll('article');
var indexArticle = 0;

var tl = new TimelineMax();
newPage();
TweenMax.from(document.querySelector('#logo'), 2, {opacity : 0,delay : 2});

function changePage(event){
    indexArticle += 1;
    var tl = new TimelineMax();
    tl.add(TweenMax.to(window, 1.5, {scrollTo:{x:articles[indexArticle].clientWidth*indexArticle}, ease:Power2.easeOut}));
    newPage();
}

function newPage(){
    tl.add(TweenMax.from(titles[indexArticle], 1, {opacity : 0, top : 400}));
    tl.add(TweenMax.from(texts[indexArticle], 1, {opacity : 0, right : 200}));
    tl.add(TweenMax.from(buttons[indexArticle], 1, {opacity : 0}));
    if(inputs[indexArticle-1]){
        console.log(inputs[indexArticle-1]);
        tl.add(TweenMax.from(inputs[indexArticle-1], 1, {opacity : 0}));
    }
}
