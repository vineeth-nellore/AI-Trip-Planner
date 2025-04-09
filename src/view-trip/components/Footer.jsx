import { Button } from '@/components/ui/button';
import React from 'react'
import { ImAirplane } from "react-icons/im";

function Footer() {
  return (
    <div className="my-6">
      <h2 className="text-center text-gray-400 flex justify-center items-center gap-2">
        <div>
          <ImAirplane />
        </div>  
        Travel Planner App with Gemini AI
      </h2>
    </div>
  );
}

export default Footer