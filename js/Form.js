class Form{
    constructor(){
        
    }



display(){
    var title=createElement("h1")
    title.html("Car Racing Game");
    title.position(130,0);

    var input=createInput("name")
    input.position(130,160);
    var button=createButton("Play")
    button.position(250,200);

    button.mousePressed(function(){
        input.hide()
        button.hide()
        var greeting=createElement("h3")
        var name=input.value();
        greeting.html("Welcome "+name);
        greeting.position(130,160);

        playerCount=playerCount+1
        player.update(name)
        player.updateCount(playerCount);
    })
  
}

}