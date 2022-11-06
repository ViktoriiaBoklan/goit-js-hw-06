const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  data.email = data.email.trim().toLowerCase();
for (const [key, value] of Object.entries(data)) {
    if (value !== '') continue;
    elements[key].focus();
    alert('All fields have to be filled in');
    return;
  }
  console.log(data);
