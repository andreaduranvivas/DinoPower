const styles = require('../../../static/game/css/obstacles.css');

test('should have correct root styles', () => {
    const root = document.documentElement;
    const computedStyles = window.getComputedStyle(root);

    expect(computedStyles.getPropertyValue('--cactus1')).toBe('url(/static/game/img/cactus1.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--cactus2')).toBe('url(/static/game/img/cactus2.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--cactus3')).toBe('url(/static/game/img/cactus3.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--cactus4')).toBe('url(/static/game/img/cactus4.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--cactus5')).toBe('url(/static/game/img/cactus5.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--cactus6')).toBe('url(/static/game/img/cactus6.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--bird1')).toBe('url(/static/game/img/ave1.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--bird2')).toBe('url(/static/game/img/ave2.png) repeat-x 0px 0px');
});

test('should have correct cactus styles', () => {
    const element = document.createElement('div');
    element.className = 'cactus';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('cactus')[0];
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.display).toBe('inline');
    expect(computedStyles.width).toBe('40px');
    expect(computedStyles.height).toBe('80px');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.bottom).toBe('10%');
    expect(computedStyles.left).toBe('100%');
    expect(computedStyles.backgroundSize).toBe('cover');
});

test('should have correct cactus1 styles', () => {
    const element = document.createElement('div');
    element.id = 'cactus1';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('cactus1');
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.background).toBe('');
});

test('should have correct cactus2 styles', () => {
    const element = document.createElement('div');
    element.id = 'cactus2';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('cactus2');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.background).toBe('');
});
   
test('should have correct cactus3 styles', () => {
    const element = document.createElement('div');
    element.id = 'cactus3';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('cactus3');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.background).toBe('');
});

test('should have correct cactus4 styles', () => {
    const element = document.createElement('div');
    element.id = 'cactus4';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('cactus4');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.background).toBe('');
});

test('should have correct cactus5 styles', () => {
    const element = document.createElement('div');
    element.id = 'cactus5';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('cactus5');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.background).toBe('');
});

test('should have correct cactus6 styles', () => {
    const element = document.createElement('div');
    element.id = 'cactus6';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('cactus6');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.background).toBe('');
});
   
test('should have correct bird styles', () => {
    const element = document.createElement('div');
    element.id = 'bird';
    document.body.appendChild(element);

    const element2 = document.getElementById('bird');
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.display).toBe('inline');
    expect(computedStyles.width).toBe('80px');
    expect(computedStyles.height).toBe('60px');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.bottom).toBe('60%');
    expect(computedStyles.left).toBe('100%');
    expect(computedStyles.right).toBe('1px');
    expect(computedStyles.background).toBe('');
    expect(computedStyles.backgroundSize).toBe('cover');
});

test('should have correct cactus-movement styles', () => {
    const element = document.createElement('div');
    element.className = 'cactus-movement';
    document.body.appendChild(element);

    const element2 = document.getElementsByClassName('cactus-movement')[0];
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.animationName).toBe('');
    expect(computedStyles.animationDuration).toBe('');
    expect(computedStyles.animationTimingFunction).toBe('');
    expect(computedStyles.animationIterationCount).toBe('');
});

test('should have correct bird-movement styles', () => {
    const element = document.createElement('div');
    element.className = 'bird-movement';
    document.body.appendChild(element);

    const element2 = document.getElementsByClassName('bird-movement')[0];
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.animationName).toBe('');
    expect(computedStyles.animationDuration).toBe('');
    expect(computedStyles.animationTimingFunction).toBe('');
    expect(computedStyles.animationIterationCount).toBe('');
});

test('should have correct bird-fly styles', () => {
    const element = document.createElement('div');
    element.className = 'bird-fly';
    document.body.appendChild(element);

    const element2 = document.getElementsByClassName('bird-fly')[0];
    const computedStyles = window.getComputedStyle(element2);

    expect(computedStyles.animationName).toBe('');
    expect(computedStyles.animationDuration).toBe('');
    expect(computedStyles.animationTimingFunction).toBe('');
    expect(computedStyles.animationIterationCount).toBe('');
});

