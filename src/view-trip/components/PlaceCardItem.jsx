// import React from 'react'

// function PlaceCardItem({place}) {
//   return (
//     <div className="border rounded-xl p-3 mt-2 flex gap-5">
//       <div>
//         <h2 className="font-bold text-lg">{place.placeName}</h2>
//         <p className='text-sm text-gray-500'>{place.placeDetails}</p>
//         <h2 className='text-blue-700 text-sm'>💰{place.ticketPricing}</h2>
//         <h2 className='text-sm text-yellow-500'>⭐{place.rating}</h2>
//       </div>
//     </div>
//   );
// }

// export default PlaceCardItem

import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
    const [photoUrl, setPhotoUrl] = useState();
      useEffect(()=>{
        place && GetPlacePhoto();
      },[place]);
      const GetPlacePhoto=async()=>{
        const data = {
          textQuery: place.placeName
        };
        const result = await GetPlaceDetails(data).then(resp=>{
        //   console.log(resp.data.places[0].photos[3].name)
          const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
          setPhotoUrl(PhotoUrl);
        })
      }
    return (
        <div>
            <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName + "," + place?.geoCoordinates} target='_blank'>
                <div className='my-4 bg-gray-50 p-2 gap-2 border rounded-lg flex flex-cols-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer '>
                    <img src={photoUrl ? photoUrl : '/road-trip-vocation.jpg'} className='h-[130px] w-[130px] my-4 rounded-xl object-cover' />
                    <div className='my-2 flex flex-col gap-2'>
                        <h2 className='font-medium text-sm text-orange-600'>{place.day}</h2>
                        <h2 className='font-bold'>{place.placeName}</h2>
                        <p className='text-sm text-gray-500'>{place.placeDetails}</p>
                        <h2 className='text-blue-700 text-sm'>🎟️{place.ticketPricing}</h2>
                        <h2 className='text-sm text-yellow-500'>⭐{place.rating}</h2>
                    </div>
                    <div className='mt-36'>
                        <Button><FaMapLocationDot  /></Button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PlaceCardItem