
function tile(tileSource, leftPosition, bottomPosition, width, height){
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            newImage(tileSource, leftPosition + j * 100, bottomPosition + i * 100);
            }
        }
    }
    


function newImage(imgSource, leftPosition, bottomPosition){
    let img = document.createElement('img')
    img.src = 'assets/' + imgSource
    img.style.position = 'fixed'
    img.style.left = leftPosition + 'px'
    img.style.bottom = bottomPosition + 'px'
    document.body.append(img)
    return img
}

newImage('green-character.gif', 100, 100)
newImage('pine-tree.png', 450, 200)
newImage('tree.png', 200, 300)
newImage('pillar.png', 350, 100)
newImage('crate.png', 150, 200)
newImage('well.png', 500, 425)


function newItem(imgSource, leftPosition, bottomPosition){
    let object = newImage(imgSource, leftPosition, bottomPosition)
    
    object.addEventListener('dblclick', function(){
    object.remove()
})
}

newItem('sword.png', 500, 405)
newItem('sheild.png', 165, 185)
newItem('staff.png', 600, 100)

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

/*

let horizon = window.innerWidth / 1.75;
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;

tile('sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


function newImage(url, left, bottom) {
    let img = document.createElement("img");    
    img.src = url;
    img.style.position = 'fixed';
    img.style.left = left  ;
    img.style.bottom = bottom  ;    
    document.body.append(img);
    return img
}  

newImage("assets/green-character.gif", "100px", "100px")
newImage("assets/pine-tree.png", "450px", "200px")
newImage("assets/tree.png", '200px', '300px')
newImage("assets/pillar.png", '350px', '100px')
newImage("assets/crate.png", '150px', '200px')
newImage("assets/well.png", '500px', '420px')


function newItems(url,left,bottom){
    let newTool = newImage(url, left, bottom);
    document.body.append(newTool);

    newTool.addEventListener('dblclick', () => {
        newTool.remove()
    })
    return newTool
}

    

newItems("assets/sword.png",'500px','405px')
newItems("assets/sheild.png",'165px','185px')
newItems("assets/staff.png",'600px','100px')

function backgroundImages(url){
    let backGround = document.CreateElement('img');
    document.body.append(backGround) = w + h
    

}

let h = innerHeight
let w = innerWidth
backgroundImages("assets/sky.png", '100px','100px')
backgroundImages("assets/grass.png", '100px', '100px')
*/

/*
newItem.addEventListener('click', function(){
    newitem.remove()
})
document.createElement("img");    
    newTool.src = url;
    newItem.style.position = 'fixed' ;
    newTool.style.left = left ;
    newTool.style.bottom = bottom ;
newItem.addEventListener('click',
    function newItem(url, left, bottom){
        let newItem = 
        newItem.remove()




/*let sword = document.createElement("img")
    sword.src="assets/sword.png";
    sword.position = 'fixed';
    sword.left = "500px";
    sword.bottom = "405px";
    document.body.append(sword);*/



/*
let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)



*/