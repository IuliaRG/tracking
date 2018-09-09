using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Common.Dtos;
using Common.Contracts;

namespace CoreProject.Controllers
{
    
    public class TrackingTransportDataController : Controller
    {
        // GET api/values
        private readonly ITrackingTransportDataService _trackingTransportData;
        public TrackingTransportDataController(ITrackingTransportDataService trackingTransportData)
        {
            _trackingTransportData = trackingTransportData;
        }

        [HttpPost]
        [Route("api/trackingtransportdata")]
        public void AddTrackingTransportData([FromBody] TrackingTransportDataDto trackingTransportData)
        {
            _trackingTransportData.AddTrackingTransportData(trackingTransportData);
        }


        [HttpGet]
        [Route("api/trackingtransportdata/{id}")]
        public TrackingTransportDataDto GetTrack(int id)
        {
            return _trackingTransportData.GetTrackingTransportDataById(id);
        }
        [HttpGet]
        [Route("api/trackingtransportdata/{firstDate}/{secondDate}")]
        public IEnumerable<TrackingTransportDataDto> GetAllTracksByDate(string firstDate, string secondDate)
        {
            return _trackingTransportData.GetTrackingTransportByDate(firstDate, secondDate);
        }
        [HttpGet]
        [Route("api/trackingtransportdata")]
        public IEnumerable< TrackingTransportDataDto> GetAllTracks()
        {
            return _trackingTransportData.GetTrackingTransportData();
        }


    }
}
