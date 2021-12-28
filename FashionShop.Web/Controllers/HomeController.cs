using AutoMapper;
using FashionShop.Data;
using FashionShop.Model.Models;
using FashionShop.Service;
using FashionShop.Web.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace FashionShop.Web.Controllers
{
    public class HomeController : Controller
    {

        private readonly FashionShopDbContext db;
        IProductCategoryService _productCategoryService;

        public HomeController(IProductCategoryService productCategoryService)
        {
            db = new FashionShopDbContext();
            _productCategoryService = productCategoryService;
        }

        [OutputCache(Duration = 60, Location = System.Web.UI.OutputCacheLocation.Client)]
        public ActionResult Index()
        {
            var productHot = db.Products.OrderByDescending(x => x.CreatedDate).Where(x => x.HotFlag == true && x.HomeFlag == true && x.Status == true).ToList().Take(8);
            var responseProductHot = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(productHot);
            ViewBag.responseProductHot = responseProductHot;

            var ProductBanphim = db.Products.OrderByDescending(x => x.CreatedDate).Where(x => x.Type == "BPG" && x.Status==true && x.HomeFlag==true).ToList().Take(8);
            var responseProductBanphim = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(ProductBanphim);
            ViewBag.responseProductBanphim = responseProductBanphim;

            var ProductChuot = db.Products.OrderByDescending(x => x.CreatedDate).Where(x => x.Type == "CG" && x.Status == true && x.HomeFlag == true).ToList().Take(8);
            var responseProductChuot = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(ProductChuot);
            ViewBag.responseProductChuot = responseProductChuot;

            var productTainghe = db.Products.OrderByDescending(x => x.CreatedDate).Where(x => x.Type == "TG" && x.Status == true && x.HomeFlag == true).ToList().Take(8);
            var responseProductTainghe = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(productTainghe);
            ViewBag.responseProductTainghe = responseProductTainghe;

            var post = db.Posts.OrderByDescending(x => x.CreatedDate).Where(x => x.HotFlag == true && x.HomeFlag == true && x.Status == true).ToList().Take(6);
            var postView= Mapper.Map<IEnumerable<Post>, IEnumerable<PostViewModel>>(post);
            ViewBag.PostView = postView;

            return View();
        }

        public ActionResult Search(string keyword)
        {

            var productModel = db.Products.OrderByDescending(x => x.CreatedDate).Where(x => x.Name.Contains(keyword)).ToList();          
          
            return View(productModel);
        }

        [ChildActionOnly]
        public ActionResult Header()
        {
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Category()
        {
            var model = _productCategoryService.GetAll();
            var listProductCategoryViewModel = Mapper.Map<IEnumerable<ProductCategory>, IEnumerable<ProductCategoryViewModel>>(model);
            return PartialView(listProductCategoryViewModel);
        }

        [ChildActionOnly]
        [OutputCache(Duration = 3600)]
        public ActionResult Footer()
        {
            return PartialView();
        }

    }
}