const styles = require('../../../static/game/css/gameover.css');

test('should have correct styles', () => {
   const element = document.createElement('div');
   element.id = 'gameOver';
   document.body.appendChild(element);
  
   const element2 = document.getElementById('gameOver');
   const computedStyles = window.getComputedStyle(element2);

   expect(computedStyles.position).toBe('absolute');
   expect(computedStyles.top).toBe('135%');
   expect(computedStyles.left).toBe('50%');
   expect(computedStyles.width).toBe('25em');
   expect(computedStyles.height).toBe('12em');
   expect(computedStyles.backgroundSize).toBe('contain');
   expect(computedStyles.zIndex).toBe('3');
   expect(computedStyles.backgroundPosition).toBe('center');
   expect(computedStyles.pointerEvents).toBe('none');
   expect(computedStyles.backgroundImage).toBe('url(/static/game/img/gameOver.jpg)');
});
