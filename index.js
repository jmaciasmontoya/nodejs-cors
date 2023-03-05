const express = require('express');
const app = express();

const cors = require('cors');
// fetch("http://localhost:3000/users").then(req => req.text()).then(console.log)

app.use(cors({
        origin: '*'
}));

const users = [
	{
		'id': 1,
		'username': 'Andres'
	},
	{
                'id': 2,
                'username': 'Ricardo'
	},
        {
                'id': 3,
                'username': 'Josue'
        },
        {
                'id': 4,
                'username': 'Miguel'
        },
        {
                'id': 5,
                'username': 'Roberto'
        }
];

app.get('/users', (req,res) => {
	res.send(users);
});

app.listen(3000);


