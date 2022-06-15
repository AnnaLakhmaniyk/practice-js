document.querySelector(".js-search-form").addEventListener("submit",(function(t){t.preventDefault();const e=t.target.query.value.trim();if(console.log(e),""===e)return alert("заповніть поле");(r=e,fetch(`https://api.github.com/users/${r}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))).then((t=>{}));var r}));
//# sourceMappingURL=fetch.9c3aee26.js.map
