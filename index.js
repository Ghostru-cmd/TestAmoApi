const AmoCRM = require('amocrm-js')
const express = require('express');
const app = express();

app.get('/leads', async (req, res) => {
	const responseLeads = await crm.request.get('/api/v4/leads?with=contacts')
    const leads = responseLeads.data._embedded.leads
	const jsonLeads = JSON.stringify(leads)
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*'
	})
	res.end(jsonLeads)
})

app.get('/contacts', async (req, res) => {
	const responseContacts = await crm.request.get('/api/v4/contacts')
	const contacts = responseContacts.data._embedded.contacts
	const jsonContacts = JSON.stringify(contacts)
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*'
	})
	res.end(jsonContacts)
})

app.get('/users', async (req, res) => {
	const responseUsers = await crm.request.get('/api/v4/users')
	const users = responseUsers.data._embedded.users
	const jsonUsers = JSON.stringify(users)
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*'
	})
	res.end(jsonUsers)
})

app.get('/search', async (req, res) => {
	const getParams = req.query['query']
	const responseQuery = await crm.request.get(`/api/v4/leads?query=` + encodeURIComponent(getParams))
	if (Object.keys(responseQuery).length) {
		const queryLeads = responseQuery.data._embedded.leads
		const jsonQuery = JSON.stringify(queryLeads)
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*'
		})
		res.end(jsonQuery)
	} else {
		console.log('Ответ пуст => ', getParams)
	}
})

app.get('/pipelines', async (req, res) => {
	const responsePipelines = await crm.request.get('/api/v4/leads/pipelines')
	const pipelinesStatuses = responsePipelines.data._embedded.pipelines[0]._embedded.statuses
	const jsonStatuses = JSON.stringify(pipelinesStatuses)
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*'
	})
	res.end(jsonStatuses)
})

app.listen(5000, () => {
	console.log('Server started')
})

const crm = new AmoCRM({
    domain: 'tulevand',
    auth: {
      client_id: 'bb5fe300-2495-429d-afb5-1ffe973b57ca',
      client_secret: 'N2iq5TvQdFnVHh7d900uafxAl4jFltzOy0HSRIBMW6OEeYKvJtCtyt7VXZDhUZO9',
      redirect_uri: 'https://5203f049dc6d.ngrok.io',
      server: {
        port: 8080
      }
    },
});

(async () => {
	const url = crm.connection.getAuthUrl()
	console.log(url)
	const test = await crm.request.get('/api/v4/leads?with=source_id')
})();
