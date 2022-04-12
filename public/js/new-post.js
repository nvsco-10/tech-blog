const addPost = async () => {
    const response = await fetch('/dashboard/newpost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#add-post').addEventListener('click', addPost);
  