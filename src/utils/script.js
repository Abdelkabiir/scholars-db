// I like the fqact that this script is working !
function f() {
    const DomElements = {
        CategoryItemsLength: document.querySelectorAll('div.CategoryTreeItem > a').length,
        CategoryItem: (index) => document.querySelectorAll('div.CategoryTreeItem > a')[index].innerText,
        PageItemsLength: document.querySelectorAll('div[id="mw-pages"] > div > div > div > ul > li').length,
        PageItem: (index) => document.querySelectorAll('div[id="mw-pages"] > div > div > div > ul > li')[index].innerText
    };
    
    const subCategories = []
    const categoryItemsLength = DomElements.CategoryItemsLength;
    
    const pages = [];
    const pagesItemsLength = DomElements.PageItemsLength;
    
    async function getSubCategory(index) {
        const category  = await DomElements.CategoryItem(index)
        subCategories.push(category)
    };
    
    
    async function getSubCategories() {
        for (let index = 0; index < categoryItemsLength; index++) {
            getSubCategory(index)
        }
    }
    
    async function getPage(index) {
        const page = await DomElements.PageItem(index)
        pages.push(page)
    };
    
    async function getPages() {
        for (let index = 0; index < pagesItemsLength; index++) {
            getPage(index)
        }
    }
    
    getSubCategories();
    getPages();
    return({
        subCategories,
        pages
    })
}

f();

y = [];
x= [];
z = [];
document.querySelectorAll('div[id="mw-pages"] > div > div > div > ul > li').forEach(cat => {
    y.push(cat.innerText)
});
document.querySelectorAll('div.CategoryTreeItem > a').forEach(cat => {
    x.push(cat.innerText)
});


document.querySelectorAll('div[id="mw-pages"] > div> ul > li> a').forEach(cat => {
    z.push(cat.innerText)
});
console.log(x)
console.log(y)