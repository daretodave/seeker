conat WikiFakt = require('wikifakt');
  
module.exports = async (req, res) => {
  const fact = await WikiFakt.getRandomFact();
	
  res.status(200).send(fact);
};
