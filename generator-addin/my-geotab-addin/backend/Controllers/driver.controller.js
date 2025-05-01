const driverModel = require ('../models/driverModel')

module.exports.createDriver = async(req,res,next)=>{

    console.log('hello')

    const {companyName , automatedLicenceCheck , driverNumber , surname , contactNo , driverGoups , depotChangeAllowed , driverStatus , driverLicenceCheck , driverDOB , contactEmail , depotName } = req.body;

    console.log(req.body)

    const isDriverAlreadyExists = await driverModel.findOne({contactEmail})

    if (isDriverAlreadyExists) {
        return res.status(400).json({ message: "driver already exist" })
    }

    await driverModel.create({
        companyName , automatedLicenceCheck , driverNumber , surname , contactNo , driverGoups , depotChangeAllowed , driverStatus , driverLicenceCheck , driverDOB , contactEmail , depotName
    })

    return res.status(200).json({ message: "driver created successfully" })

}



