using System;
using FashionShop.Data.Infrastructure;
using FashionShop.Model.Models;
using System.Linq;


namespace FashionShop.Data.Repositories
{
    public interface IOrderDetailRepository :  IRepository<OrderDetail>
    {
        OrderDetail GetOrderDetailByCustomerEmail(string email);
    }

    public class OrderDetailRepository : RepositoryBase<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public OrderDetail GetOrderDetailByCustomerEmail(string email)
        {
            var query = from od in DbContext.OrderDetails
                        join o in DbContext.Orders
                        on od.OrderID equals o.ID
                        where o.CustomerEmail==email
                        select od;
            return query.FirstOrDefault();
        }
    }
}