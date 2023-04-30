const Keyboard = {

  keysWrapper: null,
  textField: null,
  caps: false,
  engKeysLayout: [[
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
    { symbol: 'Del', size: 'big', keyCode: 46, keyElement: null }
  ], [
    { symbol: 'Caps', size: 'big', keyCode: 20, keyElement: null },
    { symbol: 'Enter', size: 'big', keyCode: 13, keyElement: null }
  ], [
    { symbol: 'Shift', size: 'big', keyCode: 16, keyElement: null, side: left },
    { symbol: '⇧', size: 'small', keyCode: 38, keyElement: null },
  ], [
    { symbol: 'Ctrl', size: 'big', keyCode: 17, keyElement: null, side: left },
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
            // this.textField.focus();
          }

        )

        key.addEventListener(
          'mouseup',
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
        // this.textField.focus();
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