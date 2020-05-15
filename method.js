// セレクトボックスで選択中のvalueを取得してlog出力する
var getSelectValue = function(name) {
  var select = document.getElementsByName(name)[0];
  for (var i = 0; i < select.children.length; i++) {
    var opt = select.children[i];
    if (opt.selected) {
      console.log(opt.value);
    }
  }
};

// セレクトボックスの初期値をvalueで指定する
var setSelectValue = function(name, value) {
  var select = document.getElementsByName(name)[0];
  for (var i = 0; i < select.children.length; i++) {
    var opt = select.children[i];
    if (opt.value === value) {
      opt.selected = true;
    }
  }
};

// ラジオボタンで選択中のvalueを取得してlog出力する
var getRadioValue = function(name) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    var opt = radios[i];
    if (opt.checked) {
      console.log(opt.value);
      break;
    }
  }
};

// ラジオボタンの初期値をvalueで指定する
var setRadioValue = function(name, value) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    var opt = radios[i];
    if (opt.value === value) {
      opt.checked = true;
      break;
    }
  }
};

// チェックボックスで選択中のvalueを全て取得し、配列でlog出力する
var getCheckBoxValue = function(name) {
  var result = [];
  var boxes = document.getElementsByName(name);
  for (var i = 0; i < boxes.length; i++) {
    var opt = boxes[i];
    if (opt.checked) {
      result.push(opt.value);
    }
  }
  console.log(result);
};

// チェックボックスの初期値(複数)をvalueで指定する
var setCheckBoxValue = function(name, values) {
  var boxes = document.getElementsByName(name);
  for (var i = 0; i < boxes.length; i++) {
    var opt = boxes[i];
    if (values.includes(opt.value)) {
      opt.checked = true;
    }
  }
};

// URLから特定のキーから値を取得してlog出力する
var getHrefParam = function(key) {
  if (location.search === "") {
    return false;
  }
  var paramStr = location.search.split('?')[1];
  var params = paramStr.split('&');

  for (var i = 0; i < params.length; i++) {
    var paramKey = params[i].split('=')[0];
    if (paramKey === key) {
      console.log(params[i].split('=')[1]);
    }
  }
};
