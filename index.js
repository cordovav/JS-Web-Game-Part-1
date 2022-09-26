function newImage(url, left, bottom) {
    let greenCharacter = document.createElement("img");    
    greenCharacter.src = "assets/green-character.gif";
    greenCharacter.style.position = "fixed";
    greenCharacter.style.left = "100px";
    greenCharacter.style.bottom = "100px";    
    document.body.append(greenCharacter);
    return greenCharacter
}  
newImage('assets/green-character.gif', 100, 100)




    


    let pineTree = document.createElement("img");
    pineTree.src = "assets/pine-tree.png";
    pineTree.style.position = "fixed";
    pineTree.style.left = "450px";
    pineTree.style.bottom = "200px";
    document.body.append(pineTree);

