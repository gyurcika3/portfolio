<?php

if (isset($_POST["email"]) && $_POST["email"] != "") {

    if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {

        //submit the form
        $userName = $_POST["name"];
        $userEmail = $_POST["email"];
        $messageSubject = $_POST["subject"];
        $message = $_POST["message"];

        $to = "george.banlaki@gmail.com";
        $body = "";

        if (!empty($userName) || !empty($userEmail) || !empty($messageSubject) || !empty($message)) {
            $body .= "From: " . $userName . "\r\n";
            $body .= "Email: " . $userEmail . "\r\n";
            $body .= "Message: " . $message . "\r\n";

            mail($to, $messageSubject, $body);
        }
    }
}


$name = "";
$email = "";
$subject = "";
$message = "";
$nameErr = "";
$emailErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = $_POST["name"];
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }

    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = $_POST["email"];
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }
    if (empty($_POST["subject"])) {
        $subject = "";
    } else {
        $subject = $_POST["subject"];
    }

    if (empty($_POST["message"])) {
        $message = "";
    } else {
        $message = $_POST["message"];
    }
}
