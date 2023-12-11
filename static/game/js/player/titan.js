let titan = (function() {

    let _publicFunctions = {};
    let isJumping = false;
    let titan = document.getElementById("player");

    _publicFunctions.keydown = function () { 
        document.addEventListener("keydown", function (event) {
            let key = event.key;
    
            if (!isJumping) {
                if (key === "ArrowUp" || key === " ") {
                    titan.classList.remove("titan-running");
                    titan.classList.add("dino-jumping");
                    isJumping = true;
                } else if (key === "ArrowDown") {
                    titan.classList.remove("titan-running");
                    titan.classList.remove("dino-jumping");
                    titan.classList.add("dino-crouching");
                }
            }
    
            //console.log("Ph")
        });
    }


    _publicFunctions.keyup = function () { 
        document.addEventListener("keyup", function (event) {
            let key = event.key;
            
            if (key === "ArrowUp" || key === " ") {
                isJumping = false;
                titan.classList.add("titan-running")
                titan.classList.remove("dino-jumping");
            } else if (key === "ArrowDown") {
                titan.classList.remove("dino-crouching");
                titan.classList.add("titan-running")
            }
    
        });
    }


    _publicFunctions.init = function(){
        _publicFunctions.keydown();
        _publicFunctions.keyup();
    }

    return _publicFunctions
})();