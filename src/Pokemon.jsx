
const P = new Pokedex.Pokedex()

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let id = params.id;



P.getPokemonByName(id)
  .then(function(response) {
  })