<?php

require 'vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader('view');
$twig = new Environment($loader);

echo $twig->render('about.twig');