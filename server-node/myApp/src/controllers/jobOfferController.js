const db = require('../database/models');

const jobOfferController = {
    create: (req, res) => {
        //res.json("Metodo creación de una Oferta Laboral");
        console.log(req.body);

        db.JobOffer.findOne({where: {
            id_Speciality: req.body.id_Speciality,
            id_Recruiter: req.body.id_Recruiter,
            id_Talent: null
        }})
        .then((jobOffer) => {
            if(jobOffer) {
                console.log('Esta oferta de trabajo ya existe');
                return res.status(202).json({message: 'Esta oferta de trabajo ya existe'});
            }
            else {
                db.JobOffer.create({
                    title: req.body.title,
                    description: req.body.description,
                    location: req.body.location,
                    id_Recruiter: req.body.id_Recruiter,
                    id_Schedule: req.body.id_Schedule,
                    id_Remote: req.body.id_Remote,
                    id_Talent: null,
                    id_Seniority: req.body.id_Seniority,
                    id_Experience: req.body.id_Experience,
                    id_Speciality: req.body.id_Speciality
                })
                .then((jobOffer) => {
                    console.log('Oferta de trabajo creada');
                    res.status(201).json({message: 'Oferta de trabajo creada'});
                })
                .catch(function(error){
                    console.log("No se pudo crear el registro en nuestra base de datos", error);
                })
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    },

    update: (req, res) => {
        res.json("Metodo actualizacion de una Oferta Laboral");
    },

    destroy: (req, res) => {
        res.json("Metodo para eliminar una Oferta Laboral");
    },

    show: (req, res) => {
        res.json("Metodo para mostrar una Oferta Laboral por el ID");
    },

    index: (req, res) => {
        res.json("Metodo para mostarr todas las ofertas laborales");
    }
    
}

module.exports = jobOfferController;