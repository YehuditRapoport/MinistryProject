using Microsoft.EntityFrameworkCore;
using Project.Core.Models;
using Project.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Data
{
    public class ProductReposetory: IProductRepository
    {
        private readonly DataContext _context;

        public ProductReposetory(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetListAsync()
        {
            return await _context.Product.ToListAsync();
        }
        public async Task<Product>GetAsync(int id)
        {

            return await _context.Product.FindAsync(id);
        }
        public async Task DeleteAsync(int id)
        {
            var o =await GetAsync(id);
            _context.Product.Remove(o);
            await _context.SaveChangesAsync();
        }
        public async Task<Product> PutAsync(int id, Product prod)
        {
        var p= await GetAsync(id);
           p.Id = prod.Id;
           p.Name = prod.Name;
            await _context.SaveChangesAsync();
            return p;
        }
        public async Task<Product> PostAsync(Product product)
        {
            var p = await _context.Product.ToListAsync();
            var productToUpdate = p.FirstOrDefault(p => p.Name == product.Name && p.CategoryId == product.CategoryId);
            if (productToUpdate != null)
            {
                productToUpdate.Quantity += product.Quantity;
                _context.Product.Update(productToUpdate);
            }
            else
                _context.Product.Add(product);
            await _context.SaveChangesAsync();

            
            return product;
        }
    }
}
