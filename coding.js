// this is for the main container holding everything in place
const container = document.getElementById('container')

// creates the nav bar box that will include the brand and links
const navbar = document.createElement("div");
navbar.classList.add('navbar')
container.appendChild(navbar)

// this creates the single brand logo to the left
const brand = document.createElement('h1');
navbar.appendChild(brand)
brand.textContent = "HighOnCoding"

// this creates the list for each of the two following links
const navList = document.createElement("ul");
navbar.appendChild(navList)

// this creates the home link in the navbar
const homeLink = document.createElement('li');
homeLink.textContent = "Home"
homeLink.classList.add('active')
navList.appendChild(homeLink)

// this creates the categories link in the navbar

const categoriesLink = document.createElement('li');
categoriesLink.textContent = "Categories"
navList.appendChild(categoriesLink)

// this creates the next box which will contain the curse object information
const curseBox = document.createElement('div')
curseBox.classList.add('curseBox')
container.appendChild(curseBox)

// this will create the title for the curse box
const curseTitle = document.createElement('h2')
curseTitle.textContent = "Curse of the Current Reviews"
curseBox.appendChild(curseTitle)

// this will create the space needed below the title for text in the curse box
const curseText = document.createElement("p")
curseText.textContent = 'some text here'
curseBox.appendChild(curseText)

// this will create the box for the hello watchkit object
const watchKitBox = document.createElement('div')
watchKitBox.classList.add('watchKit')
container.appendChild(watchKitBox)

// this will create the watchKit title
const watchTitle = document.createElement('h3')
watchTitle.textContent = "Hello WatchKit"
watchKitBox.appendChild(watchTitle) 

// this will create the informational box beneath the title for the watchkit
const watchKitText = document.createElement("p")
watchKitText.textContent = 'some text here'
watchKitBox.appendChild(watchKitText)

// this will create the orange comment and likes bar. will have to create another div and make it a list...?
const watchKitComment = document.createElement('div')
watchKitComment.classList.add('watchKitComment')
watchKitBox.appendChild(watchKitComment)

// this will create a ul to house the links for comments 
const watchCommentList = document.createElement("ul");
watchKitComment.appendChild(watchCommentList)

// this creates the home link in the navbar
const commentLink = document.createElement('li');
commentLink.textContent = "12 comments"
watchCommentList.appendChild(commentLink)

// this creates the categories link in the navbar

const likesLink = document.createElement('li');
likesLink.textContent = " 124 Likes"
watchCommentList.appendChild(likesLink)

// this will create the box for the swift object
const swiftBox = document.createElement('div')
swiftBox.classList.add('swiftBox')
container.appendChild(swiftBox)

// this will create the watchKit title
const swiftTitle = document.createElement('h3')
swiftTitle.textContent = "Introduction to Swift"
swiftBox.appendChild(swiftTitle) 

// this will create the informational box beneath the title for the swiftBox
const swiftText = document.createElement("p")
swiftText.textContent = 'some text here'
swiftBox.appendChild(swiftText)

// this will create the orange comment and likes bar. will have to create another div and make it a list...?
const swiftComment = document.createElement('div')
swiftComment.classList.add('swiftComment')
swiftBox.appendChild(swiftComment)

// this will create a ul to house the links for comments 
const swiftCommentList = document.createElement("ul");
swiftComment.appendChild(swiftCommentList)

// this creates the home link in the navbar
const swiftCommentLink = document.createElement('li');
swiftCommentLink.textContent = "15 comments"
swiftCommentList.appendChild(swiftCommentLink)

// this creates the categories link in the navbar

const swiftLikesLink = document.createElement('li');
swiftLikesLink.textContent = " 45 Likes"
swiftCommentList.appendChild(swiftLikesLink)




 

