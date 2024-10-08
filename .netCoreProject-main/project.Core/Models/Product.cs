using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Core.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; } = 1;
        public bool AddedToCart { get; set; } = false;
        public int CategoryId { get; set; }
       // public Category Category { get; set; }
    }
}
