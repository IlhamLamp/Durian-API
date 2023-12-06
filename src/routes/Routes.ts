import express from 'express';

import RoleController from '../controllers/RoleController';
import UserController from '../controllers/UserController';

import UserValidation from '../middleware/validation/UserValidation';
import Authorization from '../middleware/Authorization';
import SupplierController from '../controllers/SupplierController';
import BarangController from '../controllers/BarangController';
import TransaksiController from '../controllers/TransaksiController';

const router = express.Router();

// roles
router.get("/role", Authorization.Authenticated, RoleController.GetRole);
router.post("/role", Authorization.Authenticated, Authorization.AdminRole, RoleController.CreateRole);
router.get("/role/:id", Authorization.Authenticated, Authorization.AdminRole, RoleController.GetRoleById);
router.patch("/role/:id", Authorization.Authenticated, Authorization.AdminRole, RoleController.UpdateRole);
router.delete("/role/:id", Authorization.Authenticated, Authorization.SuperUser, RoleController.DeleteRole);

// users
router.post("/user/signup", UserValidation.RegisterValidation, UserController.Register)
router.post("/user/login", UserController.UserLogin);
router.get("/user/refresh-token", UserController.RefreshToken);
router.get("/user/current-user", Authorization.Authenticated, UserController.UserDetail);
router.get("/user/logout", Authorization.Authenticated, UserController.UserLogout);
// router.get("/users", Authorization.Authenticated, Authorization.SuperUser, UserController.GetAllUsers);

// suppliers
router.get("/supplier", Authorization.Authenticated, Authorization.AdminRole, SupplierController.GetSupplier);
router.post("/supplier", Authorization.Authenticated, Authorization.AdminRole, SupplierController.CreateSupplier);
router.get("/supplier/:id", Authorization.Authenticated, Authorization.AdminRole, SupplierController.GetSupplierById);
router.patch("/supplier/:id", Authorization.Authenticated, Authorization.AdminRole, SupplierController.UpdateSupplier);
router.delete("/supplier/:id", Authorization.Authenticated, Authorization.AdminRole, SupplierController.DeleteSupplier);

// products
router.get("/product", Authorization.Authenticated, Authorization.AdminRole, BarangController.GetBarangs);
router.post("/product", Authorization.Authenticated, Authorization.AdminRole, BarangController.CreateBarangs);
router.get("/product/search/", Authorization.Authenticated, Authorization.AdminRole, BarangController.SearchBarang);
router.get("/product/:id", Authorization.Authenticated, Authorization.AdminRole, BarangController.GetBarangsById);
router.patch("/product/:id", Authorization.Authenticated, Authorization.AdminRole, BarangController.UpdateBarangs);
router.delete("/product/:id", Authorization.Authenticated, Authorization.AdminRole, BarangController.DeleteBarangs);

// transaksi
router.get("/barang-masuk", Authorization.Authenticated, Authorization.AdminRole, TransaksiController.GetTransaksiMasuk);
router.post("/barang-masuk", Authorization.Authenticated, Authorization.AdminRole, TransaksiController.BarangMasuk);
router.get("/barang-keluar", Authorization.Authenticated, Authorization.AdminRole, TransaksiController.GetTransaksiKeluar);
router.post("/barang-keluar", Authorization.Authenticated, Authorization.AdminRole, TransaksiController.BarangKeluar);

export default router;