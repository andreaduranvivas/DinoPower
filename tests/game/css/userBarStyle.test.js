const styles = require('../../../static/game/css/users-bar.css');

test('should have correct root styles', () => {
    const root = document.documentElement;
    const computedStyles = window.getComputedStyle(root);
   
    expect(computedStyles.getPropertyValue('--standing-dino')).toBe('url(/static/game/img/standing_dino.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--dead-dino')).toBe('url(/static/game/img/dead_dino.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--ground')).toBe('url(/static/game/img/fondo2.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--walking_dino_1')).toBe('url(/static/game/img/walking_titan_1.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--walking_dino_2')).toBe('url(/static/game/img/walking_titan_2.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--crouching_dino_1')).toBe('url(/static/game/img/crouching_titan_1.png) repeat-x 0px 0px');
    expect(computedStyles.getPropertyValue('--crouching_dino_2')).toBe('url(/static/game/img/crouching_titan_2.png) repeat-x 0px 0px');
});
   
test('should have correct other-players styles', () => {
    const element = document.createElement('div');
    element.id = 'other-players';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('other-players');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.display).toBe('inline');
    expect(computedStyles.width).toBe('96%');
    expect(computedStyles.height).toBe('6%');
    expect(computedStyles.position).toBe('fixed');
    expect(computedStyles.bottom).toBe('2%');
    expect(computedStyles.left).toBe('2%');
});

test('should have correct dino-container styles', () => {
    const element = document.createElement('div');
    element.className = 'dino-container';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('dino-container')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.display).toBe('flex');
    expect(computedStyles.flexDirection).toBe('column');
    expect(computedStyles.width).toBe('100px');
    expect(computedStyles.height).toBe('100px');
    expect(computedStyles.position).toBe('relative');
    expect(computedStyles.bottom).toBe('100%');
    expect(computedStyles.left).toBe('');
    expect(computedStyles.float).toBe('left');
});
   
test('should have correct player-number styles', () => {
    const element = document.createElement('div');
    element.className = 'player-number';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('player-number')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.margin).toBe('0px 0px 0px 0px');
    expect(computedStyles.marginTop).toBe('0px');
    expect(computedStyles.alignItems).toBe('center');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.left).toBe('50%');
});
   
test('should have correct dino styles', () => {
    const element = document.createElement('div');
    element.className = 'dino';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('dino')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.width).toBe('100%');
    expect(computedStyles.height).toBe('50%');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.bottom).toBe('30px');
    expect(computedStyles.left).toBe('0px');
    expect(computedStyles.background).toBe('');
    expect(computedStyles.backgroundSize).toBe('cover');
});
   
test('should have correct player styles', () => {
    const element = document.createElement('div');
    element.id = 'player';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('player');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.width).toBe('120px');
    expect(computedStyles.height).toBe('70px');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.bottom).toBe('30px');
    expect(computedStyles.left).toBe('50px');
    expect(computedStyles.background).toBe('');
    expect(computedStyles.backgroundSize).toBe('cover');
});
   
test('should have correct its-me styles', () => {
    const element = document.createElement('div');
    element.className = 'its-me';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('its-me')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.fontWeight).toBe('bold');
    expect(computedStyles.fontSize).toBe('35px');
});
   
test('should have correct dino-jumping styles', () => {
    const element = document.createElement('div');
    element.className = 'dino-jumping';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('dino-jumping')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.animationName).toBe('');
    expect(computedStyles.animationDuration).toBe('');
    expect(computedStyles.animationTimingFunction).toBe('');
});
   
test('should have correct dino-running styles', () => {
    const element = document.createElement('div');
    element.className = 'dino-running';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('dino-running')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.animationName).toBe('');
    expect(computedStyles.animationDuration).toBe('');
    expect(computedStyles.animationTimingFunction).toBe('');
    expect(computedStyles.animationIterationCount).toBe('');
   });
   
test('should have correct titan-running styles', () => {
    const element = document.createElement('div');
    element.className = 'titan-running';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('titan-running')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.animationName).toBe('');
    expect(computedStyles.animationDuration).toBe('');
    expect(computedStyles.animationTimingFunction).toBe('');
    expect(computedStyles.animationIterationCount).toBe('');
});
   
test('should have correct dino-crouching styles', () => {
    const element = document.createElement('div');
    element.className = 'dino-crouching';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('dino-crouching')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.animationName).toBe('');
    expect(computedStyles.animationDuration).toBe('');
    expect(computedStyles.animationTimingFunction).toBe('');
    expect(computedStyles.animationIterationCount).toBe('');
});
   
test('should have correct dino-crash styles', () => {
    const element = document.createElement('div');
    element.className = 'dino-crash';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('dino-crash')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.backgroundPositionX).toBe('-252px');
});
   
test('should have correct dino-dead styles', () => {
    const element = document.createElement('div');
    element.className = 'dino-dead';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('dino-dead')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.transition).toBe('2s');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.left).toBe('0px');
    expect(computedStyles.bottom).toBe('-25px');
});
   
test('should have correct ground styles', () => {
    const element = document.createElement('div');
    element.id = 'ground';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('ground');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.width).toBe('200%');
    expect(computedStyles.height).toBe('150%');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.bottom).toBe('0px');
    expect(computedStyles.left).toBe('0px');
    expect(computedStyles.background).toBe('');
    expect(computedStyles.backgroundSize).toBe('50% 60px');
});
   
   

   