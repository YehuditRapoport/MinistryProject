using Project.Core.Models;

namespace Project.Core.Repositories
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetListAsync();
        Task<Category> GetAsync(int id);

    }
}
