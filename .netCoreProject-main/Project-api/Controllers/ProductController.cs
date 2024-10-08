using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Project.Core;
using Project.Core.DTOs;
using Project.Core.Models;
using Project.Core.Services;
using Project_api.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductServices _products;
        private readonly IMapper _mapping;
        public ProductController(IProductServices ProductService ,IMapper mapper)
        {
            _products = ProductService;
            _mapping = mapper;
        }
        // GET: api/<ProductController>
        [HttpGet]
        public async Task<List<Product>> GetAsync()
        {
            return await _products.GetAllAsync();
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetAsync(int id)
        {
            var products = await _products.GetAsync(id);
            var productDto=_mapping.Map<ProductDto>(products);
            return Ok(productDto);
        }

        // POST api/<ProductController>
        [HttpPost]
        public async Task<ActionResult> PostAsync([FromBody] Product product)
        {
          // var product = new Product { Name = prod.Name };
           return Ok(await _products.PostAsync(product));
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public async Task PutAsync(int id, [FromBody] Product prod)
        {
           await _products.PutAsync(id, prod);    
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(int id)
        {
            var prod=await _products.GetAsync(id); 
          await  _products.DeleteAsync(id);
            return NoContent();
        }
    }
}
