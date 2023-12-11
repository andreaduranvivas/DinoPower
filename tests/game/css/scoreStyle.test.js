const styles = require('../../../static/game/css/score.css');

test('should have correct score-container styles', () => {
    const element = document.createElement('div');
    element.className = 'score-container';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('score-container')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.top).toBe('20px');
    expect(computedStyles.transform).toBe('translateX(-50%)');
    expect(computedStyles.textAlignLast).toBe('center');
    expect(computedStyles.fontSize).toBe('50px');
});

test('should have correct player-points styles', () => {
    const element = document.createElement('div');
    element.id = 'player-points';
    document.body.appendChild(element);

    const element2 = document.getElementById('player-points');
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.top).toBe('0%');
    expect(computedStyles.right).toBe('0px');
    expect(computedStyles.textAlignLast).toBe('center');
    expect(computedStyles.fontSize).toBe('1.5em');
    expect(computedStyles.fontFamily).toBe('"Old English Text M"');
    expect(computedStyles.color).toBe('rgb(255, 255, 255)');
    expect(computedStyles.backgroundColor).toBe('rgb(0, 0, 0)');
    expect(computedStyles.boxShadow).toBe('0 0 10px rgba(0, 0, 0, 0.5)');
    expect(computedStyles.borderRadius).toBe('10px');
});
