using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peetsShope.Model
{
    public class Product
    {
        public int Numero { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public float Discount { get; set; }
        public string Image { get; set; }
        public string Weight { get; set; }
        public DateTime CheckIn { get; set; }



    }
}
