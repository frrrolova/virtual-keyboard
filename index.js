const Keyboard = {

  keysWrapper: null,
  textField: null,
  engKeysLayout: [[
    { symbol: '7', size: 'small', keyCode: 55 },
    { symbol: '8', size: 'small', keyCode: 56 },
    { symbol: '9', size: 'small', keyCode: 57 },
    { symbol: '0', size: 'small', keyCode: 48 },
    { symbol: '-', size: 'small', keyCode: 189 },
    { symbol: '=', size: 'small', keyCode: 187 },
    { symbol: 'backspace', size: 'big', keyCode: 8 }
  ]],

  init: function () {
    this.drawBasicLayout();
    this.drawKeys();
    this.initKeyboardEventListeners();
  },

  drawBasicLayout: function () {
    let container = document.createElement('div');
    let title = document.createElement('h1');
    let textarea = document.createElement('textarea');
    this.textField = textarea;
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
  },

  initKeyboardEventListeners: function () {

    document.body.addEventListener(
      'keydown',
      (event) => {
        this.textField.focus();
        this.engKeysLayout.forEach((item) => {
          const pressedKey = item.find((letter) => event.keyCode === letter.keyCode);
          pressedKey.keyElement.classList.add("keyboard__key_pressed");
        })
      }
    )

    this.textField.addEventListener(
      'keyup',
      (event) => {
        this.engKeysLayout.forEach((item) => {
          const pressedKey = item.find((letter) => event.keyCode === letter.keyCode);
          pressedKey.keyElement.classList.remove("keyboard__key_pressed");
        })
      }
    )
  }
};

Keyboard.init();