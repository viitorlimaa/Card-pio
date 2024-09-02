const list = document.querySelector('.list')
const mapButton = document.querySelector('.map-all')
const showAllButton = document.querySelector('.show-all')
const sumAll = document.querySelector('.sum-all')
const filter = document.querySelector('.filter-vegan')

format = (value) => {
    return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

showAll = (items) => {

    let newLi = ''

    items.forEach(item => {
        newLi = newLi + ` 
                <li>
                 <img src="${item.src}">
                 <p>${item.name}</p>
                 <p class="price">${format(item.price)}</p>
                </li>
`
        list.innerHTML = newLi
    });
}

mapAll = (item) => {
    const newPrice = menuOptions.map(item => ({
        ...item,
        price: item.price * 0.9
    }))

    showAll(newPrice)
}

sumAllItems = () => {
    const totalValue = menuOptions.reduce((acc, cur) => {
        return acc + cur.price
    }, 0)
    list.innerHTML = `
    <li>Soma de todos os produtos: <p class="price">${format(totalValue)}</p></li>`
}

//(item.vegan) da no mesmo
function filterVegan() {
    const filterVeg = menuOptions.filter(item => item.vegan === true)

    showAll(filterVeg)
}

showAllButton.addEventListener('click', () => showAll(menuOptions))
mapButton.addEventListener('click', mapAll)
sumAll.addEventListener('click', sumAllItems)
filter.addEventListener('click', filterVegan)