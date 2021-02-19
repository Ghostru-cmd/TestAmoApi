const AmoCRM = require('amocrm-js')

const crm = new AmoCRM({
    domain: 'tulevand',
    auth: {
      client_id: 'bb5fe300-2495-429d-afb5-1ffe973b57ca',
      client_secret: 'N2iq5TvQdFnVHh7d900uafxAl4jFltzOy0HSRIBMW6OEeYKvJtCtyt7VXZDhUZO9',
      redirect_uri: 'https://6893a2165ba2.ngrok.io',
      server: {
        port: 4200
      }
    },
});

(async () => {
    const url = crm.connection.getAuthUrl()
	console.log(url)
    const responseLeads = await crm.request.get('/api/v4/leads')
    const leads = responseLeads.data._embedded.leads
	leads.forEach(lead => {
		console.log(lead.name)			//название сделки
		console.log(lead.price)			//бюджет сделки
		console.log(lead.status_id)		//статус сделки
		console.log(lead.created_at)	//дата создания
		console.log(lead.account_id)	//отвецтвенный
		console.log('------------------')
	})
    const responseContacts = await crm.request.get('/api/v4/contacts')
	const contacts = responseContacts.data._embedded.contacts
	contacts.forEach(contact => {
		console.log(contact.name)										//имя контакта
		contact.custom_fields_values.forEach(phoneEmail => {
			if (phoneEmail.field_name == 'Телефон') {
				console.log('Телефон: ' + phoneEmail.values[0].value)	//телефон контакта
			}
			if (phoneEmail.field_name == 'Email') {
				console.log('Email: ' + phoneEmail.values[0].value)		//Email контакта
			}
		})
		console.log('----------------------')
	})
})()