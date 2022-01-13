using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peetsShope.Model
{
    public class Animal:Product
    {
        public DateTime DateOfBirth { get; set; }
        public Type Type { get; set; }
        public float Weight { get; set; }
        public int Size { get; set; }
        public int Age { get; set; }
    }
}
