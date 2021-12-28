using System.Web.Mvc;
using System.Web.Routing;

namespace FashionShop.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
              name: "Search",
              url: "tim-kiem",
              defaults: new { controller = "Product", action = "Search", id = UrlParameter.Optional }
           );

            routes.MapRoute(
             name: "Contact",
             url: "lien-he",
             defaults: new { controller = "Contact", action = "Index", id = UrlParameter.Optional }
          );

            routes.MapRoute(
             name: "Cart",
             url: "gio-hang",
             defaults: new { controller = "ShoppingCart", action = "Index", id = UrlParameter.Optional }
          );

            routes.MapRoute(
             name: "DetailProduct",
             url: "san-pham/{alias}/{id}",
             defaults: new { controller = "Product", action = "Detail", id = UrlParameter.Optional }
         );

            routes.MapRoute(
             name: "DetailPost",
             url: "tin-tuc/{alias}/{id}",
             defaults: new { controller = "Post", action = "Detail", id = UrlParameter.Optional }
         );

            routes.MapRoute(
              name: "ProductBanphim",
              url: "san-pham-BPG",
              defaults: new { controller = "Product", action = "ProductBanphim", id = UrlParameter.Optional }
          );

            routes.MapRoute(
                name: "ProducChuot",
                url: "san-pham-CG",
                defaults: new { controller = "Product", action = "ProductChuot", id = UrlParameter.Optional }
         );

            routes.MapRoute(
              name: "ProductTainghe",
              url: "san-pham-TG",
              defaults: new { controller = "Product", action = "ProductTainghe", id = UrlParameter.Optional }
          );
            routes.MapRoute(
               name: "Register",
               url: "dang-ky",
               defaults: new { controller = "Account", action = "Register", id = UrlParameter.Optional }
         );
            routes.MapRoute(
               name: "Login",
               url: "dang-nhap",
               defaults: new { controller = "Account", action = "Login", id = UrlParameter.Optional }
         );

            routes.MapRoute(
                name: "Product Category Banphim",
                url: "danh-muc/BPG/{alias}/{id}",
                defaults: new { controller = "Product", action = "CategoryBanphim", id = UrlParameter.Optional },
                namespaces: new string[] { "Fashion.Web.Controllers" }
         );

            routes.MapRoute(
                name: "Product Category Chuot",
                url: "danh-muc/CG/{alias}/{id}",
                defaults: new { controller = "Product", action = "CategoryChuot", id = UrlParameter.Optional },
                namespaces: new string[] { "Fashion.Web.Controllers" }
         );

            routes.MapRoute(
                name: "Product Category Tainghe",
                url: "danh-muc/TG/{alias}/{id}",
                defaults: new { controller = "Product", action = "CategoryTainghe", id = UrlParameter.Optional },
                namespaces: new string[] { "Fashion.Web.Controllers" }
         );

            routes.MapRoute(
               name: "Post",
               url: "tin-tuc",
               defaults: new { controller = "Post", action = "Index", id = UrlParameter.Optional }
           );

            routes.MapRoute(
                name: "Home",
                url: "trang-chu",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
