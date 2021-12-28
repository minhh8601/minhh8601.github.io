using AutoMapper;
using FashionShop.Model.Models;
using FashionShop.Service;
using FashionShop.Web.Infrastructure.Core;
using FashionShop.Web.Models;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace FashionShop.Web.Controllers
{
    public class PostController : Controller
    {
        IPostService _postService;
        IProductService _productService;
       
        public PostController(IPostService postService, IProductService productService)
        {
            _postService = postService;
            _productService = productService;
        }
        // GET: Post
        public ActionResult Index(int page = 1)
        {
            int pageSize = 7;
            int totalRow = 0;
            var postModel = _postService.GetListPost(page, pageSize, out totalRow);
            var postViewModel = Mapper.Map<IEnumerable<Post>, IEnumerable<PostViewModel>>(postModel);
            int totalPage = (int)Math.Ceiling((double)totalRow / pageSize);

           
            var paginationSet = new PaginationSet<PostViewModel>()
            {
                Items = postViewModel,
                MaxPage = 5,
                Page = page,
                TotalCount = totalRow,
                TotalPages = totalPage
            };
            return View(paginationSet);
        }

        public ActionResult Detail(int id)
        {          
            var postModel = _postService.GetById(id);
            var viewModel = Mapper.Map<Post, PostViewModel>(postModel);

            var HotProduct = _productService.GetHotProduct(5);
            ViewBag.HotProducts = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(HotProduct);

            return View(viewModel);
        }
    }
}