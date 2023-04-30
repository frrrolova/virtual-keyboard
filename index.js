const Keyboard = {

  keysWrapper: null,
  textField: null,
  caps: false,
  shift: false,
  specialSymbol: '',
  lang: 'en',
  keysLayout: [
    [
      {
        symbol: {ru: {main: 'ё', alt: 'Ё'}, en: {main: '`', alt: '~'}},
        size: 'small',
        keyCode: 192,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '1', alt: '!'}, en: {main: '1', alt: '!'}},
        size: 'small',
        keyCode: 49,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '2', alt: '"'}, en: {main: '2', alt: '@'}},
        size: 'small',
        keyCode: 50,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '3', alt: '№'}, en: {main: '3', alt: '#'}},
        size: 'small',
        keyCode: 51,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '4', alt: ';'}, en: {main: '4', alt: '$'}},
        size: 'small',
        keyCode: 52,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '5', alt: '%'}, en: {main: '5', alt: '%'}},
        size: 'small',
        keyCode: 53,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '6', alt: ':'}, en: {main: '6', alt: '^'}},
        size: 'small',
        keyCode: 54,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '7', alt: '?'}, en: {main: '7', alt: '&'}},
        size: 'small',
        keyCode: 55,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '8', alt: '*'}, en: {main: '8', alt: '*'}},
        size: 'small',
        keyCode: 56,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '9', alt: '('}, en: {main: '9', alt: '('}},
        size: 'small',
        keyCode: 57,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '0', alt: ')'}, en: {main: '0', alt: ')'}},
        size: 'small',
        keyCode: 48,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '-', alt: '_'}, en: {main: '-', alt: '_'}},
        size: 'small',
        keyCode: 189,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '=', alt: '+'}, en: {main: '=', alt: '+'}},
        size: 'small',
        keyCode: 187,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Backspace',
        size: 'big',
        keyCode: 8,
        keyElement: null,
        downAction: (keyboard) => keyboard.backspaceHandler() }
    ],
    [
      {
        symbol: 'Tab',
        size: 'big',
        keyCode: 9,
        keyElement: null,
        downAction: (keyboard) => keyboard.tabHandler() },
      {
        symbol: {ru: {main: 'й', alt: 'Й'}, en: {main: 'q', alt: 'Q'}},
        size: 'small',
        keyCode: 81,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ц', alt: 'Ц'}, en: {main: 'w', alt: 'W'}},
        size: 'small',
        keyCode: 87,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'у', alt: 'У'}, en: {main: 'e', alt: 'E'}},
        size: 'small',
        keyCode: 69,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'к', alt: 'К'}, en: {main: 'r', alt: 'R'}},
        size: 'small',
        keyCode: 82,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'е', alt: 'Е'}, en: {main: 't', alt: 'T'}},
        size: 'small',
        keyCode: 84,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'н', alt: 'Н'}, en: {main: 'y', alt: 'Y'}},
        size: 'small',
        keyCode: 89,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'г', alt: 'Г'}, en: {main: 'u', alt: 'U'}},
        size: 'small',
        keyCode: 85,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ш', alt: 'Ш'}, en: {main: 'i', alt: 'I'}},
        size: 'small',
        keyCode: 73,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'щ', alt: 'Щ'}, en: {main: 'o', alt: 'O'}},
        size: 'small',
        keyCode: 79,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'з', alt: 'З'}, en: {main: 'p', alt: 'P'}},
        size: 'small',
        keyCode: 80,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'х', alt: 'Х'}, en: {main: '[', alt: '{'}},
        size: 'small',
        keyCode: 219,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ъ', alt: 'Ъ'}, en: {main: ']', alt: '}'}},
        size: 'small',
        keyCode: 221,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '\\', alt: '/'}, en: {main: '\\', alt: '|'}},
        size: 'small',
        keyCode: 220,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Del',
        size: 'big',
        keyCode: 46,
        keyElement: null,
        downAction: (keyboard) => keyboard.deleteHandler() }
    ],
    [
      {
        symbol: 'Caps',
        size: 'big',
        keyCode: 20,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.capsHandler.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ф', alt: 'Ф'}, en: {main: 'a', alt: 'A'}},
        size: 'small',
        keyCode: 65,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ы', alt: 'Ы'}, en: {main: 's', alt: 'S'}},
        size: 'small',
        keyCode: 83,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'в', alt: 'В'}, en: {main: 'd', alt: 'D'}},
        size: 'small',
        keyCode: 68,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'а', alt: 'А'}, en: {main: 'f', alt: 'F'}},
        size: 'small',
        keyCode: 70,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'п', alt: 'П'}, en: {main: 'g', alt: 'G'}},
        size: 'small',
        keyCode: 71,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'р', alt: 'Р'}, en: {main: 'h', alt: 'H'}},
        size: 'small',
        keyCode: 72,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'о', alt: 'О'}, en: {main: 'j', alt: 'J'}},
        size: 'small',
        keyCode: 74,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'л', alt: 'Л'}, en: {main: 'k', alt: 'K'}},
        size: 'small',
        keyCode: 75,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'д', alt: 'Д'}, en: {main: 'l', alt: 'L'}},
        size: 'small',
        keyCode: 76,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ж', alt: 'Ж'}, en: {main: ';', alt: ':'}},
        size: 'small',
        keyCode: 186,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'э', alt: 'Э'}, en: {main: `'`, alt: '"'}},
        size: 'small',
        keyCode: 222,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Enter',
        size: 'big',
        keyCode: 13,
        keyElement: null,
        downAction: (keyboard) => keyboard.enterHandler() }
    ],
    [
      {
        symbol: 'Shift',
        size: 'big',
        keyCode: 16,
        keyElement: null,
        side: 'left',
        downAction: (keyboard, key) => keyboard.shiftHandler.call(keyboard, key),
        upAction: (keyboard, key) => keyboard.shiftHandler.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'я', alt: 'Я'}, en: {main: 'z', alt: 'Z'}},
        size: 'small',
        keyCode: 90,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ч', alt: 'Ч'}, en: {main: 'x', alt: 'X'}},
        size: 'small',
        keyCode: 88,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'с', alt: 'С'}, en: {main: 'c', alt: 'C'}},
        size: 'small',
        keyCode: 67,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'м', alt: 'М'}, en: {main: 'v', alt: 'V'}},
        size: 'small',
        keyCode: 86,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'и', alt: 'И'}, en: {main: 'b', alt: 'B'}},
        size: 'small',
        keyCode: 66,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'т', alt: 'Т'}, en: {main: 'n', alt: 'N'}},
        size: 'small',
        keyCode: 78,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ь', alt: 'Ь'}, en: {main: 'm', alt: 'M'}},
        size: 'small',
        keyCode: 77,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'б', alt: 'Б'}, en: {main: ',', alt: '<'}},
        size: 'small',
        keyCode: 188,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: 'ю', alt: 'Ю'}, en: {main: '.', alt: '>'}},
        size: 'small',
        keyCode: 190,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: {ru: {main: '.', alt: ','}, en: {main: '/', alt: '?'}},
        size: 'small',
        keyCode: 191,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Shift',
        size: 'big',
        keyCode: 16,
        keyElement: null, side: 'right'
      },
      {
        symbol: '⇧',
        size: 'small',
        keyCode: 38,
        keyElement: null
      }
    ],
    [
      {
        symbol: 'Ctrl',
        size: 'big',
        keyCode: 17,
        keyElement: null, side: 'left' },
      {
        symbol: 'Alt',
        size: 'big',
        keyCode: 18,
        keyElement: null, side: 'left' },
      {
        symbol: {ru: {main: ' ', alt: ' '}, en: {main: ' ', alt: ' '}},
        size: 'extra-big',
        keyCode: 32,
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key)
      },
      {
        symbol: 'Alt',
        size: 'big',
        keyCode: 18,
        keyElement: null, side: 'right' },
      {
        symbol: 'Ctrl',
        size: 'big',
        keyCode: 17,
        keyElement: null, side: 'right' },
      {
        symbol: '⇦',
        size: 'small',
        keyCode: 37,
        keyElement: null,
        downAction: (keyboard) => keyboard.leftHandler.call(keyboard) },
      {
        symbol: '⇩',
        size: 'small',
        keyCode: 40,
        keyElement: null },
      {
        symbol: '⇨',
        size: 'small',
        keyCode: 39,
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

      item.forEach((letter) => {

        let keyDomElement = document.createElement('button');
        keyDomElement.setAttribute('type', 'button');
        keyDomElement.classList.add("keyboard__key", "keyboard__key_" + letter.size);
        if (typeof letter.symbol === 'string') {
          keyDomElement.textContent = letter.symbol;
        } else {
          keyDomElement.textContent = letter.symbol[this.lang].main;
        }
        letter.keyElement = keyDomElement;

        keyDomElement.addEventListener(
          'mousedown',
          (event) => {
            event.preventDefault();
            letter.keyElement.classList.add("keyboard__key_pressed");

            letter.downAction(this, letter);
          }

        )

        keyDomElement.addEventListener(
          'mouseup',
          (event) => {
            event.preventDefault();
            letter.keyElement.classList.remove("keyboard__key_pressed");
            letter.upAction?.(this, letter);
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
        event.preventDefault();
        for (let i = 0; i < this.keysLayout.length; i++) {
          const item = this.keysLayout[i];

          const pressedKey = item.find((letter) => event.keyCode === letter.keyCode);

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

          const pressedKey = item.find((letter) => event.keyCode === letter.keyCode);
          if (pressedKey) {
            pressedKey.keyElement.classList.remove("keyboard__key_pressed");
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

    // this.caps = !this.caps;
    this.shift = !this.shift;
    this.changeKeysTextcontent();
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

  addChar: function (letter) {
    let start = this.textField.selectionStart;
    let end = this.textField.selectionEnd;
    let char = letter.symbol[this.lang];

    this.textField.value = this.textField.value.substring(0, start) + (this.caps ? char.alt : char.main) + this.textField.value.substring(end, this.textField.value.length);
    this.textField.setSelectionRange(start + 1, start + 1);
  },

  changeKeysTextcontent: function () {

    this.keysLayout.forEach((item) => {
      item.forEach((char) => {
        if (typeof char.symbol !== 'string') {

          if (this.caps && this.shift) {

            char.keyElement.textContent = char.symbol[this.lang].alt.toLowerCase();

          } else if (this.shift) {

            char.keyElement.textContent = char.symbol[this.lang].alt;
          } else if (this.caps) {

            char.keyElement.textContent = char.symbol[this.lang].main.toUpperCase();
          } else {

            char.keyElement.textContent = char.symbol[this.lang].main;

          }
        }
      })

    })
  }
};

Keyboard.init();

// let a = {};
// a.h = Keyboard.backspaceHandler;
// a.h.call(Keyboard);
// Keyboard.backspaceHandler();
// a.h();