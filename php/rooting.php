<?php
$content = $_GET['content'];

if(isset($content)) {
  if($content == 'home') {
    getContent($content);
  }
  if($content == 'about') {
    getContent($content);
  }
}

function getContent($name) {
  $file = '../content/' . $name . '.html';
  if(file_exists($file)) {
    $fc = file_get_contents($file); 
    print($fc);
  }
}

?>
