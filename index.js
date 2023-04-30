const Keyboard = {

  keysWrapper: null,
  textField: null,
  caps: false,
  engKeysLayout: [[
    { symbol: '`', size: 'small', keyCode: 192, keyElement: null },
    { symbol: '1', size: 'small', keyCode: 49, keyElement: null },
    { symbol: '2', size: 'small', keyCode: 50, keyElement: null },
    { symbol: '3', size: 'small', keyCode: 51, keyElement: null },
    { symbol: '4', size: 'small', keyCode: 52, keyElement: null },
    { symbol: '5', size: 'small', keyCode: 53, keyElement: null },
    { symbol: '6', size: 'small', keyCode: 54, keyElement: null },
    { symbol: '7', size: 'small', keyCode: 55, keyElement: null },
    { symbol: '8', size: 'small', keyCode: 56, keyElement: null },
    { symbol: '9', size: 'small', keyCode: 57, keyElement: null },
    { symbol: '0', size: 'small', keyCode: 48, keyElement: null },
    { symbol: '-', size: 'small', keyCode: 189, keyElement: null },
    { symbol: '=', size: 'small', keyCode: 187, keyElement: null },
    { symbol: 'Backspace', size: 'big', keyCode: 8, keyElement: null }
  ], [
    { symbol: 'Tab', size: 'big', keyCode: 9, keyElement: null },
    { symbol: 'Q', size: 'small', keyCode: 81, keyElement: null },
    { symbol: 'W', size: 'small', keyCode: 87, keyElement: null },
    { symbol: 'E', size: 'small', keyCode: 69, keyElement: null },
    { symbol: 'R', size: 'small', keyCode: 82, keyElement: null },
    { symbol: 'T', size: 'small', keyCode: 84, keyElement: null },
    { symbol: 'Y', size: 'small', keyCode: 89, keyElement: null },
    { symbol: 'U', size: 'small', keyCode: 85, keyElement: null },
    { symbol: 'I', size: 'small', keyCode: 54, keyElement: null },
    { symbol: 'O', size: 'small', keyCode: 73, keyElement: null },
    { symbol: 'P', size: 'small', keyCode: 79, keyElement: null },
    { symbol: '[', size: 'small', keyCode: 80, keyElement: null },
    { symbol: ']', size: 'small', keyCode: 219, keyElement: null },
    { symbol: '\\', size: 'small', keyCode: 221, keyElement: null },
    { symbol: 'Del', size: 'big', keyCode: 220, keyElement: null }
  ], [
    { symbol: 'Caps', size: 'big', keyCode: 20, keyElement: null },
    { symbol: 'A', size: 'small', keyCode: 65, keyElement: null },
    { symbol: 'S', size: 'small', keyCode: 83, keyElement: null },
    { symbol: 'D', size: 'small', keyCode: 68, keyElement: null },
    { symbol: 'F', size: 'small', keyCode: 70, keyElement: null },
    { symbol: 'G', size: 'small', keyCode: 71, keyElement: null },
    { symbol: 'H', size: 'small', keyCode: 72, keyElement: null },
    { symbol: 'J', size: 'small', keyCode: 74, keyElement: null },
    { symbol: 'K', size: 'small', keyCode: 75, keyElement: null },
    { symbol: 'L', size: 'small', keyCode: 76, keyElement: null },
    { symbol: ';', size: 'small', keyCode: 186, keyElement: null },
    { symbol: `'`, size: 'small', keyCode: 222, keyElement: null },
    { symbol: 'Enter', size: 'big', keyCode: 13, keyElement: null }
  ], [
    { symbol: 'Shift', size: 'big', keyCode: 16, keyElement: null, side: 'left' },
    { symbol: 'Z', size: 'small', keyCode: 90, keyElement: null },
    { symbol: 'X', size: 'small', keyCode: 88, keyElement: null },
    { symbol: 'C', size: 'small', keyCode: 67, keyElement: null },
    { symbol: 'V', size: 'small', keyCode: 86, keyElement: null },
    { symbol: 'B', size: 'small', keyCode: 66, keyElement: null },
    { symbol: 'N', size: 'small', keyCode: 78, keyElement: null },
    { symbol: 'M', size: 'small', keyCode: 77, keyElement: null },
    { symbol: ',', size: 'small', keyCode: 188, keyElement: null },
    { symbol: '.', size: 'small', keyCode: 190, keyElement: null },
    { symbol: '/', size: 'small', keyCode: 191, keyElement: null },
    { symbol: '⇧', size: 'small', keyCode: 38, keyElement: null },
    { symbol: 'Shift', size: 'big', keyCode: 16, keyElement: null, side: 'right' }
  ], [
    { symbol: 'Ctrl', size: 'big', keyCode: 17, keyElement: null, side: 'left' },
    { symbol: 'Alt', size: 'big', keyCode: 18, keyElement: null, side: 'left' },
    { symbol: ' ', size: 'extra-big', keyCode: 32, keyElement: null },
    { symbol: 'Alt', size: 'big', keyCode: 18, keyElement: null, side: 'right' },
    { symbol: 'Ctrl', size: 'big', keyCode: 17, keyElement: null, side: 'right' },
    { symbol: '⇦', size: 'small', keyCode: 37, keyElement: null },
    { symbol:  '⇩', size: 'small', keyCode: 40, keyElement: null },
    { symbol:  '⇨', size: 'small', keyCode: 39, keyElement: null }
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

        key.addEventListener(
          'mousedown',
          (event) => {
            event.preventDefault();
            letter.keyElement.classList.add("keyboard__key_pressed");
            let start = this.textField.selectionStart;
            let end = this.textField.selectionEnd;

            //backspace

            if (letter.keyCode === 8) {

              if (start === this.textField.value.length || start === end) {

                this.textField.value = this.textField.value.substring(0, start - 1) + this.textField.value.substring(end, this.textField.value.length);

                this.textField.setSelectionRange(start - 1, end - 1);

              } else {

                this.textField.value = this.textField.value.substring(0, start) + this.textField.value.substring(end, this.textField.value.length);

                this.textField.setSelectionRange(start, start);
              }

            //delete

            } else if (letter.keyCode === 46) {

              if (start === end) {

                this.textField.value = this.textField.value.substring(0, start) + this.textField.value.substring(end + 1, this.textField.value.length);
              }

              this.textField.value = this.textField.value.substring(0, start) + this.textField.value.substring(end, this.textField.value.length);

              this.textField.setSelectionRange(start, start);

            //enter

            } else if (letter.keyCode === 13) {

              this.textField.value = this.textField.value.substring(0, start) + '\n' + this.textField.value.substring(end, this.textField.value.length);

              this.textField.setSelectionRange(start + 1, start + 1);

            //caps

            } else if (letter.keyCode === 20) {

              this.caps = !this.caps;

              key.classList.toggle("keyboard__key_caps");

            //left

            } else if (letter.keyCode === 37) {

              this.textField.setSelectionRange(start - 1, start - 1);

            //right

            } else if (letter.keyCode === 39) {

              this.textField.setSelectionRange(start + 1, start + 1);

            } else {

              this.textField.value = this.textField.value.substring(0, start) + (this.caps ? letter.symbol : letter.symbol.toLowerCase()) + this.textField.value.substring(end, this.textField.value.length);
              this.textField.setSelectionRange(start + 1, start + 1);



            }
          }

        )

        key.addEventListener(
          'mouseup',
          (event) => {
            letter.keyElement.classList.remove("keyboard__key_pressed");
          }
        )

        key.addEventListener(
          'mouseout',
          (event) => {
            letter.keyElement.classList.remove("keyboard__key_pressed");
          }
        )

        row.append(key);
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
  }
};

Keyboard.init();