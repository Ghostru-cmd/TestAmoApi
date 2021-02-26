function drawTags(tagsArr, i){
    if (tagsArr.length) {
        let tags = document.createElement('span')
        tags.className = 'tags'		
        tagsArr.forEach(tag => {							
            tags.innerHTML += `<span class="tag">${tag.name}</span>`	
        })
        document.querySelectorAll('.name')[i].appendChild(tags)
    }
}

function getDay(date){
    let months = ['Января','Февраля','Марта','Апреля','Майя','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function shortName(fullName){
    return `${fullName.slice(0, fullName.indexOf(' '))}${fullName.slice(fullName.lastIndexOf(' '))}`
}

function drawLeads(leads, statuses, users) {
    if (leads.length) {
        leads.forEach((lead, i) => {			
            let row = document.createElement('tr')
            row.className = 'row'
            row.id = `${i}`

            let status = statuses.find(status => status.id == lead.status_id)

            let person = shortName(users.find(user => user.id == lead.responsible_user_id).name)
            
            let create = getDay(new Date(lead.created_at * 1000))
            
            let prise = lead.price.toLocaleString('ru') + " ₽"
            row.innerHTML = `<th class="name">${lead.name} </th>
                            <th class="status"><span class="span" style="background-color:${status.color}">${status.name}</span></th>
                            <th class="person"><span class="ant-avatar ant-avatar-circle ant-avatar-icon" style="width: 25px; height: 25px; line-height: 25px; font-size: 12.5px; margin-right: 8px;"><i aria-label="icon: user" class="anticon anticon-user"><svg viewBox="64 64 896 896" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg></i></span>${person}</th>
                            <th class="create">${create}</th>
                            <th class="prise">${prise}</th>`
            document.querySelector('.tbody').appendChild(row)

            drawTags(lead._embedded.tags, i)
        })
    }
}
