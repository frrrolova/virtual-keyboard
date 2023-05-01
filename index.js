class Keyboard {
  keysWrapper = null;

  textField = null;

  caps = false;

  shift = false;

  controlKeys = [];

  lang = null;

  keysLayout = [
    [
      {
        symbol: { ru: { main: 'ё', alt: 'Ё' }, en: { main: '`', alt: '~' } },
        size: 'small',
        keyCode: 'Backquote',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '1', alt: '!' }, en: { main: '1', alt: '!' } },
        size: 'small',
        keyCode: 'Digit1',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '2', alt: '"' }, en: { main: '2', alt: '@' } },
        size: 'small',
        keyCode: 'Digit2',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '3', alt: '№' }, en: { main: '3', alt: '#' } },
        size: 'small',
        keyCode: 'Digit3',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '4', alt: ';' }, en: { main: '4', alt: '$' } },
        size: 'small',
        keyCode: 'Digit4',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '5', alt: '%' }, en: { main: '5', alt: '%' } },
        size: 'small',
        keyCode: 'Digit5',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '6', alt: ':' }, en: { main: '6', alt: '^' } },
        size: 'small',
        keyCode: 'Digit6',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '7', alt: '?' }, en: { main: '7', alt: '&' } },
        size: 'small',
        keyCode: 'Digit7',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '8', alt: '*' }, en: { main: '8', alt: '*' } },
        size: 'small',
        keyCode: 'Digit8',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '9', alt: '(' }, en: { main: '9', alt: '(' } },
        size: 'small',
        keyCode: 'Digit9',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '0', alt: ')' }, en: { main: '0', alt: ')' } },
        size: 'small',
        keyCode: 'Digit0',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '-', alt: '_' }, en: { main: '-', alt: '_' } },
        size: 'small',
        keyCode: 'Minus',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '=', alt: '+' }, en: { main: '=', alt: '+' } },
        size: 'small',
        keyCode: 'Equal',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: 'Backspace',
        size: 'big',
        keyCode: 'Backspace',
        keyElement: null,
        downAction: (keyboard) => keyboard.backspaceHandler(),
      },
    ],
    [
      {
        symbol: 'Tab',
        size: 'big',
        keyCode: 'Tab',
        keyElement: null,
        downAction: (keyboard) => keyboard.tabHandler(),
      },
      {
        symbol: { ru: { main: 'й', alt: 'Й' }, en: { main: 'q', alt: 'Q' } },
        size: 'small',
        keyCode: 'KeyQ',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ц', alt: 'Ц' }, en: { main: 'w', alt: 'W' } },
        size: 'small',
        keyCode: 'KeyW',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'у', alt: 'У' }, en: { main: 'e', alt: 'E' } },
        size: 'small',
        keyCode: 'KeyE',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'к', alt: 'К' }, en: { main: 'r', alt: 'R' } },
        size: 'small',
        keyCode: 'KeyR',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'е', alt: 'Е' }, en: { main: 't', alt: 'T' } },
        size: 'small',
        keyCode: 'KeyT',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'н', alt: 'Н' }, en: { main: 'y', alt: 'Y' } },
        size: 'small',
        keyCode: 'KeyY',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'г', alt: 'Г' }, en: { main: 'u', alt: 'U' } },
        size: 'small',
        keyCode: 'KeyU',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ш', alt: 'Ш' }, en: { main: 'i', alt: 'I' } },
        size: 'small',
        keyCode: 'KeyI',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'щ', alt: 'Щ' }, en: { main: 'o', alt: 'O' } },
        size: 'small',
        keyCode: 'KeyO',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'з', alt: 'З' }, en: { main: 'p', alt: 'P' } },
        size: 'small',
        keyCode: 'KeyP',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'х', alt: 'Х' }, en: { main: '[', alt: '{' } },
        size: 'small',
        keyCode: 'BracketLeft',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ъ', alt: 'Ъ' }, en: { main: ']', alt: '}' } },
        size: 'small',
        keyCode: 'BracketRight',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '\\', alt: '/' }, en: { main: '\\', alt: '|' } },
        size: 'small',
        keyCode: 'Backslash',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: 'Del',
        size: 'big',
        keyCode: 'Delete',
        keyElement: null,
        downAction: (keyboard) => keyboard.deleteHandler(),
      },
    ],
    [
      {
        symbol: 'Caps',
        size: 'big',
        keyCode: 'CapsLock',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.capsHandler.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ф', alt: 'Ф' }, en: { main: 'a', alt: 'A' } },
        size: 'small',
        keyCode: 'KeyA',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ы', alt: 'Ы' }, en: { main: 's', alt: 'S' } },
        size: 'small',
        keyCode: 'KeyS',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'в', alt: 'В' }, en: { main: 'd', alt: 'D' } },
        size: 'small',
        keyCode: 'KeyD',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'а', alt: 'А' }, en: { main: 'f', alt: 'F' } },
        size: 'small',
        keyCode: 'KeyF',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'п', alt: 'П' }, en: { main: 'g', alt: 'G' } },
        size: 'small',
        keyCode: 'KeyG',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'р', alt: 'Р' }, en: { main: 'h', alt: 'H' } },
        size: 'small',
        keyCode: 'KeyH',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'о', alt: 'О' }, en: { main: 'j', alt: 'J' } },
        size: 'small',
        keyCode: 'KeyJ',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'л', alt: 'Л' }, en: { main: 'k', alt: 'K' } },
        size: 'small',
        keyCode: 'KeyK',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'д', alt: 'Д' }, en: { main: 'l', alt: 'L' } },
        size: 'small',
        keyCode: 'KeyL',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ж', alt: 'Ж' }, en: { main: ';', alt: ':' } },
        size: 'small',
        keyCode: 'Semicolon',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'э', alt: 'Э' }, en: { main: '\'', alt: '"' } },
        size: 'small',
        keyCode: 'Quote',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: 'Enter',
        size: 'big',
        keyCode: 'Enter',
        keyElement: null,
        downAction: (keyboard) => keyboard.enterHandler(),
      },
    ],
    [
      {
        symbol: 'Shift',
        size: 'big',
        keyCode: 'ShiftLeft',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.shiftDownHandler.call(keyboard, key),
        keyUpAction: (keyboard, key) => keyboard.shiftUpHandler.call(keyboard, key),

      },
      {
        symbol: { ru: { main: 'я', alt: 'Я' }, en: { main: 'z', alt: 'Z' } },
        size: 'small',
        keyCode: 'KeyZ',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ч', alt: 'Ч' }, en: { main: 'x', alt: 'X' } },
        size: 'small',
        keyCode: 'KeyX',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'с', alt: 'С' }, en: { main: 'c', alt: 'C' } },
        size: 'small',
        keyCode: 'KeyC',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'м', alt: 'М' }, en: { main: 'v', alt: 'V' } },
        size: 'small',
        keyCode: 'KeyV',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'и', alt: 'И' }, en: { main: 'b', alt: 'B' } },
        size: 'small',
        keyCode: 'KeyB',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'т', alt: 'Т' }, en: { main: 'n', alt: 'N' } },
        size: 'small',
        keyCode: 'KeyN',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ь', alt: 'Ь' }, en: { main: 'm', alt: 'M' } },
        size: 'small',
        keyCode: 'KeyM',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'б', alt: 'Б' }, en: { main: ',', alt: '<' } },
        size: 'small',
        keyCode: 'Comma',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: 'ю', alt: 'Ю' }, en: { main: '.', alt: '>' } },
        size: 'small',
        keyCode: 'Period',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: { ru: { main: '.', alt: ',' }, en: { main: '/', alt: '?' } },
        size: 'small',
        keyCode: 'Slash',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: 'Shift',
        size: 'big',
        keyCode: 'ShiftRight',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.shiftDownHandler.call(keyboard, key),
        keyUpAction: (keyboard, key) => keyboard.shiftUpHandler.call(keyboard, key),

      },
      {
        symbol: '⇧',
        size: 'small',
        keyCode: 'ArrowUp',
        keyElement: null,
        downAction: (keyboard) => keyboard.upHandler.call(keyboard),
      },
    ],
    [
      {
        symbol: 'Ctrl',
        size: 'big',
        keyCode: 'ControlLeft',
        keyElement: null,
        controlKey: 'ctrl',
        downAction: (keyboard, key) => keyboard.ctrlHandler.call(keyboard, key),
        keyUpAction: (keyboard, key) => keyboard.ctrlUpHandler.call(keyboard, key),
      },
      {
        symbol: 'Alt',
        size: 'big',
        keyCode: 'AltLeft',
        keyElement: null,
        controlKey: 'alt',
        downAction: (keyboard, key) => keyboard.altHandler.call(keyboard, key),
        keyUpAction: (keyboard, key) => keyboard.altUpHandler.call(keyboard, key),
      },
      {
        symbol: { ru: { main: ' ', alt: ' ' }, en: { main: ' ', alt: ' ' } },
        size: 'extra-big',
        keyCode: 'Space',
        keyElement: null,
        downAction: (keyboard, key) => keyboard.addChar.call(keyboard, key),
      },
      {
        symbol: 'Alt',
        size: 'big',
        keyCode: 'AltRight',
        keyElement: null,
        controlKey: 'alt',
        downAction: (keyboard, key) => keyboard.altHandler.call(keyboard, key),
        keyUpAction: (keyboard, key) => keyboard.altUpHandler.call(keyboard, key),
      },
      {
        symbol: 'Ctrl',
        size: 'big',
        keyCode: 'ControlRight',
        keyElement: null,
        controlKey: 'ctrl',
        downAction: (keyboard, key) => keyboard.ctrlHandler.call(keyboard, key),
        keyUpAction: (keyboard, key) => keyboard.ctrlUpHandler.call(keyboard, key),
      },
      {
        symbol: '⇦',
        size: 'small',
        keyCode: 'ArrowLeft',
        keyElement: null,
        downAction: (keyboard) => keyboard.leftHandler.call(keyboard),
      },
      {
        symbol: '⇩',
        size: 'small',
        keyCode: 'ArrowDown',
        keyElement: null,
        downAction: (keyboard) => keyboard.downHandler.call(keyboard),
      },
      {
        symbol: '⇨',
        size: 'small',
        keyCode: 'ArrowRight',
        keyElement: null,
        downAction: (keyboard) => keyboard.rightHandler.call(keyboard),
      },
    ],
  ];

  constructor() {
    this.initLang();
    this.drawBasicLayout();
    this.drawKeys();
    this.initKeyboardEventListeners();
  }

  initLang() {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  drawBasicLayout() {
    const container = document.createElement('div');
    const title = document.createElement('h1');
    const textarea = document.createElement('textarea');
    this.textField = textarea;
    const keyboard = document.createElement('div');
    const wrapper = document.createElement('div');
    this.keysWrapper = wrapper;
    const note = document.createElement('div');
    const noteItemOS = document.createElement('div');
    const noteItemLang = document.createElement('div');

    container.classList.add('container');
    title.classList.add('title');
    title.textContent = 'Keyboard';
    textarea.classList.add('textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('name', 'text');
    textarea.setAttribute('cols', '150');
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('placeholder', 'Type something');
    textarea.setAttribute('autofocus', '');
    keyboard.classList.add('keyboard');
    wrapper.classList.add('keyboard__wrapper');
    note.classList.add('keyboard__note');
    noteItemOS.classList.add('keyboard__note-item');
    noteItemOS.textContent = 'This Keyboard created in Windows OS';
    noteItemLang.textContent = 'To change current language, use Ctrl + Alt';

    container.append(title, textarea, keyboard);
    keyboard.append(note);
    note.append(noteItemOS);
    note.append(noteItemLang);
    keyboard.append(wrapper);

    document.body.append(container);

    keyboard.addEventListener(
      'mousedown',
      (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
      },
    );
  }

  drawKeys() {
    this.keysLayout.forEach((item) => {
      const row = document.createElement('div');
      row.classList.add('keyboard__row');
      this.keysWrapper.append(row);

      item.forEach((keyObject) => {
        const keyDomElement = document.createElement('button');
        // eslint-disable-next-line no-param-reassign
        keyObject.keyElement = keyDomElement;
        keyDomElement.setAttribute('type', 'button');
        keyDomElement.classList.add('keyboard__key', `keyboard__key_${keyObject.size}`);
        keyDomElement.textContent = this.getCharSymbol(keyObject);

        keyDomElement.addEventListener(
          'mousedown',
          (event) => {
            event.preventDefault();

            keyObject.keyElement.classList.add('keyboard__key_pressed');
            keyObject.downAction(this, keyObject);

            if (this.shift && keyObject.symbol !== 'Shift') {
              this.shift = false;

              this.changeKeysTextcontent();
              this.findKeyObjectByKeyCode('ShiftLeft')?.keyElement.classList.remove('keyboard__key_active');
              this.findKeyObjectByKeyCode('ShiftRight')?.keyElement.classList.remove('keyboard__key_active');
            }

            if (!keyObject.controlKey) {
              this.controlKeys = [];
              this.findKeyObjectByKeyCode('ControlLeft')?.keyElement.classList.remove('keyboard__key_active');
              this.findKeyObjectByKeyCode('ControlRight')?.keyElement.classList.remove('keyboard__key_active');
              this.findKeyObjectByKeyCode('AltLeft')?.keyElement.classList.remove('keyboard__key_active');
              this.findKeyObjectByKeyCode('AltRight')?.keyElement.classList.remove('keyboard__key_active');
            }
          },

        );

        keyDomElement.addEventListener(
          'mouseup',
          (event) => {
            event.preventDefault();

            keyObject.keyElement.classList.remove('keyboard__key_pressed');
            keyObject.upAction?.(this, keyObject);
          },
        );

        window.addEventListener('mouseup', () => {
          this.keysLayout.forEach((layoutRow) => {
            layoutRow.forEach((kObj) => {
              kObj.keyElement.classList.remove('keyboard__key_pressed');
            });
          });
        });

        row.append(keyDomElement);
      });
    });
  }

  initKeyboardEventListeners() {
    window.addEventListener(
      'keydown',
      (event) => {
        event.preventDefault();
        // Prevent repeatedly occurring event handler
        const noRepeatKeys = ['ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight'];
        if (event.repeat && noRepeatKeys.includes(event.code)) {
          return;
        }

        const keyObject = this.findKeyObjectByKeyCode(event.code);

        keyObject.keyElement.classList.add('keyboard__key_pressed');
        keyObject.downAction(this, keyObject);
      },
    );

    window.addEventListener(
      'keyup',
      (event) => {
        event.preventDefault();

        const keyObject = this.findKeyObjectByKeyCode(event.code);

        keyObject.keyElement.classList.remove('keyboard__key_pressed');
        keyObject.upAction?.(this, keyObject);
        keyObject.keyUpAction?.(this, keyObject);
      },
    );
  }

  backspaceHandler() {
    const start = this.textField.selectionStart;
    const end = this.textField.selectionEnd;

    if (start === 0 && end === 0) {
      return;
    }

    if (start === this.textField.value.length || start === end) {
      const leftString = this.textField.value.substring(0, start - 1);
      const rightString = this.textField.value.substring(end, this.textField.value.length);

      this.textField.value = leftString + rightString;

      this.textField.setSelectionRange(start - 1, end - 1);
    } else {
      const leftString = this.textField.value.substring(0, start);
      const rightString = this.textField.value.substring(end, this.textField.value.length);

      this.textField.value = leftString + rightString;

      this.textField.setSelectionRange(start, start);
    }
  }

  deleteHandler() {
    const start = this.textField.selectionStart;
    const end = this.textField.selectionEnd;

    if (start === end) {
      const leftString = this.textField.value.substring(0, start);
      const rightString = this.textField.value.substring(end + 1, this.textField.value.length);

      this.textField.value = leftString + rightString;
    }

    const leftString = this.textField.value.substring(0, start);
    const rightString = this.textField.value.substring(end, this.textField.value.length);

    this.textField.value = leftString + rightString;

    this.textField.setSelectionRange(start, start);
  }

  enterHandler() {
    const start = this.textField.selectionStart;
    const end = this.textField.selectionEnd;
    const leftString = this.textField.value.substring(0, start);
    const rightString = this.textField.value.substring(end, this.textField.value.length);

    this.textField.value = `${leftString}\n${rightString}`;

    this.textField.setSelectionRange(start + 1, start + 1);
  }

  capsHandler(key) {
    this.caps = !this.caps;

    key.keyElement.classList.toggle('keyboard__key_active');

    this.changeKeysTextcontent();
  }

  shiftDownHandler(key) {
    this.shift = !this.shift;
    key.keyElement.classList.toggle('keyboard__key_active');
    this.changeKeysTextcontent();
  }

  shiftUpHandler(key) {
    this.shift = false;
    key.keyElement.classList.remove('keyboard__key_active');
    this.changeKeysTextcontent();
  }

  ctrlHandler(key) {
    this.controlKeysHandler(key);
  }

  ctrlUpHandler(key) {
    this.controlKeys.splice(this.controlKeys.indexOf(key), 1);
    key.keyElement.classList.remove('keyboard__key_active');
  }

  altHandler(key) {
    this.controlKeysHandler(key);
  }

  altUpHandler(key) {
    this.controlKeys.splice(this.controlKeys.indexOf(key), 1);
    key.keyElement.classList.remove('keyboard__key_active');
  }

  tabHandler() {
    const start = this.textField.selectionStart;
    const end = this.textField.selectionEnd;
    const char = '\t';
    const leftString = this.textField.value.substring(0, start);
    const rightString = this.textField.value.substring(end, this.textField.value.length);

    this.textField.value = leftString + (this.caps ? char.toUpperCase() : char) + rightString;
    this.textField.setSelectionRange(start + 1, start + 1);
  }

  leftHandler() {
    const start = this.textField.selectionStart;

    if (start === 0) {
      return;
    }

    this.textField.setSelectionRange(start - 1, start - 1);
  }

  rightHandler() {
    const start = this.textField.selectionStart;

    this.textField.setSelectionRange(start + 1, start + 1);
  }

  upHandler() {
    const position = this.textField.selectionStart;
    const arrOfStrings = this.textField.value.split('\n');
    let sum = 0;
    let prevSum = 0;
    let i = 0;
    let dummyPosition = position;
    let newPosition;

    while (dummyPosition > arrOfStrings[i].length) {
      dummyPosition = dummyPosition - arrOfStrings[i].length - 1;
      prevSum = sum;
      sum = sum + arrOfStrings[i].length + 1;
      i += 1;
    }

    if (i === 0) {
      newPosition = 0;
    } else if (dummyPosition > arrOfStrings[i - 1].length) {
      newPosition = sum - 1;
    } else {
      newPosition = prevSum + dummyPosition;
    }

    this.textField.setSelectionRange(newPosition, newPosition);
  }

  downHandler() {
    const position = this.textField.selectionStart;
    const arrOfStrings = this.textField.value.split('\n');
    let i = 0;
    let sum = 0;
    let dummyPosition = position;
    let newPosition;

    while (dummyPosition > arrOfStrings[i].length) {
      dummyPosition = dummyPosition - arrOfStrings[i].length - 1;
      sum = sum + arrOfStrings[i].length + 1;
      i += 1;
    }

    if (i === (arrOfStrings.length - 1)) {
      newPosition = sum + arrOfStrings[i].length;
    } else if (dummyPosition > arrOfStrings[i + 1].length) {
      newPosition = sum + arrOfStrings[i].length + arrOfStrings[i + 1].length + 1;
    } else {
      newPosition = sum + arrOfStrings[i].length + dummyPosition + 1;
    }
    this.textField.setSelectionRange(newPosition, newPosition);
  }

  addChar(keyObject) {
    const start = this.textField.selectionStart;
    const end = this.textField.selectionEnd;
    const char = this.getCharSymbol(keyObject); // string
    const leftString = this.textField.value.substring(0, start);
    const rightString = this.textField.value.substring(end, this.textField.value.length);

    this.textField.value = leftString + char + rightString;
    this.textField.setSelectionRange(start + 1, start + 1);
  }

  changeKeysTextcontent() {
    this.keysLayout.forEach((item) => {
      item.forEach((keyObject) => {
        // eslint-disable-next-line no-param-reassign
        keyObject.keyElement.textContent = this.getCharSymbol(keyObject);
      });
    });
  }

  getCharSymbol(keyObject) {
    if (typeof keyObject.symbol === 'string') {
      return keyObject.symbol;
    }

    if (this.caps && this.shift) {
      return keyObject.symbol[this.lang].alt.toLowerCase();
    } if (this.shift) {
      return keyObject.symbol[this.lang].alt;
    } if (this.caps) {
      return keyObject.symbol[this.lang].main.toUpperCase();
    }

    return keyObject.symbol[this.lang].main;
  }

  findKeyObjectByKeyCode(keyCode) {
    let result;

    for (let i = 0; i < this.keysLayout.length; i += 1) {
      const item = this.keysLayout[i];

      const foundedKeyObject = item.find((keyObject) => keyCode === keyObject.keyCode);
      if (foundedKeyObject) {
        result = foundedKeyObject;
        break;
      }
    }
    return result;
  }

  controlKeysHandler(keyObject) {
    const sameKeyObject = this.controlKeys.find((item) => item.controlKey === keyObject.controlKey);

    if (!sameKeyObject) {
      this.controlKeys.push(keyObject);
      keyObject.keyElement.classList.add('keyboard__key_active');
    } else if (sameKeyObject.keyCode === keyObject.keyCode) {
      this.controlKeys.splice(this.controlKeys.indexOf(keyObject), 1);
      keyObject.keyElement.classList.remove('keyboard__key_active');
    } else {
      keyObject.keyElement.classList.add('keyboard__key_active');
      sameKeyObject.keyElement.classList.remove('keyboard__key_active');
      this.controlKeys.splice(this.controlKeys.indexOf(sameKeyObject), 1);
      this.controlKeys.push(keyObject);
    }

    if (this.controlKeys.length === 2) {
      if (this.controlKeys.every((element) => element.controlKey === 'ctrl' || element.controlKey === 'alt')) {
        keyObject.keyElement.classList.add('keyboard__key_active');
        this.changeLang();

        setTimeout(() => {
          this.findKeyObjectByKeyCode('ControlLeft')?.keyElement.classList.remove('keyboard__key_active');
          this.findKeyObjectByKeyCode('ControlRight')?.keyElement.classList.remove('keyboard__key_active');
          this.findKeyObjectByKeyCode('AltLeft')?.keyElement.classList.remove('keyboard__key_active');
          this.findKeyObjectByKeyCode('AltRight')?.keyElement.classList.remove('keyboard__key_active');
        }, 300);
      }
    }
  }

  changeLang() {
    this.lang = this.lang === 'en' ? 'ru' : 'en';
    this.changeKeysTextcontent();
    this.controlKeys = [];
    localStorage.setItem('lang', this.lang);
  }
}
// eslint-disable-next-line no-new
new Keyboard();
