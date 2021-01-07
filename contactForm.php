<?php

if (isset($_POST[ 'submit'])) {
    $name = $_POST['fullname'];
    $mailFrom = $_POST ['email'];
    $message = $_POST ['message'];

    $mailTo = "strangefolk16@yahoo.com";

    $headers = "From: ".$mailFrom;
    $txt = "You've got mail from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: contact.php?mailsend");
}