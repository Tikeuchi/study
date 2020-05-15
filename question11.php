<?php
  $map = array(
    'id' => '1',
    'name' => 'taro',
    'age' => '30',
  );
  // 連想配列 $map をJSON化して下さい
  $json = json_encode($map);
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>question11</title>
  </head>
  <body>
    <h3>■Q 11:</h3>
    PHPの部分で連想配列が用意されています。<br>
    1. まずは連想配列をJSON化してHTMLに埋め込んで下さい。<br><br>
    buttonをクリックした時、<br>
    2. JavaScriptで取得して連想配列に戻したものをconsoleに表示して下さい。<br>
    3. 更にその連想配列を再度JSON化したものをconsoleに表示して下さい。<br><br>
    <!-- この間にJSON化したHTMLを埋め込んで下さい↓ -->
    <div id="user">
      <?php echo $json ?>
    </div>
    <!-- この間にJSON化したHTMLを埋め込んで下さい↑ -->
    <div>
      <input type="button" id="btn"  value="button">
    </div>
  </body>
</html>

<!-- ここからJavaScriptを記述して下さい -->
<script type="text/javascript">
  var btn = document.getElementById('btn');
  btn.addEventListener('click', function() {
    var user = document.getElementById('user');
    var arr = JSON.parse(user.textContent);
    console.log(arr);
    var json = JSON.stringify(arr);
    console.log(json);
  });
</script>
