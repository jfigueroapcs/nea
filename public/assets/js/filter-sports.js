document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const sportsList = document.getElementById('sports-list');
    const sportsItems = Array.from(sportsList.querySelectorAll('li'));

    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      sportsItems.forEach((item) => {
        // const span = item.querySelector('span');
        // console.log('Span encontrado:', span); // Verifica si encuentra el <span>

          // console.log("====>", item.dataset.name.toLowerCase())
          const name = item.dataset.name.toLowerCase()
          const alias = item.dataset.alias.toLowerCase()
        // if (span) {
          // const name = span.dataset.name.toLowerCase();
          // const alias = span.dataset.alias.toLowerCase();
          // console.log('Datos:', { name, alias }); // Verifica los datos

          if (name.includes(searchTerm) || alias.includes(searchTerm)) {
            item.style.display = 'block';
            // item.style.background = 'blue';
          } else {
            item.style.display = 'none';
            // item.style.background = 'red';
          }
        // }
      });
    });

  });