const addPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  if (title && content) {

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to add post.');
    }

  };

}
  
  document.querySelector('#addpost').addEventListener('click', addPost);
  