function sendSearch(statuses, users, contacts, value){
    const sendQuery = fetch(`http://localhost:5000/search?query=${value}`)
        .then(response => response.json())
        .then(queryLeads => {
            if (queryLeads.length) {
                document.querySelector('.tbody').innerHTML = ''
                drawLeads(queryLeads, statuses, users)    
                drawContacts(contacts)
            }
        })  
}
			