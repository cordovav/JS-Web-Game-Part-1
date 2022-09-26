function newImage(url, left, bottom) {
    let newCharacter = document.createElement("img");    
    newCharacter.src = url;
    newCharacter.style.position = "fixed";
    newCharacter.style.left = "100px";
    newCharacter.style.bottom = "100px";    
    document.body.append(newCharacter);
    return newCharacter
}  

newImage("assets/green-character.gif", 100, 100)
newImage("assets/pine-tree.png", 450, 200)




    


    

