using Project.Core.Models;
using Project.Core.Repositories;
using Project.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Service
{
    public class ProductService: IProductServices
    {
        
        private readonly IProductRepository _ProductRepository;

        public ProductService(IProductRepository userRepository)
        {
            _ProductRepository = userRepository;
        }

        public async Task<List<Product>> GetAllAsync(string? text = "")
        {
           
            return await _ProductRepository.GetListAsync();
        }
        public  async Task<Product> GetAsync(int id) {

           return await _ProductRepository.GetAsync(id);
        }
        public  async Task DeleteAsync(int id) {
           await _ProductRepository.DeleteAsync(id);
        }
        public  async Task<Product> PutAsync(int id, Product prod) {
           return await _ProductRepository.PutAsync(id, prod);
        }
        public  async Task<Product> PostAsync(Product prod) {
            return await _ProductRepository.PostAsync(prod); 
        }
    }
}

