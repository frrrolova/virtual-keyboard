const Keyboard = {

  keysWrapper: null,
  textField: null,
  caps: false,
  lang: 'en',
  engKeysLayout: [[
    { symbol: '`', size: 'small', keyCode: 192, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '1', size: 'small', keyCode: 49, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '2', size: 'small', keyCode: 50, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '3', size: 'small', keyCode: 51, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '4', size: 'small', keyCode: 52, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '5', size: 'small', keyCode: 53, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '6', size: 'small', keyCode: 54, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '7', size: 'small', keyCode: 55, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '8', size: 'small', keyCode: 56, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '9', size: 'small', keyCode: 57, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '0', size: 'small', keyCode: 48, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '-', size: 'small', keyCode: 189, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '=', size: 'small', keyCode: 187, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'Backspace', size: 'big', keyCode: 8, keyElement: null, action: (keyboard) => keyboard.backspaceHandler() }
  ], [
    { symbol: 'Tab', size: 'big', keyCode: 9, keyElement: null },
    { symbol: 'Q', size: 'small', keyCode: 81, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'W', size: 'small', keyCode: 87, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'E', size: 'small', keyCode: 69, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'R', size: 'small', keyCode: 82, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'T', size: 'small', keyCode: 84, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'Y', size: 'small', keyCode: 89, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'U', size: 'small', keyCode: 85, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'I', size: 'small', keyCode: 73, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'O', size: 'small', keyCode: 79, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'P', size: 'small', keyCode: 80, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '[', size: 'small', keyCode: 219, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: ']', size: 'small', keyCode: 221, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '\\', size: 'small', keyCode: 220, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'Del', size: 'big', keyCode: 46, keyElement: null, action: (keyboard) => keyboard.deleteHandler() }
  ], [
    { symbol: 'Caps', size: 'big', keyCode: 20, keyElement: null, action: (keyboard, key) => keyboard.capsHandler.call(keyboard, key) },
    { symbol: {ru: 'Ф', en: 'А'}, size: 'small', keyCode: 65, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'S', size: 'small', keyCode: 83, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'D', size: 'small', keyCode: 68, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'F', size: 'small', keyCode: 70, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'G', size: 'small', keyCode: 71, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'H', size: 'small', keyCode: 72, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'J', size: 'small', keyCode: 74, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'K', size: 'small', keyCode: 75, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'L', size: 'small', keyCode: 76, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: ';', size: 'small', keyCode: 186, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: `'`, size: 'small', keyCode: 222, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'Enter', size: 'big', keyCode: 13, keyElement: null, action: (keyboard) => keyboard.enterHandler() }
  ], [
    { symbol: 'Shift', size: 'big', keyCode: 16, keyElement: null, side: 'left' },
    { symbol: 'Z', size: 'small', keyCode: 90, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'X', size: 'small', keyCode: 88, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'C', size: 'small', keyCode: 67, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'V', size: 'small', keyCode: 86, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'B', size: 'small', keyCode: 66, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'N', size: 'small', keyCode: 78, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'M', size: 'small', keyCode: 77, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: ',', size: 'small', keyCode: 188, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '.', size: 'small', keyCode: 190, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '/', size: 'small', keyCode: 191, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: '⇧', size: 'small', keyCode: 38, keyElement: null },
    { symbol: 'Shift', size: 'big', keyCode: 16, keyElement: null, side: 'right' }
  ], [
    { symbol: 'Ctrl', size: 'big', keyCode: 17, keyElement: null, side: 'left' },
    { symbol: 'Alt', size: 'big', keyCode: 18, keyElement: null, side: 'left' },
    { symbol: ' ', size: 'extra-big', keyCode: 32, keyElement: null, action: (keyboard, key) => keyboard.addChar.call(keyboard, key) },
    { symbol: 'Alt', size: 'big', keyCode: 18, keyElement: null, side: 'right' },
    { symbol: 'Ctrl', size: 'big', keyCode: 17, keyElement: null, side: 'right' },
    { symbol: '⇦', size: 'small', keyCode: 37, keyElement: null, action: (keyboard) => keyboard.leftHandler.call(keyboard) },
    { symbol:  '⇩', size: 'small', keyCode: 40, keyElement: null },
    { symbol:  '⇨', size: 'small', keyCode: 39, keyElement: null, action: (keyboard) => keyboard.rightHandler.call(keyboard) }
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

        let keyDomElement = document.createElement('button');
        keyDomElement.setAttribute('type', 'button');
        keyDomElement.classList.add("keyboard__key", "keyboard__key_" + letter.size);
        if (typeof letter.symbol === 'string') {
          keyDomElement.textContent = letter.symbol;
        } else {
          keyDomElement.textContent = letter.symbol[this.lang];
        }
        letter.keyElement = keyDomElement;

        keyDomElement.addEventListener(
          'mousedown',
          (event) => {
            event.preventDefault();
            letter.keyElement.classList.add("keyboard__key_pressed");

            letter.action(this, letter);
          }

        )

        keyDomElement.addEventListener(
          'mouseup',
          (event) => {
            letter.keyElement.classList.remove("keyboard__key_pressed");
          }
        )

        keyDomElement.addEventListener(
          'mouseout',
          (event) => {
            letter.keyElement.classList.remove("keyboard__key_pressed");
          }
        )

        row.append(keyDomElement);
      })
    })
  },

  initKeyboardEventListeners: function () {

    window.addEventListener(
      'keydown',
      (event) => {
        this.engKeysLayout.forEach((item) => {
          const pressedKey = item.find((letter) => event.keyCode === letter.keyCode);
            pressedKey?.keyElement.classList.add("keyboard__key_pressed"); //добавит класс, если есть pressedKey
        })
      }
    )

    window.addEventListener(
      'keyup',
      (event) => {
        this.engKeysLayout.forEach((item) => {
          const pressedKey = item.find((letter) => event.keyCode === letter.keyCode);
          pressedKey?.keyElement.classList.remove("keyboard__key_pressed");
        })
      }
    )
  },

  backspaceHandler: function () {
    let start = this.textField.selectionStart;
    let end = this.textField.selectionEnd;

    if (start === this.textField.value.length || start === end) {

      this.textField.value = this.textField.value.substring(0, start - 1) + this.textField.value.substring(end, this.textField.value.length);

      this.textField.setSelectionRange(start - 1, end - 1);

    } else {

      this.textField.value = this.textField.value.substring(0, start) + this.textField.value.substring(end, this.textField.value.length);

      this.textField.setSelectionRange(start, start);
    }
  },

  deleteHandler: function () {
    let start = this.textField.selectionStart;
    let end = this.textField.selectionEnd;

    if (start === end) {

      this.textField.value = this.textField.value.substring(0, start) + this.textField.value.substring(end + 1, this.textField.value.length);
    }

    this.textField.value = this.textField.value.substring(0, start) + this.textField.value.substring(end, this.textField.value.length);

    this.textField.setSelectionRange(start, start);
  },

  enterHandler: function () {
    let start = this.textField.selectionStart;
    let end = this.textField.selectionEnd;

    this.textField.value = this.textField.value.substring(0, start) + '\n' + this.textField.value.substring(end, this.textField.value.length);

    this.textField.setSelectionRange(start + 1, start + 1);

  },

  capsHandler: function (key) {

    this.caps = !this.caps;

    key.keyElement.classList.toggle("keyboard__key_caps");

  },

  leftHandler: function () {
    let start = this.textField.selectionStart;

    this.textField.setSelectionRange(start - 1, start - 1);
  },

  rightHandler: function () {
    let start = this.textField.selectionStart;

    this.textField.setSelectionRange(start + 1, start + 1);
  },

  addChar: function (letter) {
    let start = this.textField.selectionStart;
    let end = this.textField.selectionEnd;
    let char = letter.symbol[this.lang];

    this.textField.value = this.textField.value.substring(0, start) + (this.caps ? char : char.toLowerCase()) + this.textField.value.substring(end, this.textField.value.length);
    this.textField.setSelectionRange(start + 1, start + 1);
  }
};

Keyboard.init();

// let a = {};
// a.h = Keyboard.backspaceHandler;
// a.h.call(Keyboard);
// Keyboard.backspaceHandler();
// a.h();