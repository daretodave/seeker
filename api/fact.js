conat WikiFakt = require('wikifakt');
  
module.exports = async (req, res) => {
  WikiFakt
    .getRandomFact()
    .then(fact => res.status(200).send(fact))
	
};
