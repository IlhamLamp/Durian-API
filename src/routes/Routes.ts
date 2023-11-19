import express from 'express';
import RoleController from '../controllers/RoleController'

const router = express.Router();

router.get("/role", RoleController.GetRole);
router.post("/role", RoleController.CreateRole);
router.get("/role/:id", RoleController.GetRoleById);
router.patch("/role/:id", RoleController.UpdateRole);
router.delete("/role/:id", RoleController.DeleteRole);

export default router;