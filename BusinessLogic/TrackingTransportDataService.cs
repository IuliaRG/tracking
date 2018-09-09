using Common.Contracts;
using System;
using System.Collections.Generic;
using System.Text;
using Common.Dtos;
using Common.Entities;
using AutoMapper;
using System.Linq;

namespace BusinessLogic
{
    public class TrackingTransportDataService : ITrackingTransportDataService
    {

        protected IRepository<TrackingTransportData> _transportDataRepository;
        protected IMapper _mapper;
        public TrackingTransportDataService(IRepository<TrackingTransportData> transportDataRepository, IMapper mapper)
        {
            _transportDataRepository = transportDataRepository;
            _mapper = mapper;


        }
        public void AddTrackingTransportData(TrackingTransportDataDto trackingTransportData)
        {

            var trackingTransportDataEntity = _mapper
            .Map<TrackingTransportData>(trackingTransportData);
            _transportDataRepository.Insert(trackingTransportDataEntity);
            _transportDataRepository.Save();
        }

        public IEnumerable<TrackingTransportDataDto> GetTrackingTransportByDate(string firstDate, string secondDate)
        {
            var transportDataEntity = _transportDataRepository.GetAll().Where(it => (it.Time.Date>= DateTime.Parse(firstDate).Date) && (it.Time.Date<=DateTime.Parse(secondDate).Date)).ToList();
            var trackingTransportData = _mapper
             .Map<IEnumerable<TrackingTransportDataDto>>(transportDataEntity);
            return trackingTransportData;
        }

        public IEnumerable<TrackingTransportDataDto> GetTrackingTransportData()
        {
            var transportDataEnitiy = _transportDataRepository.GetAll().ToList();
            var trackingTransportData = _mapper
              .Map<IEnumerable<TrackingTransportDataDto>>(transportDataEnitiy);
            return trackingTransportData;
        }

        public TrackingTransportDataDto GetTrackingTransportDataById(int id)
        {
            var trackingTransportDataEntity = _transportDataRepository.GetAll().FirstOrDefault(it => it.Id == id);
            var trackingTransportData = _mapper
            .Map<TrackingTransportDataDto>(trackingTransportDataEntity);
            return trackingTransportData;
        }

    }
}
