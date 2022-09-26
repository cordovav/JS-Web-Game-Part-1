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




    


    
