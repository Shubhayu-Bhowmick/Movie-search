
      function result(){
        document.getElementById('list').innerHTML = ''
        const movie = document.getElementById('search-box').value
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ee0fda42e1msh022f1cb0938dbc9p155a64jsnebaf7c97ca07',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    
    fetch(`https://ott-details.p.rapidapi.com/search?title=${movie}&page=1`, options)
        .then(response => response.json())
        .then(data => data.results.map(arr => {
              return(
              document.getElementById('list').innerHTML += `<div class="card">
              <img src="${arr.imageurl}" id="poster"/>
              <div class="info">
                  <div class="first">
                  <h2 id="title">${arr.title}</h2>
                  <span id="rating">${arr.released}</span>
                  </div>
              </br>
                  <div class="second">
                  <span id="duration">${arr.type}</span>
                  <span id="genre">${arr.genre}</span>
                   Add
                  </div>
                  <p id="description">${arr.synopsis}</p>
                 
              </div>
          </div>`
    
              )
              }
        ))
    }