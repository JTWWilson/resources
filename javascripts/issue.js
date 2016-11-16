function SubmitIssue() {
  var fname = document.forms['submit_issue']['firstname'].value;
  var lname = document.forms['submit_issue']['lastname'].value;
  var issue_body = document.forms['submit_issue']['request'].value;

  var request = new XMLHttpRequest();
  request.open('post', 'https://api.github.com/repos/fabcooldog/resources/issues', true);
  request.setRequestHeader("Authorization", "token 235f1b7e83a760c33011bae6dc4be814c48d0e8f");
  request.send(JSON.stringify({  // the JSON.stringify() around the {} is what was missing
    title: "Issue: " + fname + " " + lname,
    body: issue_body
  }));
      
  document.getElementById("output").innerHTML = "<strong>Issue Submitted</strong>";
}
