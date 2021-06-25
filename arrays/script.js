const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
]
// this is allowing us to connect to the ul in the html
const linkList = document.getElementById("linkList")
// this is a for loop to create an li, then a hyperlink for each item in the addresses list
for (let count = 0; count < addresses.length; count++) {
    // this will create a list item in the hmtl  
    const addressLi = document.createElement('li')
    
    // this will add an li to the 
    linkList.appendChild(addressLi)
    
    // this will add an <a> element
    const link = document.createElement('a')
    
    // this will add an <a> element to each li
    addressLi.appendChild(link)
    
    // this will add the value of the addresses index to the li item
    link.textContent = addresses[count]
    
    // this will add the href inside the <a> tag
    link.setAttribute('href', addresses[count])    
}