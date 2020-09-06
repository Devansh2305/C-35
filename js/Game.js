class Game{
    constructor(){

    }


    getState(){
        var gameStateref=database.ref("GameState")
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({GameState:state})
    }

    start(){
        if(gameState===0){
            player=new Player();
            player.getCount()
            form=new Form()
            form.dispaly()
        }
    }
}