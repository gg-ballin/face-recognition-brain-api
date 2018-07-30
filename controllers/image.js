const Clarifai = require ('clarifai');


const app = new Clarifai.App({
  apiKey: 'd68829c13e7a467182f8c33314544851'
 });

const handleAPICall = (req,res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data => {
      res.json(data);
    }).catch(err => res.status(400).json("Unable to work with API"))
}
 
const handleImage = (req, res,db) => {
        const { id } = req.body;
        db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then (entries => {
          res.json(entries[0]);
        })
        .catch(err => res.status(400).json('Couldnt get anything'))
      }

    
module.exports = {
    handleImage,
    handleAPICall
}