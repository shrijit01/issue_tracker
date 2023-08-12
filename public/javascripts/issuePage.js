
var createIssue = document.querySelector("#create-issue-button");
var issueForm = document.querySelector("#issue-form");
var closeForm = document.querySelector("#close-form");
var submitForm = document.querySelector("#submit-button");

createIssue.addEventListener('click',function(e){
    issueForm.style.display = "block"
});

closeForm.addEventListener('click',function(e){
    issueForm.style.display = "none"
});

