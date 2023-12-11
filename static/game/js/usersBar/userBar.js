let userBar = (function(){
    let _publicFunctions = {}
    let groundX = 0;
    let velscene = 1280/3;
    let deltaTime = 0;
    let time = new Date();
    var gameVel = 1;
    
    let _calculateDisplacement = function () {
        return velscene * deltaTime * gameVel;
    }
    let _getOthers = function () { 
        return playerCient.getPlayers().then((res => {
            let otherPlayers = $('#other-players');
            otherPlayers.empty();
            otherPlayers.append(`<span id="ground"></span>`);

            res.forEach(e => _renderOther(e));
        }));
    }
    let _renderOther = function(other){
        let otherPlayers = $('#other-players');
        if (player.getPlayerNumber() == other.number){
            if(other.alive == false){
                
                otherPlayers.append(
                    `
                    <div id="dino${other.number}" class="dino-container its-me dino-dead" style="--i:${50 - ((other.number)*1.2)}%;">
                        <p class="player-number">${other.number}</p>
                        <span class="dino dino-running"></span>
                    </div>
                    `
                );
            }else{
                otherPlayers.append(
                    `
                    <div id="dino${other.number}" class="dino-container its-me" style="--i:${50 - ((other.number)*1.2)}%;">
                        <p class="player-number">${other.number}</p>
                        <span class="dino dino-running"></span>
                    </div>
                    `
                );
            }
        }
        else{
            if(other.alive == false){
                otherPlayers.append(
                    `
                    <div id="dino${other.number}" class="dino-container dino-dead" style="--i:${50 - ((other.number)*1.2)}%;">
                        <p class="player-number">${other.number}</p>
                        <span class="dino dino-running"></span>
                    </div>
                    `
                );
            }
            else{
                otherPlayers.append(
                    `
                    <div id="dino${other.number}" class="dino-container" style="--i:${50 - ((other.number)*1.2)}%;">
                        <p class="player-number">${other.number}</p>
                        <span class="dino dino-running"></span>
                    </div>
                    `
                );
            }
        }
    }
    
    _publicFunctions.moveGround = function () {
        let container = document.querySelector("#other-players");
        let ground = document.querySelector("#ground");
        groundX += _calculateDisplacement();
        ground.style.left = -(groundX % container.clientWidth) + "px";
    }
    _publicFunctions.loop = function(){
        deltaTime = (new Date() - time) / 1000;
        time = new Date();
        _publicFunctions.moveGround();
        requestAnimationFrame(_publicFunctions.loop);
    }
    
    _publicFunctions.addothers = function(){
        _getOthers();
    }
 
    return _publicFunctions;
})();

userBar.loop();