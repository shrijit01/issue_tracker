var createIssueIcon = document.querySelector('.create-issue-icon');
var closeIssueForm = document.querySelector('#close-issue');
var issueForm = document.querySelector('#issueForm-container');
// var closeForm = document.querySelector('#issue-form');



createIssueIcon.addEventListener('click',function(e){
    issueForm.style.display = "block";
    // closeIssueForm.style.display = "block";
});

closeIssueForm.addEventListener('click',function(e){
    issueForm.style.display = "none";
    // closeIssueForm.style.display = "none";
});

