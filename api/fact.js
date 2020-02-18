const WikiFakt = require('wikifakt');
  
module.exports = async (req, res) => {
  const fact = WikiFakt.getRandomFact()
	
  res.status(200).send(fact);
};
