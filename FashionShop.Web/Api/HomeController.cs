using FashionShop.Service;
using FashionShop.Web.Infrastructure.Core;
using System.Web.Http;

namespace FashionShop.Web.Api
{
    [RoutePrefix("api/home")]
    //[Authorize]
    public class HomeController : ApiControllerBase
    {
        IErrorService _errorService;
        private IProductService _productService;
        public HomeController(IErrorService errorService,IProductService productService) : base(errorService)
        {
            _errorService = errorService;
            _productService = productService;
        }


        [HttpGet]
        [Route("test")]
        public string TestMethod()
        {
            return "Hello";
        }

        //[Route("test")]
        //[HttpGet]
        //public HttpResponseMessage TestMethod(HttpRequestMessage request)
        //{
        //    return CreateHttpResponse(request, () =>
        //    {
        //        var model = _productService.GetAll();

        //        var responseData = Mapper.Map<IEnumerable<Product>, IEnumerable<ProductViewModel>>(model);

        //        var response = request.CreateResponse(HttpStatusCode.OK, responseData);
        //        return response;
        //    });
        //}
    }
}
