using Project.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Core.Services
{
    public interface ICategoryService
    {
       Task< List<Category>> GetAllAsync(string? text = "");
        Task<Category> GetAsync(int id);
     
    }
}

     