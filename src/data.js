const data = [  
    {name:"Ram", email:"Ram@gmail.com"},  
    {name:"Bob", email:"bob32@gmail.com"}  
]  


const options = {
	method: 'GET',
  maxLimit : '40',
	headers: {
		'X-RapidAPI-Key': '6bb345d316mshb1930f14a086b6fp1044e1jsnb88ed0536aad',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

let b = `  data.map((i)=>{
  return (<Test name={i.name} email={i.email}></Test>)
})



{
      


  fetch('https://covid-193.p.rapidapi.com/countries', options)
	.then(response => response.json())
  
  .then(data => console.log(data.response.map((i)=>{
    return (<Test name = {i}></Test>)
  })))
	.catch(err => console.error(err))

    }` 

export default data;