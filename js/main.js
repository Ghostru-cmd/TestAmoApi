(async () => {

    const responseLeads = await fetch('http://localhost:5000/leads')
    const leads = await responseLeads.json()

    const responseStatuses = await fetch('http://localhost:5000/pipelines')
    const statuses = await responseStatuses.json()
    
    const responseUser = await fetch('http://localhost:5000/users')
    const users = await responseUser.json()

    drawLeads(leads, statuses, users)

    const responseContacts = await fetch('http://localhost:5000/contacts')
    const contacts = await responseContacts.json()

    drawContacts(contacts)
    
    const search = document.querySelector('.search')
    search.oninput = () => {
        if (search.value.length >= 3) {
            sendSearch(statuses, users, contacts, search.value)
        }
    }

})();