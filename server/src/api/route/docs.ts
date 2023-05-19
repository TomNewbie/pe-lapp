import { Router } from "express";
import swaggerDocument from "../../config/api/swagger.json";
import swaggerUI from "swagger-ui-express";

const router = Router();

// for disabling Try It Out feature due to cookie not being sent (see
// https://github.com/swagger-api/swagger-js/issues/1163) and a mock database required
const options = {
  swaggerOptions: {
    supportedSubmitMethods: [],
  },
};

router.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument, options));

export { router as docsRouter };
