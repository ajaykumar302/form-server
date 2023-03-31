const Form = require('../models/Form');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const formData = new Form({
        userName: req.body.userName,
        phoneNum: req.body.phoneNum,
        email: req.body.email,
        plan: req.body.plan,
        planCycle: req.body.planCycle,
        planFee: req.body.planFee,
        addons: {
            onlineService: req.body.addons.onlineService,
            customize: req.body.addons.customize,
            largerStorage: req.body.addons.largerStorage
        },
        total: req.body.total
    });

    try {
        await formData.save();
        res.status(200).json('Form data saved successfully');
    } catch (error) {
        console.log(error);
        res.status(500).json('Error saving form data', error);
    }
});
module.exports = router;