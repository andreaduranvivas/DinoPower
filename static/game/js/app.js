let app = (function(){
    let _publicFunctions = {};
    let server = environment.local;
    
    let _initialValidation = function(){
        playerCient.getPlayers().then((res => {
            
            if(res.length >= 5){
                alert("La Sala está llena");
                //window.location.href = `${server}/static/index.html`;
                window.location.href = `/static/index.html`;
            }
        }));
    }

    _publicFunctions.init = function(){
        room.init();
    }

    return _publicFunctions;
})();