let base_themes = {
    "blue_dark":{
        "name":"Blue dark",
        "id":"blue_dark",
        "background":"#272b35",
        "background2":"#181d20",
        "text":"#e3eef9",
        "links":"#606376",
        "icons":"#5675b9"
    },
    "purple_dark":{
        "name":"Purple Dark",
        "id":"purple_dark",
        "background":"#111111",
        "background2":"#181818",
        "text":"#eff0f1",
        "links":"#cccccc",
        "icons":"#ab47bc"
    },
    "orange_dark":{
        "name":"Orange Dark",
        "id":"orange_dark",
        "background":"#0a0400",
        "background2":"#0e0702",
        "text":"#fff9f5",
        "links":"#ffede1",
        "icons":"#ff6905"
    },
    "ubuntu_purple":{
        "name":"Ubuntu Purple",
        "id":"ubuntu_purple",
        "background":"#2c071a",
        "background2":"#430b28",
        "text":"#f2f1ef",
        "links":"#e6e5e3",
        "icons":"#ef7847"
    },
    "ubuntu_gray":{
        "name":"Ubuntu Gray",
        "id":"ubuntu_gray",
        "background":"#312d2a",
        "background2":"#3d3c38",
        "text":"#f2f1ef",
        "links":"#e6e5e3",
        "icons":"#ef7847"
    },
    "neon1":{
        "name":"Neon 1",
        "id":"neon1",
        "background":"#00170e",
        "background2":"#1fb598",
        "text":"#bdfff4",
        "links":"#1fb598",
        "icons":"#00b030"
    },
    "neon2":{
        "name":"Neon 2",
        "id":"neon2",
        "background":"#10133a",
        "background2":"#1b96f4",
        "text":"#ef0195",
        "links":"#fcdf87",
        "icons":"#f68741"
    },
    "blackNwhite1":{
        "name":"Black & White 1",
        "id":"blackNwhite1",
        "background":"#30302e",
        "background2":"#d6d6d5",
        "text":"#ffffff",
        "links":"#838382",
        "icons":"#595958"
    },
    "blackNwhite2":{
        "name":"Black & White 2",
        "id":"blackNwhite2",
        "background":"#eeeeee",
        "background2":"#d4d1d1",
        "text":"#000000",
        "links":"#858383",
        "icons":"#3e3e3e"
    },
    "Original": {
        "name":"Original",
        "id":"Original",
        "background":"#ffffff",
        "background2":"#f8f9fa",
        "text":"#3c4043",
        "links":"rgb(60, 64, 67)",
        "icons":"#1a73e8"
    }

}
let originalTheme = {
    "name":"Original",
    "id":"Original",
    "background":"#ffffff",
    "background2":"#f8f9fa",
    "text":"#3c4043",
    "links":"rgb(60, 64, 67)",
    "icons":"#1a73e8"
}
let links;
let icons;
let element;
let sheet;
let rule;
let gThemeContainer;
let currentTheme = localStorage.getItem("currentTheme") ? localStorage.getItem("currentTheme") : "original" ;
/*
need to get and set LS items so that the theme will be applied on navigation
*/
function addDiv(){
    gThemeContainer = document.createElement('div');
    gThemeContainer.id = "gThemeContainer";
    for(var i=0;i<Object.keys(base_themes).length;i++){

        theme = base_themes[Object.keys(base_themes)[i]];
        div = document.createElement('div');
        div.classList.add("themeDiv");
        div.style.backgroundColor = theme.background;
        div.style.borderColor = theme.background2;
        div.style.top = `${70 +(45*(i))}px`;
        div.id = Object.keys(base_themes)[i];
        div.value = Object.keys(base_themes)[i];
        div.title = base_themes[Object.keys(base_themes)[i]].name;

        iconDiv = document.createElement('div');
        iconDiv.classList.add("themeIconDiv");
        iconDiv.style.backgroundColor = theme.icons;
        iconDiv.style.top = `${86.5 +(45*(i))}px`;
        iconDiv.title = base_themes[Object.keys(base_themes)[i]].name;
        iconDiv.value = Object.keys(base_themes)[i];

        textDiv = document.createElement('div');
        textDiv.classList.add("themeTextDiv");
        textDiv.style.backgroundColor = theme.text;
        textDiv.style.top = `${86.5 +(45*(i))}px`;
        textDiv.title = base_themes[Object.keys(base_themes)[i]].name;
        textDiv.value = Object.keys(base_themes)[i];

        linkDiv = document.createElement('div');
        linkDiv.classList.add("themeLinkDiv");
        linkDiv.style.backgroundColor = theme.links;
        linkDiv.style.top = `${86.5 +(45*(i))}px`;
        linkDiv.title = base_themes[Object.keys(base_themes)[i]].name;
        linkDiv.value = Object.keys(base_themes)[i];

        div.addEventListener("click", function() {
            setTheme(base_themes[this.value])
            themeDivs = [].slice.call(document.getElementsByClassName("themeDiv"))
            themeDivs.forEach(function(x){
                x.style.boxShadow = "0 0 0 0pt white"
            })
            this.style.boxShadow = "0 0 0 2pt white"
        });
        iconDiv.addEventListener("click", function() {
            setTheme(base_themes[this.value])
        });
        div.append(iconDiv,textDiv,linkDiv)
        gThemeContainer.append(div)
    }
    

    //gThemeContainer.innerHTML = `<p><a href="#">Links</a><br>Text<br><b>Icons</b></p>`

    document.body.appendChild(gThemeContainer)
}
function buildButtons(theme){

}
function setTheme(theme){
    currentTheme = theme.name
    localStorage.setItem("currentTheme",theme.id)
    container = document.getElementById("gThemeContainer");
    container.style.backgroundColor = theme.background
    container.style.borderColor = theme.background2

    elem = document.getElementById("ThemeSheet");
    if(!elem){
        element = document.createElement('style');
        element.id = "ThemeSheet";
        document.head.appendChild(element);
    }else{
        element = document.getElementById("ThemeSheet");
    }
    sheet = element.sheet;
    

    // set background and text color for everything
    document.body.style.backgroundColor = theme.background
    document.body.style.color = theme.text
    // get header
    document.getElementsByTagName("header")[0].style.backgroundColor = theme.background2
    
    // get footer
    if(document.getElementsByClassName("dq2Yed").length > 0){
        document.getElementsByClassName("dq2Yed")[0].style.backgroundColor = theme.background2
    }
    
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
        childrenCount = x.childElementCount
        x.addEventListener("mouseover", function() {
            x.style.color = theme.icons;
            x.childNodes.forEach(function(y){
                if(y.style){y.style.color = theme.icons}
            })
        });
        x.addEventListener("mouseout", function() {
            x.style.color = theme.links;
            x.childNodes.forEach(function(y){
                if(y.style){y.style.color = theme.links}
            })
        });

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
    rule = '.ifJp6e {';
    rule += `stroke:rgba(0,0,0,0);`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 0);


    // unplayed circles fill and stroke, changed from blue stroke and white fill
    unplayedcircles = [].slice.call(document.getElementsByClassName("iIDD2e"))
    unplayedcircles.forEach(function(x){
        x.style.stroke = theme.icons
        x.style.fill = "white"
    })
    rule = '.iIDD2e {';
    rule += `stroke:${theme.icons};`;
    rule += `fill:rgb(255,255,255);`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 1);
    unplayedcirclesIcons = [].slice.call(document.getElementsByClassName("ugRcF"))
    unplayedcirclesIcons.forEach(function(x){
        x.style.fill = theme.icons
    })
    rule = '.ugRcF {';
    rule += `fill:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 2);

    // change colors for episodes not finished yet
    halfUnplayedPartCircles = [].slice.call(document.getElementsByClassName("zbdB4c"))
    halfUnplayedPartCircles.forEach(function(x){
        x.style.stroke = theme.icons

    })
    rule = '.zbdB4c {';
    rule += `stroke:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 3);
    halfPlayedPartCircles = [].slice.call(document.getElementsByClassName("lpZc1c"))
    halfPlayedPartCircles.forEach(function(x){
        x.style.stroke = theme.links
    })
    rule = '.lpZc1c {';
    rule += `stroke:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 4);

    
    // currently playing
    playingLeftLine = [].slice.call(document.getElementsByClassName("aakBI"))
    playingLeftLine.forEach(function(x){
        x.style.stroke = theme.icons
    })
    rule = '.aakBI {';
    rule += `stroke:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 5);

    playingCenterLine = [].slice.call(document.getElementsByClassName("Sygbc"))
    playingCenterLine.forEach(function(x){
        x.style.stroke = theme.icons
    })
    rule = '.Sygbc {';
    rule += `stroke:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 6);

    playingRightLine = [].slice.call(document.getElementsByClassName("aZnmw"))
    playingRightLine.forEach(function(x){
        x.style.stroke = theme.icons
    })
    rule = '.aZnmw {';
    rule += `stroke:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 7);

    // finished episodes
    completeCircleRight = [].slice.call(document.getElementsByClassName("ZRugV"))
    completeCircleRight.forEach(function(x){
        x.style.stroke = theme.links
    })
    rule = '.ZRugV {';
    rule += `stroke:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 8);

    completeCircleLeft = [].slice.call(document.getElementsByClassName("hdW0bf"))
    completeCircleLeft.forEach(function(x){
        x.style.stroke = theme.links
    })
    rule = '.hdW0bf {';
    rule += `stroke:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 9);

    completeCircleIcon = [].slice.call(document.getElementsByClassName("ytTdqd"))
    completeCircleIcon.forEach(function(x){
        x.style.fill = theme.links
    })
    rule = '.ytTdqd {';
    rule += `fill:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 10);    

    // bar icons
    barIcons = [].slice.call(document.getElementsByClassName("DPvwYc"))
    barIcons.forEach(function(x){
        x.style.color = theme.links
    })
    rule = '.DPvwYc {';
    rule += `color:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 11);    

    barSpeeedBackground = [].slice.call(document.getElementsByClassName("Ttr5be"))
    barSpeeedBackground.forEach(function(x){
        x.style.backgroundColor = theme.background
        x.style.borderColor = theme.links
    })
    rule = '.Ttr5be {';
    rule += `background-color:${theme.background};`;
    rule += `border-color:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 12);    

    barSpeeedBackground = [].slice.call(document.getElementsByClassName("Ttr5be"))
    barSpeeedBackground.forEach(function(x){
        x.style.backgroundColor = theme.background
        x.style.borderColor = theme.links
    })
    rule = '.Ttr5be {';
    rule += `background-color:${theme.background};`;
    rule += `border-color:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 12); 

    speedChooserDiv = [].slice.call(document.getElementsByClassName("JPdR6b"))
    speedChooserDiv.forEach(function(x){
        x.style.backgroundColor = theme.background2
        x.style.borderColor = theme.links
    })
    rule = '.JPdR6b {';
    rule += `background-color:${theme.background2};`;
    rule += `border-color:${theme.links};`;
    rule += `color:${theme.text};`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 13); 

    speedChooserDone = [].slice.call(document.getElementsByClassName("TkgSBc"))
    speedChooserDone.forEach(function(x){
        x.style.color = theme.icons
    })
    rule = '.TkgSBc {';
    rule += `color:${theme.icons};`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 14); 

    SelectedSpeedSquare = [].slice.call(document.getElementsByClassName("cL0K1b"))
    speedChooserDone.forEach(function(x){
        x.style.color = theme.icons
        x.style.backgroundColor = theme.background
    })
    rule = '.cL0K1b {';
    rule += `color:${theme.icons};`
    rule += `background-color:${theme.background}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 15); 
    
    SpeedSquares = [].slice.call(document.getElementsByClassName("caxZTb"))
    SpeedSquares.forEach(function(x){
        x.style.color = theme.text
        x.style.backgroundColor = theme.background2
        x.style.borderColor = theme.links
    })
    rule = '.caxZTb {';
    rule += `color:${theme.text};`
    rule += `background-color:${theme.background2}`
    rule += `border-color:${theme.links};`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 16);

    volumeBarBackground = [].slice.call(document.getElementsByClassName("ptC3Le"))
    volumeBarBackground.forEach(function(x){
        x.style.backgroundColor = theme.links
    })
    rule = '.ptC3Le {';
    rule += `background-color:${theme.links}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 17);

    volumeBarForeground = [].slice.call(document.getElementsByClassName("FTnqqe"))
    volumeBarForeground.forEach(function(x){
        x.style.backgroundColor = theme.icons
    })
    rule = '.FTnqqe {';
    rule += `background-color:${theme.icons}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 18);

    volumeBarCircle = [].slice.call(document.getElementsByClassName("kUwJrc"))
    volumeBarCircle.forEach(function(x){
        x.style.backgroundColor = theme.icons
    })
    rule = '.kUwJrc {';
    rule += `background-color:${theme.icons}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 19);

    subscribedCircle = [].slice.call(document.getElementsByClassName("RmrYyf"))
    subscribedCircle.forEach(function(x){
        x.style.backgroundColor = theme.icons
        x.style.color = theme.links
    })
    rule = '.RmrYyf {';
    rule += `background-color:${theme.icons}`
    rule += `color:${theme.links}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 20);

    websiteIcon = [].slice.call(document.getElementsByClassName("L7wSy"))
    websiteIcon.forEach(function(x){
        x.style.color = theme.icons
    })
    rule = '.L7wSy {';
    rule += `color:${theme.icons}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 21);

    // ##################################
    // Unstarted classes
    // ##################################

    unstartedMainPodcastName = [].slice.call(document.getElementsByClassName("FyxyKd"))
    unstartedMainPodcastName.forEach(function(x){
        x.style.color = theme.text
    })
    rule = '.FyxyKd {';
    rule += `color:${theme.text}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 22);
    
    
    unstartedPodcastName = [].slice.call(document.getElementsByClassName("uwjJFd"))
    unstartedPodcastName.forEach(function(x){
        x.style.color = theme.text
    })
    rule = '.uwjJFd {';
    rule += `color:${theme.text}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 23);


    unstartedPodcastDescription = [].slice.call(document.getElementsByClassName("yJLqZc"))
    unstartedPodcastDescription.forEach(function(x){
        x.style.color = theme.text
    })
    rule = '.yJLqZc {';
    rule += `color:${theme.text}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 24);

    subscribeUnstartedPodcast = [].slice.call(document.getElementsByClassName("bPsqDc"))
    subscribeUnstartedPodcast.forEach(function(x){
        x.style.color = theme.icons
    })
    rule = '.bPsqDc {';
    rule += `color:${theme.icons}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 25);

    unstartedPodcastSubheader = [].slice.call(document.getElementsByClassName("ZhPnbc"))
    unstartedPodcastSubheader.forEach(function(x){
        x.style.color = theme.links
    })
    rule = '.ZhPnbc {';
    rule += `color:${theme.links}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 26);

    unstartedLinks = [].slice.call(document.getElementsByClassName("fIqyif"))
    unstartedLinks.forEach(function(x){
        x.style.color = theme.links
    })
    rule = '.fIqyif {';
    rule += `color:${theme.links}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 27);

    unstartedLinks = [].slice.call(document.getElementsByClassName("fIqyif"))
    unstartedLinks.forEach(function(x){
        x.style.color = theme.icons
    })
    rule = '.fIqyif:hover {';
    rule += `color:${theme.icons}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 28);

    unstartedPodcastsTitle = [].slice.call(document.getElementsByClassName("ldf2Je"))
    unstartedPodcastsTitle.forEach(function(x){
        x.style.color = theme.text
    })
    rule = '.ldf2Je {';
    rule += `color:${theme.text}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 29);

    unstartedSubscribedNames = [].slice.call(document.getElementsByClassName("eWeGpe"))
    unstartedSubscribedNames.forEach(function(x){
        x.style.color = theme.links
    })
    rule = '.eWeGpe {';
    rule += `color:${theme.links}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 30);

    unstartedSubscribedAuthorNames = [].slice.call(document.getElementsByClassName("yFWEIe"))
    unstartedSubscribedAuthorNames.forEach(function(x){
        x.style.color = theme.text
    })
    rule = '.yFWEIe {';
    rule += `color:${theme.text}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 31);
    
    unstartedTimer = [].slice.call(document.getElementsByClassName("gUJ0Wc"))
    unstartedTimer.forEach(function(x){
        x.style.color = theme.text
    })
    rule = '.gUJ0Wc {';
    rule += `color:${theme.text}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 31);

    

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
    theme = originalTheme
    currentTheme = "Original"
    localStorage.setItem("currentTheme",theme.id)
    container = document.getElementById("gThemeContainer");
    container.style.backgroundColor = theme.background
    container.style.borderColor = theme.background2

    elem = document.getElementById("ThemeSheet");
    if(!elem){
        element = document.createElement('style');
        element.id = "ThemeSheet";
        document.head.appendChild(element);
        sheet = element.sheet;
    }
    

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
        childrenCount = x.childElementCount
        x.addEventListener("mouseover", function() {
            x.style.color = theme.icons;
            x.childNodes.forEach(function(y){
                if(y.style){y.style.color = theme.icons}
            })
        });
        x.addEventListener("mouseout", function() {
            x.style.color = theme.links;
            x.childNodes.forEach(function(y){
                if(y.style){y.style.color = theme.links}
            })
        });

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
    rule = '.ifJp6e {';
    rule += `stroke:rgba(0,0,0,0);`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 0);


    // unplayed circles fill and stroke, changed from blue stroke and white fill
    unplayedcircles = [].slice.call(document.getElementsByClassName("iIDD2e"))
    unplayedcircles.forEach(function(x){
        x.style.stroke = theme.icons
        x.style.fill = "white"
    })
    rule = '.iIDD2e {';
    rule += `stroke:${theme.icons};`;
    rule += `fill:rgb(255,255,255);`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 1);
    unplayedcirclesIcons = [].slice.call(document.getElementsByClassName("ugRcF"))
    unplayedcirclesIcons.forEach(function(x){
        x.style.fill = theme.icons
    })
    rule = '.ugRcF {';
    rule += `fill:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 2);

    // change colors for episodes not finished yet
    halfUnplayedPartCircles = [].slice.call(document.getElementsByClassName("zbdB4c"))
    halfUnplayedPartCircles.forEach(function(x){
        x.style.stroke = theme.icons

    })
    rule = '.zbdB4c {';
    rule += `stroke:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 3);
    halfPlayedPartCircles = [].slice.call(document.getElementsByClassName("lpZc1c"))
    halfPlayedPartCircles.forEach(function(x){
        x.style.stroke = theme.links
    })
    rule = '.lpZc1c {';
    rule += `stroke:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 4);

    
    // currently playing
    playingLeftLine = [].slice.call(document.getElementsByClassName("aakBI"))
    playingLeftLine.forEach(function(x){
        x.style.stroke = theme.icons
    })
    rule = '.aakBI {';
    rule += `stroke:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 5);

    playingCenterLine = [].slice.call(document.getElementsByClassName("Sygbc"))
    playingCenterLine.forEach(function(x){
        x.style.stroke = theme.icons
    })
    rule = '.Sygbc {';
    rule += `stroke:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 6);

    playingRightLine = [].slice.call(document.getElementsByClassName("aZnmw"))
    playingRightLine.forEach(function(x){
        x.style.stroke = theme.icons
    })
    rule = '.aZnmw {';
    rule += `stroke:${theme.icons};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 7);

    // finished episodes
    completeCircleRight = [].slice.call(document.getElementsByClassName("ZRugV"))
    completeCircleRight.forEach(function(x){
        x.style.stroke = theme.links
    })
    rule = '.ZRugV {';
    rule += `stroke:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 8);

    completeCircleLeft = [].slice.call(document.getElementsByClassName("hdW0bf"))
    completeCircleLeft.forEach(function(x){
        x.style.stroke = theme.links
    })
    rule = '.hdW0bf {';
    rule += `stroke:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 9);

    completeCircleIcon = [].slice.call(document.getElementsByClassName("ytTdqd"))
    completeCircleIcon.forEach(function(x){
        x.style.fill = theme.links
    })
    rule = '.ytTdqd {';
    rule += `fill:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 10);    

    // bar icons
    barIcons = [].slice.call(document.getElementsByClassName("DPvwYc"))
    barIcons.forEach(function(x){
        x.style.color = theme.links
    })
    rule = '.DPvwYc {';
    rule += `color:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 11);    

    barSpeeedBackground = [].slice.call(document.getElementsByClassName("Ttr5be"))
    barSpeeedBackground.forEach(function(x){
        x.style.backgroundColor = theme.background
        x.style.borderColor = theme.links
    })
    rule = '.Ttr5be {';
    rule += `background-color:${theme.background};`;
    rule += `border-color:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 12);    

    barSpeeedBackground = [].slice.call(document.getElementsByClassName("Ttr5be"))
    barSpeeedBackground.forEach(function(x){
        x.style.backgroundColor = theme.background
        x.style.borderColor = theme.links
    })
    rule = '.Ttr5be {';
    rule += `background-color:${theme.background};`;
    rule += `border-color:${theme.links};`;
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 12); 

    speedChooserDiv = [].slice.call(document.getElementsByClassName("JPdR6b"))
    speedChooserDiv.forEach(function(x){
        x.style.backgroundColor = theme.background2
        x.style.borderColor = theme.links
    })
    rule = '.JPdR6b {';
    rule += `background-color:${theme.background2};`;
    rule += `border-color:${theme.links};`;
    rule += `color:${theme.text};`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 13); 

    speedChooserDone = [].slice.call(document.getElementsByClassName("TkgSBc"))
    speedChooserDone.forEach(function(x){
        x.style.color = theme.icons
    })
    rule = '.TkgSBc {';
    rule += `color:${theme.icons};`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 14); 

    SelectedSpeedSquare = [].slice.call(document.getElementsByClassName("cL0K1b"))
    speedChooserDone.forEach(function(x){
        x.style.color = theme.icons
        x.style.backgroundColor = theme.background
    })
    rule = '.cL0K1b {';
    rule += `color:${theme.icons};`
    rule += `background-color:${theme.background}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 15); 
    
    SpeedSquares = [].slice.call(document.getElementsByClassName("caxZTb"))
    SpeedSquares.forEach(function(x){
        x.style.color = theme.text
        x.style.backgroundColor = theme.background2
        x.style.borderColor = theme.links
    })
    rule = '.caxZTb {';
    rule += `color:${theme.text};`
    rule += `background-color:${theme.background2}`
    rule += `border-color:${theme.links};`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 16);

    volumeBarBackground = [].slice.call(document.getElementsByClassName("ptC3Le"))
    volumeBarBackground.forEach(function(x){
        x.style.backgroundColor = theme.links
    })
    rule = '.ptC3Le {';
    rule += `background-color:${theme.links}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 17);

    volumeBarForeground = [].slice.call(document.getElementsByClassName("FTnqqe"))
    volumeBarForeground.forEach(function(x){
        x.style.backgroundColor = theme.icons
    })
    rule = '.FTnqqe {';
    rule += `background-color:${theme.icons}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 18);

    volumeBarCircle = [].slice.call(document.getElementsByClassName("kUwJrc"))
    volumeBarCircle.forEach(function(x){
        x.style.backgroundColor = theme.icons
    })
    rule = '.kUwJrc {';
    rule += `background-color:${theme.icons}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 19);

    subscribedCircle = [].slice.call(document.getElementsByClassName("RmrYyf"))
    subscribedCircle.forEach(function(x){
        x.style.backgroundColor = theme.icons
        x.style.color = theme.links
    })
    rule = '.RmrYyf {';
    rule += `background-color:${theme.icons}`
    rule += `color:${theme.links}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 20);

    websiteIcon = [].slice.call(document.getElementsByClassName("L7wSy"))
    websiteIcon.forEach(function(x){
        x.style.color = theme.icons
    })
    rule = '.L7wSy {';
    rule += `color:${theme.icons}`
    rule += '}';
    document.getElementById("ThemeSheet").sheet.insertRule(rule, 21);

}
addDiv()
document.onload = function(){
    if(localStorage.getItem("currentTheme")){
        currentTheme = localStorage.getItem("currentTheme")
        div = document.getElementById(currentTheme)
        div.style.boxShadow = "0 0 0 2pt white"
        setTheme(base_themes[currentTheme])
    }else{
        revertToBase()
    }
}

window.ontransitionend = function(){
    if(localStorage.getItem("currentTheme")){
        currentTheme = localStorage.getItem("currentTheme")
        div = document.getElementById(currentTheme)
        div.style.boxShadow = "0 0 0 2pt white"
        setTheme(base_themes[currentTheme])
    }else{
        revertToBase()
    }
}

window.onload = function(){
    if(localStorage.getItem("currentTheme")){
        currentTheme = localStorage.getItem("currentTheme")
        div = document.getElementById(currentTheme)
        div.style.boxShadow = "0 0 0 2pt white"
        setTheme(base_themes[currentTheme])
    }else{
        revertToBase()
    }
}