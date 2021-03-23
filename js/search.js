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
// function newSearch(leads, statuses, users, contacts, value){
//     const newLeads = leads.filter(lead => {
//         if (!lead.id.toString().indexOf(value)) {
//             return true
//         }
//         if (!lead.name.indexOf(value)) {
//             return true
//         }
//         if (!lead.price.toString().indexOf(value)) {
//             return true
//         }

//         let status = statuses.find(status => status.id == lead.status_id)
//         if (!status.name.indexOf(value)) {
//             return true
//         }

//         let isTag = lead._embedded.tags.filter(tag => {
//             if (!tag.name.indexOf(value)) {
//                 return true
//             }
//         })
//         if (isTag.length) {
//             return true
//         }
//     })
//     console.log(newLeads);
//     document.querySelector('.tbody').innerHTML = ''
//     drawLeads(newLeads, statuses, users)    
//     drawContacts(contacts)
// }
			