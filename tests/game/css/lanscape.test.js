const styles = require('../../../static/game/css/landscape.css');

test('should have correct body styles', () => {
  const body = document.body;
  const computedStyles = window.getComputedStyle(body);

  expect(computedStyles.background).toBe('url(/static/game/img/paisaje.png) repeat-x fixed center');
  expect(computedStyles.backgroundSize).toBe('cover');
});

test('should have correct contentLandscape styles', () => {
  const element = document.createElement('div');
  element.id = 'contentLandscape';
  document.body.appendChild(element);
 
  const element2 = document.getElementById('contentLandscape');
  const computedStyles = window.getComputedStyle(element2);

  expect(computedStyles.position).toBe('relative');
  expect(computedStyles.zIndex).toBe('1');
  expect(computedStyles.padding).toBe('20px');
  expect(computedStyles.color).toBe('rgb(255, 255, 255)');
  expect(computedStyles.textAlign).toBe('center');
});

test('should have correct buttonNew styles', () => {
  const element = document.createElement('div');
  element.className = 'buttonNew';
  document.body.appendChild(element);
 
  const element2 = document.getElementsByClassName('buttonNew')[0];
  const computedStyles = window.getComputedStyle(element2);

  expect(computedStyles.backgroundColor).toBe('rgb(235, 235, 235)');
  expect(computedStyles.color).toBe('rgb(121, 16, 16)');
  expect(computedStyles.fontFamily).toBe('"Old English Text MT"');
  expect(computedStyles.fontSize).toBe('30px');
  expect(computedStyles.padding).toBe('10px 20px');
  expect(computedStyles.borderRadius).toBe('50px');
  expect(computedStyles.cursor).toBe('pointer');
  expect(computedStyles.position).toBe('fixed');
  expect(computedStyles.top).toBe('50%');
  expect(computedStyles.left).toBe('50%');
  expect(computedStyles.transform).toBe('translate(-50%, -50%)');
  expect(computedStyles.zIndex).toBe('10');
});

test('should have correct game-title styles', () => {
  const element = document.createElement('div');
  element.id = 'game-title';
  document.body.appendChild(element);
 
  const element2 = document.getElementById('game-title');
  const computedStyles = window.getComputedStyle(element2);

  expect(computedStyles.textAlign).toBe('center');
  expect(computedStyles.fontSize).toBe('7.5em');
  expect(computedStyles.margin).toBe('30px');
  expect(computedStyles.color).toBe('black');
  expect(computedStyles.fontWeight).toBe('400');
  expect(computedStyles.textShadow).toBe('5px 5px 15px rgba(0, 0, 0, 0.51)');
  expect(computedStyles.fontFamily).toBe('"Old English Text MT"');
});

test('should have correct player-number styles', () => {
  const element = document.createElement('div');
  element.id = 'player-number';
  document.body.appendChild(element);
 
  const element2 = document.getElementById('player-number');
  const computedStyles = window.getComputedStyle(element2);

  expect(computedStyles.position).toBe('absolute');
  expect(computedStyles.top).toBe('1.5em');
  expect(computedStyles.right).toBe('0px');
  expect(computedStyles.textAlignLast).toBe('center');
  expect(computedStyles.fontSize).toBe('1.5em');
  expect(computedStyles.fontFamily).toBe('"Old English Text M"');
  expect(computedStyles.color).toBe('rgb(255, 255, 255)');
  expect(computedStyles.backgroundColor).toBe('rgb(0, 0, 0)');
  expect(computedStyles.boxShadow).toBe('0 0 10px rgba(0, 0, 0, 0.5)');
  expect(computedStyles.borderRadius).toBe('10px');
});