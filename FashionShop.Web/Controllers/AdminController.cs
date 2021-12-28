using FashionShop.Data;
using FashionShop.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FashionShop.Web.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }

        private FashionShopDbContext db;
        public AdminController()
        {
            db = new FashionShopDbContext();
        }
        // GET: AngularJS

        public JsonResult get()
        {
            var users = db.Products.ToList();
            return Json(users, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Details(int id)
        {
            var user = db.Products.Find(id);
            return Json(user, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(Product product)
        {
            Product newProduct = new Product();
            newProduct.Name = product.Name;
            newProduct.Alias = product.Alias;
            newProduct.ProductCategory = product.ProductCategory;
            newProduct.Price = product.Price;
            newProduct.PromotionPrice = product.PromotionPrice;
            newProduct.Status = product.Status;
            newProduct.CreatedDate = DateTime.Now;
            var entity = db.Products.Add(newProduct);
            db.SaveChanges();
            return Json(new
            {
                data = entity
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Edit(Product product)
        {
            var entity = db.Products.Find(product.ID);
            entity.ProductCategory = product.ProductCategory;
            entity.Name = product.Name;
            entity.Price = product.Price;
            entity.PromotionPrice = product.PromotionPrice;
            entity.Alias = product.Alias;
            entity.Status = product.Status;
            db.SaveChanges();
            return Json(new
            {
                data = entity
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Delete(int id)
        {
            var product = db.Products.Find(id);
            db.Products.Remove(product);
            db.SaveChanges();
            return Json(null);
        }
    }
}
