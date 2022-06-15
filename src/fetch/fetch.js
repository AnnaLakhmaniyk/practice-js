const inputEl = document.querySelector('.js-search-form');

inputEl.addEventListener('submit', onSearchUser);

const fetchUser = name => {
  return fetch(`https://api.github.com/users/${name}`).then(respose => {
    if (!respose.ok) {
      throw new Error(respose.statusText);
    }
    return respose.json();
  });
};

function onSearchUser(event) {
  event.preventDefault();
  const inputValue = event.target.query.value.trim();
  console.log(inputValue);
  if (inputValue === '') {
    return alert('заповніть поле');
  }

  fetchUser(inputValue).then(user => {});
}
