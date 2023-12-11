const styles = require('../../../static/game/css/style.css');


test('should have correct canvas styles', () => {
    const element = document.createElement('canvas');
    element.id = 'canvas';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('canvas');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.display).toBe('block');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.left).toBe('32%');
});

test('should have correct visible-canvas styles', () => {
    const element = document.createElement('canvas');
    element.className = 'visible-canvas';
    document.body.appendChild(element);

    const element2 = document.getElementsByClassName('visible-canvas')[0];
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.border).toBe('2px solid #000000');
});

test('should have correct invisible styles', () => {
    const element = document.createElement('canvas');
    element.className = 'invisible';
    document.body.appendChild(element);

    const element2 = document.getElementsByClassName('invisible')[0];
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.display).toBe('none');
    });

test('should have correct powers-container styles', () => {
    const element = document.createElement('div');
    element.id = 'powers-container';
    document.body.appendChild(element);

    const element2 = document.getElementById('powers-container');
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.margin).toBe('3em');
});

test('should have correct power styles', () => {
    const element = document.createElement('div');
    element.id = 'power';
    document.body.appendChild(element);

    const element2 = document.getElementById('power');
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.top).toBe('50%');
    expect(computedStyles.left).toBe('100px');
    expect(computedStyles.backgroundImage).toBe('url(/static/game/img/speed.png)');
    expect(computedStyles.backgroundSize).toBe('cover');
    expect(computedStyles.width).toBe('6rem');
    expect(computedStyles.height).toBe('6rem');
    expect(computedStyles.borderRadius).toBe('100%');
});

test('should have correct power hover styles', () => {
    const element = document.createElement('div');
    element.id = 'power';
    document.body.appendChild(element);

    const element2 = document.getElementById('power');
    element2.dispatchEvent(new Event('mouseover'));
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.cursor).toBe('pointer');
});
