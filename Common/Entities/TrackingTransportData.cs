using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Common.Entities
{
   public class TrackingTransportData
    {
        [Key]
        public int Id { get; set; }
        public string Place { get; set; }
        public DateTime Time { get; set; }
        public int Speed { get; set; }
    }
}
