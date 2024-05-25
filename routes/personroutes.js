const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


router.get('/', async (req,res)=>{
    try{
      const data= await Person.find();
      console.log('data fetched succcessfully');
        res.status(200).json(data);
    }
    catch(err)
    {
      console.log('error fetching person', err);
      res.status(500).json({err:'Internal Server Error'});
    
    }
  });

router.post('/', async (req,res) =>{
    /*const data = req.body
  
    const newPerson = new Person(data);
    newPerson.save((error , savedPerson)=>{
      if(error){
        console.log('error saving person', error);
        res.status(500).json({error:'Internal Server Error'})
  
      }
      else{
        console.log('data saved succcessfully');
        res.status(200).json(savedPerson);
      }
    })*/
    try{
      const data = req.body
  
      const newPerson = new Person(data);
  
      const response = await newPerson.save();
      console.log('data saved succcessfully');
        res.status(200).json(response);
    }
  
    catch(err)
    {
      console.log('error saving person', err);
      res.status(500).json({err:'Internal Server Error'});
    }
  
  });


router.get('/:workType', async (req, res) => {
    try {
    const workType = req.params.workType; // Extract the work type from the URL parameter
    // Assuming you already have a Person model and MongoDB
    //connection set up
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter')
        {
          const response= await Person.find({work:workType});
          console.log('data fetched using work successfully')
          res.status(200).json(response);
        }
        else{
          res.status(404).json({ error: 'Internal no data regarding this error' });
        }
    //const persons = await Person.find({ work: workType });
    // Send the list of persons with the specified work type as a JSON response
    
    } catch (error) {
    console.log('Error fetching persons:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });

router.put('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonId = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonId,{
            new: true, // Return the updated document
            runValidators: true,
        });

        if (!response) {
            return res.status(404).json({ error: 'Person not found'});
    }
    console.log('data updated successfully')
          res.status(200).json(response);
}
    catch(error)
    {console.log('Error updating persons:', error);
    res.status(500).json({ error: 'Internal server error' });

    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found'});
    }
    console.log('data deleted successfully')
          res.status(200).json(response);
    }
    catch(error)
    {
        console.log('Error deleting person', error);
        res.status(500).json({ error: 'Internal server error' })
    }
})

    module.exports = router;
