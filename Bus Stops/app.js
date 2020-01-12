function getInfo() {
   
    const busStops = document.getElementById('buses');
    const stopName = document.getElementById('stopName');
    const input = document.getElementById('stopId');

    const url = `https://judgetests.firebaseio.com/businfo/${input.value}.json`

    busStops.textContent = '';
    stopName.textContent = '';
   
   fetch(url)
   .then(res => res.json())
   .then(data => {
       const {buses , name} = data;
       stopName.textContent = name;
       Object.entries(buses)
       .forEach(([busID, busTime]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${busID} arrives in ${busTime} minutes`;
            busStops.appendChild(li);
       });
   })
   .catch((e) => {
       stopName.textContent = 'Incorect stop'
   }) 
}