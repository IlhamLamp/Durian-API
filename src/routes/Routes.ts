import express from 'express';

import RoleController from '../controllers/RoleController';
import UserController from '../controllers/UserController';

import UserValidation from '../middleware/validation/UserValidation';
import Authorization from '../middleware/Authorization';

const router = express.Router();

// roles
router.get("/role", Authorization.Authenticated, RoleController.GetRole);
router.post("/role", RoleController.CreateRole);
router.get("/role/:id", RoleController.GetRoleById);
router.patch("/role/:id", RoleController.UpdateRole);
router.delete("/role/:id", RoleController.DeleteRole);

// users
router.post("/user/signup", UserValidation.RegisterValidation, UserController.Register)
router.post("/user/login", UserController.UserLogin);
router.get("/user/refresh-token", UserController.RefreshToken);
router.get("/user/current-user", Authorization.Authenticated, UserController.UserDetail);
router.get("/user/logout", Authorization.Authenticated, UserController.UserLogout);


export default router;