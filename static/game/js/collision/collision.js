let collision = (function() {
    let _publicFunctions = {};
    let player = document.getElementById("player");

    let _checkCollisions = function () {
        let cacti = document.querySelectorAll('.cactus');
        let bird = document.getElementById('bird');
        let playerRect = player.getBoundingClientRect();
        let birdRect = bird.getBoundingClientRect();
    
        // Función para manejar la colisión con cactus
        const handleCactusCollision = async () => {
            let collisionDetected = false;
    
            cacti.forEach(cactus => {
                let cactusRect = cactus.getBoundingClientRect();
    
                if (
                    playerRect.right > cactusRect.left &&
                    playerRect.left < cactusRect.right &&
                    playerRect.bottom > cactusRect.top &&
                    playerRect.top < cactusRect.bottom
                ) {
                    console.log("Colisión con cactus!");
                    collisionDetected = true;
                }
            });
    
            if (collisionDetected) {
                dead.init();
            }
        };
    
        // Función para manejar la colisión con el pájaro
        const handleBirdCollision = async () => {
            if (
                playerRect.right > birdRect.left &&
                playerRect.left < birdRect.right &&
                playerRect.bottom > birdRect.top &&
                playerRect.top < birdRect.bottom
            ) {
                console.log("Colisión con bird!");
                dead.init();
            }
        };
    
        // Llamadas asincrónicas para manejar colisiones
        handleCactusCollision();
        handleBirdCollision();
    };    

    _publicFunctions.init = function(){
        _checkCollisions();
        setInterval(_checkCollisions, 100);
    }
    

    return _publicFunctions;
})();
