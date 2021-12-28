using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FashionShop.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        private FashionShopDbContext dbContext;

        public FashionShopDbContext Init()
        {
            return dbContext ?? (dbContext = new FashionShopDbContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
