function drawContacts(contacts) {
    if (contacts.length) {
        contacts.forEach((contact, i) => {

            let phoneEmail = contact.custom_fields_values.map(phoneEmail => phoneEmail.values[0].value)  

            let rowContact = document.createElement('tr')
            rowContact.className = `rowContact ${i}`
            rowContact.style = 'display: none;'

            rowContact.innerHTML = `<th class="name">${contact.name} ${phoneEmail[0]} ${phoneEmail[1]}</th>
                            <th class="status"></th>
                            <th class="person"></th>
                            <th class="create"></th>
                            <th class="prise"></th>`

            document.querySelectorAll('.row')[i].after(rowContact)
        })
        
        const rowClick = document.querySelectorAll('.row')
        for (let i = 0; i < rowClick.length; i++) {
            rowClick[i].onclick = function(e) {
                let rowClickID = document.getElementsByClassName(this.id)[0]
                rowClickID.style.display == 'none' ? rowClickID.style.display = '' : rowClickID.style.display = 'none'
            }
        }
    }
}
