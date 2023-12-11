let socketSetUp = (function () {  
    let _server = environment.local;
    let _stompClient = null;

    let _publicFunctions = {};

    let _joinRoom = function(eventbody){
        let playerBody = JSON.parse(eventbody.body);
        player.join(playerBody);
    }

    let _sendKeyToServer = function (key) {
        _stompClient.send('/app/sendKey', {}, JSON.stringify({ key }));
    }

    let _connectAndSuscribe = function (){
        console.info('Connecting to WS...');

        let socket = new SockJS(`${_server}/stompendpoint`);
        _stompClient = Stomp.over(socket);

        _stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            _stompClient.subscribe(`/topic/joinGame`, function (eventbody) {
                //_joinRoom(eventbody);
                //userBar.addothers();
                room.updatePlayers();
                
                
            });
            _stompClient.subscribe(`/topic/speedPower`, function (eventbody) {
                let theObject=JSON.parse(eventbody.body);
                powers.hidePowerButton();
                //room.renderPlayerPoints();
            });
            _stompClient.subscribe(`/topic/removePlayer`, function (eventbody) {
                let theObject=JSON.parse(eventbody.body);
                userBar.addothers();
            });

            _stompClient.subscribe(`/topic/deadPlayer`, function (eventbody) {
                let theObject=JSON.parse(eventbody.body);
                userBar.addothers();
            });

            _stompClient.subscribe('/topic/notifyWinner', function (eventbody) {
                let winner = JSON.parse(eventbody.body);
                Swal.fire({
                    title: '¡Hay un ganador!',
                    text: 'Jugador ' + winner.number + ' es el ganador.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        //room.init(); // Reinicia el room después de hacer clic en OK
                        window.location = "/static/index.html"

                    }
                });
            });          

        });
    }
    
    
    let _disconnect = () => {

        _stompClient.disconnect();
    };

    _publicFunctions.connect = function(){
        _connectAndSuscribe();
    };

    _publicFunctions.disconnect = function(){
        _disconnect();
    };

    _publicFunctions.getStompClient = function () {  
        return _stompClient;
    };

    return _publicFunctions;
})();

