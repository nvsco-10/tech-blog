const addComment = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment').value;

  // https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
  const pathLength = window.location.pathname.split('/').length;
  const postId = window.location.pathname.split('/')[pathLength - 1];

  if (comment) {

    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, postId }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment.');
    }

  };

}
  
document.querySelector('#addcomment').addEventListener('click', addComment);