const KEY = '339137e558d83c942ff3ea730c97931d'

// request getdata

const getData =async(city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=339137e558d83c942ff3ea730c97931d`
    loader(true)
    const req = await fetch(base + query);
    const data = await req.json();
    loader(false)
    return data
};

