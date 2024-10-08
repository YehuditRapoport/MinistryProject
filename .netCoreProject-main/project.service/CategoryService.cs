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
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _CategoryRepository;

        public CategoryService(ICategoryRepository userRepository)
        {
            _CategoryRepository = userRepository;
        }

        public async Task<List<Category>> GetAllAsync(string? text = "")
        {
            
            return await _CategoryRepository.GetListAsync();

        }
        public async Task<Category> GetAsync(int id)
        {
            return await _CategoryRepository.GetAsync(id);
        }

    }
}
