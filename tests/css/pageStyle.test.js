const styles = require('../../static/css/style.css');

test('should have correct universal styles', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    
    const computedStyles = window.getComputedStyle(element);
   
    expect(computedStyles.fontFamily).toBe("'Oswald', sans-serif");
});
   
test('should have correct body styles', () => {
    const element = document.createElement('body');
    document.body.appendChild(element);
    
    const computedStyles = window.getComputedStyle(element);
   
    expect(computedStyles.backgroundImage).toBe('url(/static/game/img/fondoTitan2.png)');
    expect(computedStyles.backgroundSize).toBe('cover');
});
   
test('should have correct game-container styles', () => {
    const element = document.createElement('div');
    element.id = 'game-container';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('game-container');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.alignItems).toBe('center');
    expect(computedStyles.display).toBe('flex');
    expect(computedStyles.flexDirection).toBe('column');
    expect(computedStyles.justifyContent).toBe('center');
    expect(computedStyles.left).toBe('0px');
    expect(computedStyles.position).toBe('absolute');
    expect(computedStyles.right).toBe('0px');
    expect(computedStyles.top).toBe('0px');
});

test('should have correct game-title styles', () => {
    const element = document.createElement('div');
    element.id = 'game-title';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('game-title');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.textAlign).toBe('center');
    expect(computedStyles.fontSize).toBe('7.5em');
    expect(computedStyles.marginTop).toBe('150px');
    expect(computedStyles.color).toBe('black');
    expect(computedStyles.webkitTextFillColor).toBe('');
    expect(computedStyles.webkitTextStroke).toBe('');
    expect(computedStyles.fontWeight).toBe('400');
    expect(computedStyles.textShadow).toBe('5px 5px 15px rgba(0, 0, 0, 0.51)');
    expect(computedStyles.fontFamily).toBe('\"Old English Text MT\"');
});
   
test('should have correct button-join styles', () => {
    const element = document.createElement('button');
    element.className = 'button-join';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('button-join')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.padding).toBe('1em');
    expect(computedStyles.marginLeft).toBe('1em');
    expect(computedStyles.fontSize).toBe('1.1em');
    expect(computedStyles.fontFamily).toBe("'Open Sans', sans-serif");
    expect(computedStyles.textAlign).toBe('center');
    expect(computedStyles.backgroundColor).toBe('rgb(117, 17, 17)');
    expect(computedStyles.boxShadow).toBe('5px 5px 0 0 rgba(0, 0, 0, 0.5)');
    expect(computedStyles.borderRadius).toBe('10px');
    expect(computedStyles.cursor).toBe('pointer');
    expect(computedStyles.transition).toBe('0.5s');
});
   
test('should have correct button-join:hover styles', () => {
    const element = document.createElement('button');
    element.className = 'button-join';
    document.body.appendChild(element);
    
    const element2 = document.getElementsByClassName('button-join')[0];
    const computedStyles = window.getComputedStyle(element2);
   
    element2.classList.add('hover');
   
    expect(computedStyles.backgroundColor).toBe('rgb(117, 17, 17)');
    expect(computedStyles.boxShadow).toBe('5px 5px 0 0 rgba(0, 0, 0, 0.5)');
    expect(computedStyles.color).toBe('white');
});
   
test('should have correct footer styles', () => {
    const element = document.createElement('footer');
    document.body.appendChild(element);
    
    const computedStyles = window.getComputedStyle(element);
   
    expect(computedStyles.display).toBe('block');
    expect(computedStyles.marginTop).toBe('2em');
});
   
test('should have correct author styles', () => {
    const element = document.createElement('div');
    element.id = 'author';
    document.body.appendChild(element);
    
    const element2 = document.getElementById('author');
    const computedStyles = window.getComputedStyle(element2);
   
    expect(computedStyles.color).toBe('rgb(112, 112, 112)');
    expect(computedStyles.fontSize).toBe('16px');
    expect(computedStyles.textShadow).toBe('0 1px 0 rgba(0, 0, 0, 0.623)');
    expect(computedStyles.textAlign).toBe('center');
    expect(computedStyles.fontFamily).toBe("'Open Sans', sans-serif");
});
   