import Flight from "../models/flightsM.js";

export const createFlight = async(req,res,next)=>{
    const newFlight=new Flight (req.body)

    try{
        const savedFlight = await newFlight.save()
        res.status(200).json(savedFlight)
    }catch(e){
        next(e)
    }
}
export const updateFlight = async(req,res,next)=>{
    try{
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id,{ $set :req.body},{new:true})
        res.status(200).json(updateFlight)
    }catch(e){
        next(e)
    }
};
export const deleteFlight = async (req, res, next) => {
    try {
      await Flight.findByIdAndDelete(req.params.id);
      res.status(200).json("Flight has been deleted.");
    } catch (e) {
      next(e);
    }
};
  export const getFlight = async (req, res, next) => {
    try {
      const flight = await Flight.findById(req.params.id);
      res.status(200).json(flight);
    } catch (e) {
      next(e);
    }
};
export const getflights = async (req, res, next) => {
    try {
      const flights = await Flight.find();
      
      res.status(200).json(flights);
    } catch (err) {
      next(err);
    }
  };
