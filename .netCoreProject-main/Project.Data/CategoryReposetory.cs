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
    public class CategoryReposetory : ICategoryRepository
    {
        private readonly DataContext _context;

        public CategoryReposetory(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Category>> GetListAsync()
        {

            return await _context.Category.ToListAsync();
        }
        public async Task<Category> GetAsync(int id)
        {
            return await _context.Category.FindAsync(id);
        }

    }
}
