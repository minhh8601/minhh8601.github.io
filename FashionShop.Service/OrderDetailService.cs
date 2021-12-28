using FashionShop.Data.Infrastructure;
using FashionShop.Data.Repositories;
using FashionShop.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FashionShop.Service
{
    public interface IOrderDetailService
    {
        OrderDetail GetOrderDetailByCustomerEmail(string email);
    }
    public class OrderDetailService : IOrderDetailService
    {
        IOrderRepository _orderRepository;
        IOrderDetailRepository _orderDetailRepository;
        IUnitOfWork _unitOfWork;

        public OrderDetailService(IOrderRepository orderRepository, IOrderDetailRepository orderDetailRepository, IUnitOfWork unitOfWork)
        {
            this._orderRepository = orderRepository;
            this._orderDetailRepository = orderDetailRepository;
            this._unitOfWork = unitOfWork;
        }

        public OrderDetail GetOrderDetailByCustomerEmail(string email)
        {
            return _orderDetailRepository.GetOrderDetailByCustomerEmail(email);
        }
    }
}
