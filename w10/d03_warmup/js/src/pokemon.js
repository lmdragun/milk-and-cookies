var pokemon = {

  pokemonList : allPokemon,

  printAllPokemonNamesToConsole : function(){
    _.each(allPokemon, function(poke){
      console.log(poke.name);
    });
  },

  findPokemonByName : function(name){
    return _.findWhere(allPokemon, {name:name})

  },

  findStrongestPokemon : function(){
    return _.max(allPokemon, function(poke){
      return parseInt(poke.stats.spattack)
    })
  },

  findPokemonByType : function(type){
   return _.findWhere(allPokemon, {type:type})
  },

  findAllTypes : function(){
  }

}
