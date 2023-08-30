var createIssueIcon = document.querySelector('.create-issue-icon');
var closeIssueForm = document.querySelector('#close-issue');
var issueForm = document.querySelector('#issueForm-container');


createIssueIcon.addEventListener('click',function(e){
    issueForm.style.display = "block";
});

closeIssueForm.addEventListener('click',function(e){
    issueForm.style.display = "none";
});



function updateIssueDisplay() {
    const selectedAuthor = authorFilter.value;
    const selectedLabel = labelFilter.value;
    const issueItems = document.querySelectorAll('.issue-item');


    console.log('Selected Author:', selectedAuthor);
    console.log('Selected Label:', selectedLabel);

    issueItems.forEach(issueItem => {
        const authorText = issueItem.querySelector('.Author').textContent.trim(); // Use trim()
        const labelText = issueItem.querySelector('.Label').textContent.trim(); // Use trim()

        console.log('Author Text:', authorText);
        console.log('Label Text:', labelText);

        const authorMatch = selectedAuthor === '' || authorText === selectedAuthor;
        const labelMatch = selectedLabel === '' || labelText === selectedLabel;

        console.log('Author Match:', authorMatch);
        console.log('Label Match:', labelMatch);

        if (authorMatch && labelMatch) {
            issueItem.style.display = 'block';
        } else {
            issueItem.style.display = 'none';
        }
    });
}

// Event listeners for filter changes
authorFilter.addEventListener('change', updateIssueDisplay);
labelFilter.addEventListener('change', updateIssueDisplay);
