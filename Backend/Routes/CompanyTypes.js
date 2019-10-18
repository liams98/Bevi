import app from "../app.js";
import initCompanyTypeController from "../Controllers/TypesController.js";

const initCompanyTypeRoutes = async () => {
  const controller = await initCompanyTypeController();

  app.get("/companies/types", async (req, res, next) => {
    try {
      let types = await controller.getCompanyTypes();

      res.send({
        success: true,
        CompanyTypes: types
      });
    } catch (err) {
      next(err);
    }
  });

  app.get("/companies/type/:id?", async (req, res, next) => {
    try {
      const Id = req.params.id;
      const type = await controller.getCompanyTypeById(Id);
      res.send({
        success: true,
        Type: type
      });
    } catch (err) {
      next(err);
    }
  });
};
export default initCompanyTypeRoutes;
