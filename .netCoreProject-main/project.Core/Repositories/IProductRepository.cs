using Project.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Core.Repositories
{
    public interface IProductRepository
    {
        Task<List<Product>> GetListAsync();
        Task<Product> GetAsync(int id);
        Task DeleteAsync(int id);
        Task<Product> PutAsync(int id, Product cust);
        Task<Product> PostAsync(Product cust);
    }
}
