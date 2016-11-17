function DecryptKey(prekey) {
    var chars = '0123456789abcdef';
    var key = '';
    for (i = 0; i < prekey.length - 1; i++) {
	var ch = prekey[i];
	pos = chars.indexOf(ch);
	if (pos != 0) {
	    var new_pos = pos - 1;
	}
	else {
	    var new_pos = 15;
	}
	key += chars[new_pos];
    }
    return key;
}

function MakeIssue(firstname, lastname, topic, body) {
    $.get("Encrypt-Key.txt", function (data) {
	var api_key = DecryptKey(data);

	var request = new XMLHttpRequest();
	request.open('post', 'https://api.github.com/repos/fabcooldog/resources/issues', true);
	request.setRequestHeader("Authorization", "token " + api_key);
	request.send(JSON.stringify({
	    title: "Issue: " + firstname + " " + lastname + ", " + topic,
	    body: body
	}));
     
	document.getElementById("output").innerHTML = "<strong>Issue Submitted</strong>";
    });
}

function GetInfo() {
    var fname = document.forms['submit_issue']['firstname'].value;
    var lname = document.forms['submit_issue']['lastname'].value;
    var topic = document.forms['submit_issue']['location'].value;
    var issue_body = document.forms['submit_issue']['request'].value;

    MakeIssue(fname, lname, topic, issue_body);
}
