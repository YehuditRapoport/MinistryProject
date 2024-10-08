using Project.Core.Models;

namespace Project_api.Models
{
    public class ProductPostModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; } = 1;
        public bool AddedToCart { get; set; } = false;
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
