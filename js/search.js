function sendSearch(statuses, users, contacts, value){
    const sendQuery = fetch(`http://localhost:5000/search?query=${value}`)
        .then(response => response.json())
        .then(response => {
            if (response.length) {
                document.querySelector('.tbody').innerHTML = ''
                drawLeads(response, statuses, users)    
                drawContacts(contacts)
            }
        })  
}
			