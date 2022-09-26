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
