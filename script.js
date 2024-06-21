// script.js

function showCommentBox(button) {
  // Find the comment box container
  const commentBoxContainer = button.nextElementSibling;

  // Clear the comment box container
  commentBoxContainer.innerHTML = '';

  // Create a textarea for the comment
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Write your comment here...';

  // Create a submit button
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit Comment';
  submitButton.onclick = function() {
    submitComment(button, textarea.value);
  };

  // Append textarea and submit button to the comment box container
  commentBoxContainer.appendChild(textarea);
  commentBoxContainer.appendChild(submitButton);
}

function submitComment(button, comment) {
  if (!comment) {
    alert('Please write a comment before submitting.');
    return;
  }

  // Find the comments container
  const commentsContainer = button.parentElement.querySelector('.comments');

  // Create a new comment div
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  commentDiv.textContent = comment;

  // Prepend the new comment to the comments container
  commentsContainer.prepend(commentDiv);

  // Clear the comment box
  const commentBoxContainer = button.parentElement.querySelector('.comment-box');
  commentBoxContainer.innerHTML = '';
}
