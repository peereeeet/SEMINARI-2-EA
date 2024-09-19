const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('ID usuari: ', (sign) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${sign}`)
    .then((response) => response.json())
    .then((user) => {
      if (user.id) {
        const vect = [user];
        console.log(vect);

        const fullnames = vect.map((user) => user.name + " (" + user.username + ")");
        console.log("Noms: ", fullnames);
      } else {
        console.log('Usuari no es troba');
      }
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${sign}`)
      .then((response) => response.json())
      .then((posts) => {
        console.log('Posts: ', posts);
        const postTitles = posts.map((post) => post.title);
        console.log('Titols: ', postTitles);
          const longPosts = posts.filter((post) => post.title.length > 20);
          console.log('Posts amb titols: ', longPosts);

          const totalTitleLength = posts.reduce((acc, post) => acc + post.title.length, 0);
          console.log('Total de caracters: ', totalTitleLength);
    })
    });
});

