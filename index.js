const AmoCRM = require('amocrm-js')
// const http = require('http')
// const fs = require('fs')
// const path = require('path')
const express = require('express');
const app = express();

// const server = http.createServer((req, res) => {
// 	let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)
// 	const ext = path.extname(filePath)
// 	let contentType = 'text/html'

// 	if (ext == '.css') {
// 		contentType = 'text/css'
// 	}
// 	console.log('Server work')
// 	fs.readFile(filePath, (err, data) => {
// 		res.writeHead(200, {
// 			'Content-Type': contentType
// 		})
// 		res.end(json)
// 	})
// })

// server.listen(5000, () => {
// 	console.log('Server started')
// })

app.get('/leads', async (req, res) => {
	const responseLeads = await crm.request.get('/api/v4/leads?with=contacts')
    const leads = responseLeads.data._embedded.leads
	console.log(leads)
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

app.get('/account', async (req, res) => {
	const responseAccount = await crm.request.get('/api/v4/account')
	const account = responseAccount.data
	const jsonAccount = JSON.stringify(account)
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*'
	})
	res.end(jsonAccount)
})

app.get('/search', async (req, res) => {
	const getParams = req.query['query']

	const responseQuery = await crm.request.get(`/api/v4/leads?query=` + encodeURIComponent(getParams))
	console.log(responseQuery)
	if (Object.keys(responseQuery).length) {
		const queryLeads = responseQuery.data._embedded.leads
		console.log(queryLeads)
		const jsonQuery = JSON.stringify(queryLeads)
		res.writeHead(200, {
			'Access-Control-Allow-Origin': '*'
		})
		res.end(jsonQuery)
	} else {
		console.log('Ответ пуст => ' + getParams)
	}
})

app.listen(5000, () => {
	console.log('Server started')
})

const crm = new AmoCRM({
    domain: 'tulevand',
    auth: {
      client_id: 'bb5fe300-2495-429d-afb5-1ffe973b57ca',
      client_secret: 'N2iq5TvQdFnVHh7d900uafxAl4jFltzOy0HSRIBMW6OEeYKvJtCtyt7VXZDhUZO9',
      redirect_uri: 'https://581af7f2b301.ngrok.io',
      server: {
        port: 4000
      }
    },
});

(async () => {
	const url = crm.connection.getAuthUrl()
	console.log(url)
    const test1 = await crm.request.get('/api/v4/leads?with=source_id')
	// console.log(test1.data._embedded.leads._links)
	// console.log('----------------------1-------------------------')
	// const test2 = await crm.request.get('/api/v4/leads?with=_embedded[contacts]')
	// console.log(test2.data._embedded.leads._links)
	// console.log('----------------------2-------------------------')
	// const test3 = await crm.request.get('/api/v4/leads?with=_embedded[contacts]&')
	// console.log(test3.data._embedded.leads)
	// console.log('----------------------3-------------------------')
	// const test4 = await crm.request.get('/api/v4/leads?with={_embedded[contacts]}')
	// console.log(test4.data._embedded.leads)
	// console.log('----------------------4-------------------------')
	// const test5 = await crm.request.get('/api/v4/leads?with=[_embedded[contacts]]')
	// console.log(test5.data._embedded.leads)
	// console.log('----------------------5-------------------------')
    // const leads = responseLeads.data._embedded.leads
	// const json = JSON.stringify(leads)
	// const contactsTest = responseLeads.data
	// console.log(contactsTest)

	// const responseContacts = await crm.request.get('/api/v4/contacts?with=leads')
	// console.log(responseContacts.data)
	// leads.forEach(lead => {
	// 	console.log(lead.name)			//название сделки
	// 	console.log(lead.price)			//бюджет сделки
	// 	console.log(lead.status_id)		//статус сделки
	// 	console.log(lead.created_at)	//дата создания
	// 	console.log(lead.account_id)	//отвецтвенный
	// 	console.log('------------------')
	// })
    // const responseContacts = await crm.request.get('/api/v4/contacts')
	// const contacts = responseContacts.data._embedded.contacts
	// contacts.forEach(contact => {
	// 	console.log(contact.name)										//имя контакта
	// 	contact.custom_fields_values.forEach(phoneEmail => {
	// 		if (phoneEmail.field_name == 'Телефон') {
	// 			console.log('Телефон: ' + phoneEmail.values[0].value)	//телефон контакта
	// 		}
	// 		if (phoneEmail.field_name == 'Email') {
	// 			console.log('Email: ' + phoneEmail.values[0].value)		//Email контакта
	// 		}
	// 	})
	// 	console.log('----------------------')
	// })
})();
