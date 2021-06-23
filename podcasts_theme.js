let base_themes = {
    "gpod":{
        "name":"Original",
        "background":"#ffffff",
        "background2":"#f8f9fa",
        "text":"#3c4043",
        "links":"rgb(60, 64, 67)",
        "icons":"#1a73e8"
    },
    "blue_dark":{
        "name":"Blue dark",
        "background":"#272b35",
        "background2":"#181d20",
        "text":"#e3eef9",
        "links":"#606376",
        "icons":"#5675b9"
    },
    "purple_dark":{
        "name":"Purple Dark",
        "background":"#111111",
        "background2":"#181818",
        "text":"#eff0f1",
        "links":"#cccccc",
        "icons":"#ab47bc"
    },
    "orange_dark":{
        "name":"Orange Dark",
        "background":"#0a0400",
        "background2":"#0e0702",
        "text":"#fff9f5",
        "links":"#ffede1",
        "icons":"#ff6905"
    },
    "ubuntu_purple":{
        "name":"Ubuntu Purple",
        "background":"#2c071a",
        "background2":"#430b28",
        "text":"#f2f1ef",
        "links":"#e6e5e3",
        "icons":"#ef7847"
    },
    "ubuntu_gray":{
        "name":"Ubuntu Gray",
        "background":"#312d2a",
        "background2":"#3d3c38",
        "text":"#f2f1ef",
        "links":"#e6e5e3",
        "icons":"#ef7847"
    },
    "neon1":{
        "name":"Neon 1",
        "background":"#00170e",
        "background2":"#1fb598",
        "text":"#bdfff4",
        "links":"#1fb598",
        "icons":"#00b030"
    },
    "neon2":{
        "name":"Neon 2",
        "background":"#10133a",
        "background2":"#1b96f4",
        "text":"#ef0195",
        "links":"#fcdf87",
        "icons":"#f68741"
    }

}
let links;
let icons;
/*
need to get and set LS items so that the theme will be applied on navigation
*/
function buildPreview(theme){

}
function setTheme(theme){
    /*var element = document.createElement('style'),
    sheet;
    document.head.appendChild(element);
    sheet = element.sheet;
    var background = 'body {';
        background += `background-color:${theme.background};`;
        background += '}';
    sheet.insertRule(background, 0);
    var background2 = 'header {';
        background2 += `background-color:${theme.background2};`;
        background2 += '}';
    sheet.insertRule(background2, 1);
    var text = '* {';
        text += `color:${theme.text};`;
        text += '}';
    sheet.insertRule(text,2)
    var links = 'a {';
        links += `color:${theme.links};`;
        links += '}';
    sheet.insertRule(links, 3);*/

    // set background and text color for everything
    document.body.style.backgroundColor = theme.background
    document.body.style.color = theme.text
    // get header
    document.getElementsByTagName("header")[0].style.backgroundColor = theme.background2
    
    // get footer
    document.getElementsByClassName("dq2Yed")[0].style.backgroundColor = theme.background2
    // get footer without google classes
    // footerIamge = document.getElementsByTagName("img")[document.getElementsByTagName("img").length-2]
    // footer = footerIamge.parentElement.parentElement.parentElement.parentElement

    // get buttons marked subscribed
    buttons = [].slice.call(document.getElementsByClassName("xnE3f"));
    buttons.forEach(function(x){
        if(document.defaultView.getComputedStyle(x).visibility == "visible"){
            x.style.backgroundColor = theme.background2
            x.style.borderColor = theme.background2
        }
    })
    

    for (const textNode of getTextNodesIterator(document.body)) {
        textNode.parentElement.style.color = theme.text
    }
    links = [].slice.call(document.getElementsByTagName("a"));
    links.forEach(function(x){
        x.style.color = theme.links
        x.addEventListener("mouseover", function() {
            x.style.color = theme.icons;
        });
        x.addEventListener("mouseout", function() {
            x.style.color = theme.links;
        });
        childrenCount = x.childElementCount
        if(childrenCount > 0){
            for(var i=0;i<childrenCount;i++){
                childStyle = document.defaultView.getComputedStyle(x.children[i])
                if(childStyle.fontFamily.indexOf("\"Material Icons Extended\"") > -1){
                    x.children[i].style.color = theme.icons
                }
            }
        }
    })
    icons = [].slice.call(document.getElementsByTagName("svg"))
    icons.forEach(function(x){
        x.style.color = theme.icons
        x.addEventListener("mouseover", function() {
            x.style.color = theme.links;
        });
        x.addEventListener("mouseout", function() {
            x.style.color = theme.icons;
        });
        /*
        childrenCount = x.childElementCount
        if(childrenCount > 0){
            for(var i=0;i<childrenCount.length;i++){
                x.children[i].style.color = theme.icons
            }
        }
        */
    })

    // hiding line for the small circle buffer
    circlingLines = [].slice.call(document.getElementsByClassName("ifJp6e"))
    circlingLines.forEach(function(x){
        x.style.stroke = "rgba(0,0,0,0)"
    })
    
    
}
function getTextNodesIterator(el) { // Returns an iterable TreeWalker
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    walker[Symbol.iterator] = () => ({
        next() {
            const value = walker.nextNode();
            return {value, done: !value};
        }
    });
    return walker;
}
function revertToBase(){

}
setTheme(base_themes.ubuntu_purple)