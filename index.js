const Keyboard = {

  keysWrapper: null,
  engKeysLayout: [[
    { symbol: '7', size: 'small' },
    { symbol: '8', size: 'small' },
    { symbol: '9', size: 'small' },
    { symbol: '0', size: 'small' },
    { symbol: '-', size: 'small' },
    { symbol: '=', size: 'small' },
    { symbol: 'backspace', size: 'big' }
  ]],

  init: function () {
    this.drawBasicLayout();
    this.drawKeys();
  },

  drawBasicLayout: function () {
    let container = document.createElement('div');
    let title = document.createElement('h1');
    let textarea = document.createElement('textarea');
    let keyboard = document.createElement('div');
    let wrapper = document.createElement('div');
    this.keysWrapper = wrapper;

    container.classList.add("container");
    title.classList.add("title");
    title.textContent = "Keyboard";
    textarea.classList.add("textarea");
    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('name', 'text');
    textarea.setAttribute('cols', '150');
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('placeholder', 'type something');
    textarea.setAttribute('autofocus', '');
    keyboard.classList.add("keyboard");
    wrapper.classList.add("keyboard__wrapper");

    container.append(title, textarea, keyboard);
    keyboard.append(wrapper);

    document.body.append(container);

  },

  drawKeys: function () {
    this.engKeysLayout.forEach((item) => {

      let row = document.createElement('div');
      row.classList.add("keyboard__row");
      this.keysWrapper.append(row);

      item.forEach((letter) => {

        let key = document.createElement('button');
        key.setAttribute('type', 'button');
        key.classList.add("keyboard__key", "keyboard__key_" + letter.size);
        key.textContent = letter.symbol;
        letter.keyElement = key;

        row.append(key);
      })
    })
  }
};

Keyboard.init();