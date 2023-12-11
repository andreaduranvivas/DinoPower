const board =  require('../../../../static/game/js/backgroundAndEnemies/board');
const styles = require('../../../../static/game/css/style.css');

test('should remove class "invisible" from board element', () => {
 let boardElement = document.createElement('div');
 boardElement.id = 'board';
 boardElement.classList.add("invisible");
 document.body.appendChild(boardElement);

 board.init();

 expect(boardElement.classList.contains('invisible')).toBe(false);
});