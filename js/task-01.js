const categories = document.querySelectorAll('.item')
console.log(categories);
console.log(`Number of categories: ${categories.length}`)
categories.forEach(category => {

    const title = category.querySelector('h2').textContent
    const elements = category.querySelectorAll('li').length
    console.log(`Category:${title}`)
    console.log(`Elements ${elements}`)
})