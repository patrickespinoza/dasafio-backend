const express = require("express");

const userUseCase = require("../useCases/user.useCases");
const auth = require("../middlewares/auth.middlewares");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const user = await userUseCase.getAll();
    response.json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const useCreate = await userUseCase.create(request.body);
    response.json({
      success: true,
      data: {
        user: useCreate,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
