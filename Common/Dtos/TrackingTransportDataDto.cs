using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Dtos
{
   public class TrackingTransportDataDto
    {
        public int Id { get; set; }
        public string Place { get; set; }
        public string Time { get; set; }
        public int Speed { get; set; }
    }
}
