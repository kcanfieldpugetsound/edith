
<!-- 
Code deirved from:
http://www.daniweb.com/web-development/javascript-dhtml-ajax/code/330933/a-simple-html-login-page-using-javascript
 -->

<html>
<head>
	<link rel="stylesheet" type="text/css" href="loginstyle.css">
	<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
	<link rel="shortcut icon" href="/favicon.ico">
<title>
Edith
</title>
</head>
<body>
<div id="logo" width="300" height="120">
	<img src="EdithLogoName.png">
</div>
<!-- <div id="bunny">
	<img src="edithbunnywhite.png">
</div> -->

<div id="wrapper">
<form name="login" class="login">
	<div class="header">
	<h1> Welcome to Edith!</h1>
	<span>Please sign in to get started creating your totally awesome story.</span>
</div>
<div class="content">
	<input class="input username" type="text" name="username" placeholder="Username"/>
	<input type="password" name="password" class="input password" placeholder="Password"/>
	<div class="footer">
		<input type="submit" name="submit" value="Login" class="button" onclick="check(this.form)"/>
		<input type="submit" name="submit" value="Register" class="register" />
		</div>
</form>
</div>
</body>
</html>