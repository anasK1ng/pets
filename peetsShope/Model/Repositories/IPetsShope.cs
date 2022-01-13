using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peetsShope.Model
{
     interface IPetsShope<entity>
    {
        void Add(entity entity);
        void Delete(entity entity);
        void Update(entity entity);
        entity Get(entity entity);

    }
}
