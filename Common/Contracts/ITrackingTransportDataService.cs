using Common.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Contracts
{
  
        public interface ITrackingTransportDataService
        {
            void AddTrackingTransportData(TrackingTransportDataDto trackingTransportData);
            TrackingTransportDataDto GetTrackingTransportDataById(int id);
       IEnumerable<TrackingTransportDataDto> GetTrackingTransportData();
        IEnumerable<TrackingTransportDataDto> GetTrackingTransportByDate(string firstDate,  string secondDate);

    }
    
}
