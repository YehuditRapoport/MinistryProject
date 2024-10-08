using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.Core.DTOs;
using Project.Core.Models;
using Project.Core.Services;
using Project_api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {


        private readonly ICategoryService _category;
        private readonly IMapper _mapper;
        
        public CategoryController(ICategoryService CategoryService, IMapper mapper)
        {
            _category = CategoryService;
            _mapper = mapper;
        }
        // GET: api/<OrderController>
        [HttpGet]
        public async Task<IEnumerable<Category>> GetAsync()
        {
            return await _category.GetAllAsync();
        }

        // GET api/<OrderController>/5
        [HttpGet("{id}")]
        public async Task<Category> GetAsync(int id)
        {
            var category = await _category.GetAsync(id);
            var categoryDbo = _mapper.Map<CategoryDto>(category);

            return category;
        }

       
    }
}
