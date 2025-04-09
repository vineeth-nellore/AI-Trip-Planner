import { icons } from "lucide-react";

export const SelectTravelsList=[
    {
        id: 1,
        title: 'Just Me',
        desc: 'A Solo traveller in exploration',
        icon: '🚶',
        people: '1'
    },
    {
        id: 2,
        title: 'A couple',
        desc: 'Two travllers in tandem',
        icon: '👩‍❤️‍👩',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventure',
        icon: '👨🏻‍👩🏻‍👦🏻‍👦🏻',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: '𐀪𐀪𐀪𐀪𐀪𐀪𐀪𐀪',
        people: '5 to 10 People'
    },
]

export const SelectBudgetOptions=[
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Dont worry about cost',
        icon: '💸'
    },
]

export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.'