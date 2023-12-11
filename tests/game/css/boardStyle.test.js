const styles = require('../../../static/game/css/board.css');

test('should have correct styles', () => {
    const element = document.createElement('div');
    element.id = 'board';
    document.body.appendChild(element);
   
    const element2 = document.getElementById('board');
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.width).toBe('60em');
    expect(computedStyles.height).toBe('17em');
    expect(computedStyles.backgroundImage).toBe('url(/static/game/img/ground.png)');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.zIndex).toBe('2');
    expect(computedStyles.left).toBe('50%');
    expect(computedStyles.transform).toBe('translateX(-50%)');
    expect(computedStyles.border).toBe('2px solid #000000');
    expect(computedStyles.backgroundSize).toBe('cover');
    expect(computedStyles.backgroundRepeat).toBe('repeat');
    expect(computedStyles.backgroundPosition).toBe('center');
    expect(computedStyles.overflow).toBe('hidden');
});
   