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
    let newItem = document.createElement("img");    
    newItem.src = url;
    newItem.style.position = 'fixed' ;
    newItem.style.left = left ;
    newItem.style.bottom = bottom ;
    document.body.append(newItem);
    return newItem
}

newItems("assets/sword.png",'500px','405px')

/*

let sword = document.createElement("img")
    sword.src="assets/sword.png";
    sword.position = 'fixed';
    sword.left = "500px";
    sword.bottom = "405px";
    document.body.append(sword);

    sword.addEventListener('click',
    function newItem(url, left, bottom){
        let item = 
        sword.remove()
    })

*/
    


