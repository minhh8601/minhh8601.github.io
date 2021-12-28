using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FashionShop.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        FashionShopDbContext Init();
    }
}
