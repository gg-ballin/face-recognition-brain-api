const handleProfile = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({id})
    .then(user => {
      if (user.length > 1) {
        res.json(user[0])
      } else {
        res.status(400).json('4000004 NOT FOUND BOI')
      }
    }) 
  }

  module.exports = {
    handleProfile: handleProfile
  }

