fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=42.98%2C-81.25", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
		"x-rapidapi-key": '78f85b7b41msh23461f7d0f97e63p1b3ddajsna0629e398be9'
	}
})
.then(response => response.json())
.then(response => {
    //console.log(response);
  //  console.log(response.content);
    
     document.getElementById('box1').innerHTML = response.location.name;
     document.getElementById('box2').innerHTML = '- ' + response.current.temp_c + ' -';
})
.catch(err => {
	console.log(err);
});