document.querySelector(".js-search-form").addEventListener("submit",(function(t){t.preventDefault();var e,r=t.target.query.value.trim();if(console.log(r),""===r)return alert("заповніть поле");(e=r,fetch("https://api.github.com/users/".concat(e)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))).then((function(t){}))}));
//# sourceMappingURL=fetch.f98d4cc8.js.map
