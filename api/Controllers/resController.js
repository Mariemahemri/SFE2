import Reservation from "../models/reservationM.js";

export const createRes = async(req,res,next)=>{
    const newRes=new Reservation (req.body)

    try{
        const savedRes = await newRes.save()
        res.status(200).json(savedRes)
    }catch(e){
        next(e)
    }
}
export const updateRes = async(req,res,next)=>{
    try{
        const updatedRes = await Reservation.findByIdAndUpdate(req.params.id,{ $set :req.body},{new:true})
        res.status(200).json(updatedRes)
    }catch(e){
        next(e)
    }
};
export const deleteRes = async (req, res, next) => {
    try {
      await Reservation.findByIdAndDelete(req.params.id);
      res.status(200).json("reservation has been deleted.");
    } catch (e) {
      next(e);
    }
};
  export const getRes = async (req, res, next) => {
    try {
      const Res = await Reservation.findById(req.params.id);
      res.status(200).json(Res);
    } catch (e) {
      next(e);
    }
};
export const getReservations = async (req, res, next) => {
    try {
      const Reservations = await Reservation.find();
      
      res.status(200).json(Reservations);
    } catch (err) {
      next(err);
    }
  };
