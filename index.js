const Keyboard = {

  keysWrapper: null,
  textField: null,
  caps: false,
  shift: false,
  ctrl: false,
  alt: false,
  specialSymbol: '',
  lang: 'en',
  downTimerId: null,
  upTimerId: null,
  keysLayout: [
    [
      {
        symbol: {ru: {main: 'ё', alt: 'Ё'}, en: {main: '`', alt: '~'}},
        size: 'small',
        keyCode: 'Backquote',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '1', alt: '!'}, en: {main: '1', alt: '!'}},
        size: 'small',
        keyCode: 'Digit1',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '2', alt: '"'}, en: {main: '2', alt: '@'}},
        size: 'small',
        keyCode: 'Digit2',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '3', alt: '№'}, en: {main: '3', alt: '#'}},
        size: 'small',
        keyCode: 'Digit3',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '4', alt: ';'}, en: {main: '4', alt: '$'}},
        size: 'small',
        keyCode: 'Digit4',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '5', alt: '%'}, en: {main: '5', alt: '%'}},
        size: 'small',
        keyCode: 'Digit5',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '6', alt: ':'}, en: {main: '6', alt: '^'}},
        size: 'small',
        keyCode: 'Digit6',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '7', alt: '?'}, en: {main: '7', alt: '&'}},
        size: 'small',
        keyCode: 'Digit7',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '8', alt: '*'}, en: {main: '8', alt: '*'}},
        size: 'small',
        keyCode: 'Digit8',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '9', alt: '('}, en: {main: '9', alt: '('}},
        size: 'small',
        keyCode: 'Digit9',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '0', alt: ')'}, en: {main: '0', alt: ')'}},
        size: 'small',
        keyCode: 'Digit0',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '-', alt: '_'}, en: {main: '-', alt: '_'}},
        size: 'small',
        keyCode: 'Minus',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '=', alt: '+'}, en: {main: '=', alt: '+'}},
        size: 'small',
        keyCode: 'Equal',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Backspace',
        size: 'big',
        keyCode: 'Backspace',
        keyElement: null,
        downAction: (keyboard) => keyboard.backspaceHandler() }
    ],
    [
      {
        symbol: 'Tab',
        size: 'big',
        keyCode: 'Tab',
        keyElement: null,
        downAction: (keyboard) => keyboard.tabHandler() },
      {
        symbol: {ru: {main: 'й', alt: 'Й'}, en: {main: 'q', alt: 'Q'}},
        size: 'small',
        keyCode: 'KeyQ',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ц', alt: 'Ц'}, en: {main: 'w', alt: 'W'}},
        size: 'small',
        keyCode: 'KeyW',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'у', alt: 'У'}, en: {main: 'e', alt: 'E'}},
        size: 'small',
        keyCode: 'KeyE',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'к', alt: 'К'}, en: {main: 'r', alt: 'R'}},
        size: 'small',
        keyCode: 'KeyR',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'е', alt: 'Е'}, en: {main: 't', alt: 'T'}},
        size: 'small',
        keyCode: 'KeyT',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'н', alt: 'Н'}, en: {main: 'y', alt: 'Y'}},
        size: 'small',
        keyCode: 'KeyY',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'г', alt: 'Г'}, en: {main: 'u', alt: 'U'}},
        size: 'small',
        keyCode: 'KeyU',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ш', alt: 'Ш'}, en: {main: 'i', alt: 'I'}},
        size: 'small',
        keyCode: 'KeyI',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'щ', alt: 'Щ'}, en: {main: 'o', alt: 'O'}},
        size: 'small',
        keyCode: 'KeyO',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'з', alt: 'З'}, en: {main: 'p', alt: 'P'}},
        size: 'small',
        keyCode: 'KeyP',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'х', alt: 'Х'}, en: {main: '[', alt: '{'}},
        size: 'small',
        keyCode: 'BracketLeft',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ъ', alt: 'Ъ'}, en: {main: ']', alt: '}'}},
        size: 'small',
        keyCode: 'BracketRight',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '\\', alt: '/'}, en: {main: '\\', alt: '|'}},
        size: 'small',
        keyCode: 'Backslash',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Del',
        size: 'big',
        keyCode: 'Delete',
        keyElement: null,
        downAction: (keyboard) => keyboard.deleteHandler() }
    ],
    [
      {
        symbol: 'Caps',
        size: 'big',
        keyCode: 'CapsLock',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.capsHandler.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ф', alt: 'Ф'}, en: {main: 'a', alt: 'A'}},
        size: 'small',
        keyCode: 'KeyA',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ы', alt: 'Ы'}, en: {main: 's', alt: 'S'}},
        size: 'small',
        keyCode: 'KeyS',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'в', alt: 'В'}, en: {main: 'd', alt: 'D'}},
        size: 'small',
        keyCode: 'KeyD',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'а', alt: 'А'}, en: {main: 'f', alt: 'F'}},
        size: 'small',
        keyCode: 'KeyF',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'п', alt: 'П'}, en: {main: 'g', alt: 'G'}},
        size: 'small',
        keyCode: 'KeyG',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'р', alt: 'Р'}, en: {main: 'h', alt: 'H'}},
        size: 'small',
        keyCode: 'KeyH',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'о', alt: 'О'}, en: {main: 'j', alt: 'J'}},
        size: 'small',
        keyCode: 'KeyJ',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'л', alt: 'Л'}, en: {main: 'k', alt: 'K'}},
        size: 'small',
        keyCode: 'KeyK',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'д', alt: 'Д'}, en: {main: 'l', alt: 'L'}},
        size: 'small',
        keyCode: 'KeyL',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ж', alt: 'Ж'}, en: {main: ';', alt: ':'}},
        size: 'small',
        keyCode: 'Semicolon',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'э', alt: 'Э'}, en: {main: `'`, alt: '"'}},
        size: 'small',
        keyCode: 'Quote',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Enter',
        size: 'big',
        keyCode: 'Enter',
        keyElement: null,
        downAction: (keyboard) => keyboard.enterHandler() }
    ],
    [
      {
        symbol: 'Shift',
        size: 'big',
        keyCode: 'ShiftLeft',
        keyElement: null,
        side: 'left',
        downAction: (keyboard, key) => keyboard.shiftHandler.call(keyboard, key),
        upAction: (keyboard, key) => keyboard.shiftHandler.call(keyboard, key),
        dobleClickAction: (keyboard, key) => keyboard.shiftHandler.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'я', alt: 'Я'}, en: {main: 'z', alt: 'Z'}},
        size: 'small',
        keyCode: 'KeyZ',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ч', alt: 'Ч'}, en: {main: 'x', alt: 'X'}},
        size: 'small',
        keyCode: 'KeyX',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'с', alt: 'С'}, en: {main: 'c', alt: 'C'}},
        size: 'small',
        keyCode: 'KeyC',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'м', alt: 'М'}, en: {main: 'v', alt: 'V'}},
        size: 'small',
        keyCode: 'KeyV',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'и', alt: 'И'}, en: {main: 'b', alt: 'B'}},
        size: 'small',
        keyCode: 'KeyB',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'т', alt: 'Т'}, en: {main: 'n', alt: 'N'}},
        size: 'small',
        keyCode: 'KeyN',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ь', alt: 'Ь'}, en: {main: 'm', alt: 'M'}},
        size: 'small',
        keyCode: 'KeyM',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'б', alt: 'Б'}, en: {main: ',', alt: '<'}},
        size: 'small',
        keyCode: 'Comma',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ю', alt: 'Ю'}, en: {main: '.', alt: '>'}},
        size: 'small',
        keyCode: 'Period',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '.', alt: ','}, en: {main: '/', alt: '?'}},
        size: 'small',
        keyCode: 'Slash',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Shift',
        size: 'big',
        keyCode: 'ShiftRight',
        keyElement: null, side: 'right',
        downAction: (keyboard, key) => keyboard.shiftHandler.call(keyboard, key),
        upAction: (keyboard, key) => keyboard.shiftHandler.call(keyboard, key),
        dobleClickAction: (keyboard, key) => keyboard.shiftHandler.call(keyboard, key)
      },
      {
        symbol: '⇧',
        size: 'small',
        keyCode: 'ArrowUp',
        keyElement: null
      }
    ],
    [
      {
        symbol: 'Ctrl',
        size: 'big',
        keyCode: 'ControlLeft',
        keyElement: null,
        side: 'left',
        downAction: (keyboard, key) => keyboard.ctrlHandler.call(keyboard, key),
        upAction: (keyboard, key) => keyboard.ctrlHandler.call(keyboard, key),
        dobleClickAction: (keyboard, key) => keyboard.ctrlHandler.call(keyboard, key)
      },
      {
        symbol: 'Alt',
        size: 'big',
        keyCode: 'AltLeft',
        keyElement: null,
        side: 'left',
        downAction: (keyboard, key) => keyboard.altHandler.call(keyboard, key),
        upAction: (keyboard, key) => keyboard.altHandler.call(keyboard, key),
        dobleClickAction: (keyboard, key) => keyboard.altHandler.call(keyboard, key)
      },
      {
        symbol: {ru: {main: ' ', alt: ' '}, en: {main: ' ', alt: ' '}},
        size: 'extra-big',
        keyCode: 'Space',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Alt',
        size: 'big',
        keyCode: 'AltRight',
        keyElement: null, side: 'right' },
      {
        symbol: 'Ctrl',
        size: 'big',
        keyCode: 'ControlRight',
        keyElement: null, side: 'right' },
      {
        symbol: '⇦',
        size: 'small',
        keyCode: 'ArrowLeft',
        keyElement: null,
        downAction: (keyboard) => keyboard.leftHandler.call(keyboard) },
      {
        symbol: '⇩',
        size: 'small',
        keyCode: 'ArrowDown',
        keyElement: null },
      {
        symbol: '⇨',
        size: 'small',
        keyCode: 'ArrowRight',
        keyElement: null,
        downAction: (keyboard) => keyboard.rightHandler.call(keyboard) }
    ]
  ],

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
    this.keysLayout.forEach((item) => {

      let row = document.createElement('div');
      row.classList.add("keyboard__row");
      this.keysWrapper.append(row);

      item.forEach((keyObject) => {

        let keyDomElement = document.createElement('button');
        keyObject.keyElement = keyDomElement;
        keyDomElement.setAttribute('type', 'button');
        keyDomElement.classList.add("keyboard__key", "keyboard__key_" + keyObject.size);
        keyDomElement.textContent = this.getCharSymbol(keyObject);

        keyDomElement.addEventListener(
          'mousedown',
          (event) => {
            event.preventDefault();
            
            if (this.downTimerId) {
              clearTimeout(this.downTimerId);
              this.downTimerId = null;
            }
            
            
            this.downTimerId = setTimeout(() => {
              keyObject.keyElement.classList.add("keyboard__key_pressed");

              keyObject.downAction(this, keyObject);
              this.downTimerId = null;
            }, 300)

          }

        )

        keyDomElement.addEventListener(
          'mouseup',
          (event) => {
            event.preventDefault();
            if (this.upTimerId) {
              clearTimeout(this.upTimerId);
              this.upTimerId = null;
            }

            this.upTimerId = setTimeout(() => {
              keyObject.keyElement.classList.remove("keyboard__key_pressed");
              keyObject.upAction?.(this, keyObject);
            }, 300);

           
          }
        )

        // keyDomElement.addEventListener(
        //   'dblclick',
        //   (event) => {
        //     keyObject.keyElement.classList.toggle("keyboard__key_pressed");
        //     keyObject.dobleClickAction?.(this, keyObject);
        //   }
        // )

        row.append(keyDomElement);
      })
    })
  },

  initKeyboardEventListeners: function () {

    window.addEventListener(
      'keydown',
      (event) => {
        event.preventDefault();
        // We press shift repeatedly
        if (event.repeat && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
          return;
        }

        for (let i = 0; i < this.keysLayout.length; i++) {
          const item = this.keysLayout[i];

          const pressedKey = item.find((letter) => event.code === letter.keyCode);

          if (pressedKey) {
            pressedKey.keyElement.classList.add("keyboard__key_pressed");
            pressedKey.downAction(this, pressedKey);
            break;
          }
        }
      }
    )

    window.addEventListener(
      'keyup',
      (event) => {
        event.preventDefault();
        for (let i = 0; i < this.keysLayout.length; i++) {
          const item = this.keysLayout[i];

          const pressedKey = item.find((letter) => event.code === letter.keyCode);
          if (pressedKey) {
            pressedKey.keyElement.classList.remove("keyboard__key_pressed");
            pressedKey.upAction?.(this, pressedKey);
            break;
          }
        }

      }
    )
  },

  backspaceHandler: function () {
    let start = this.textField.selectionStart;
    let end = this.textField.selectionEnd;

    if (start === 0 && end === 0) {
      return;
    }

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

    this.changeKeysTextcontent();

  },

  shiftHandler: function () {

    this.shift = !this.shift;
    this.changeKeysTextcontent();
  },

  ctrlHandler: function () {
    this.ctrl = !this.ctrl;

    if (this.alt) {
      this.lang === 'en' ? this.lang = 'ru' : this.lang = 'en';
      this.changeKeysTextcontent();
      this.ctrl = false;
      this.alt = false;
    }
  },

  altHandler: function () {
    this.alt = !this.alt;
    if (this.ctrl) {
      this.lang === 'en' ? this.lang = 'ru' : this.lang = 'en';
      this.changeKeysTextcontent();
      this.ctrl = false;
      this.alt = false;
    }
  },

  tabHandler: function () {
    let start = this.textField.selectionStart;
    let end = this.textField.selectionEnd;
    let char = '\t';

    this.textField.value = this.textField.value.substring(0, start) + (this.caps ? char.toUpperCase() : char) + this.textField.value.substring(end, this.textField.value.length);
    this.textField.setSelectionRange(start + 1, start + 1);
  },

  leftHandler: function () {
    let start = this.textField.selectionStart;

    this.textField.setSelectionRange(start - 1, start - 1);
  },

  rightHandler: function () {
    let start = this.textField.selectionStart;

    this.textField.setSelectionRange(start + 1, start + 1);
  },

  addChar: function (keyObject) {
    let start = this.textField.selectionStart;
    let end = this.textField.selectionEnd;
    let char = this.getCharSymbol(keyObject); // string

    this.textField.value = this.textField.value.substring(0, start) + char + this.textField.value.substring(end, this.textField.value.length);
    this.textField.setSelectionRange(start + 1, start + 1);
  },

  changeKeysTextcontent: function () {

    this.keysLayout.forEach((item) => {
      item.forEach((keyObject) => {
        keyObject.keyElement.textContent = this.getCharSymbol(keyObject);
      })

    })
  },

  getCharSymbol: function (keyObject) {
    if (typeof keyObject.symbol === 'string') {
      return keyObject.symbol;
    }

    if (this.caps && this.shift) {

      return keyObject.symbol[this.lang].alt.toLowerCase();

    } else if (this.shift) {

      return keyObject.symbol[this.lang].alt;
    } else if (this.caps) {

      return keyObject.symbol[this.lang].main.toUpperCase();
    } else {

      return keyObject.symbol[this.lang].main;

    }

  }
};

Keyboard.init();

// let a = {};
// a.h = Keyboard.backspaceHandler;
// a.h.call(Keyboard);
// Keyboard.backspaceHandler();
// a.h();