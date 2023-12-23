"use strict";

const api_key = "b00f6392d355726b2bd029c7046482ed";

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

// {string} URL API url
// {Function} callback 

export const url ={
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    // {string} query Search query example: "London", "New York"
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}