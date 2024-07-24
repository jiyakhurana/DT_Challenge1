// Example JSON data (assuming it's structured similarly)
const data = [
    {
        taskName: "Task 1",
        assets: [
            { 
                name: "Technical Project Management", 
                type: "Article", 
                description: "<b>Description: </b>Story of alignment scope of agility Specific Accountable Staggering Approach. ",
                youtubeLink: "https://www.youtube.com/watch?v=SUvlWYD67QQ&t=31s&pp=ygULSC4yNjQgdmlkZW8%3D"
            },
            { name: "4SA Method", type: "Audio", description: "<b>Description: </b>To explore more read more" },


            { name: "Threadbuild", type: "Video", description: "<b>Description:</b> Watch the video and thread build, and jot out key threads while watching that video. " 


            },
            { name: "Structure You Pointers", type: "Article", description: "<b>Description:</b> Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world" }

            
        ]
    },
   
];

document.addEventListener('DOMContentLoaded', function() {
    const journeyBoard = document.querySelector('.journey-board');

    // Function to render assets
    function renderAssets(taskName, assets) {
        const taskSection = document.createElement('div');
        taskSection.classList.add('task-section');

        const taskHeader = document.createElement('h3');
        taskHeader.textContent = taskName;
        taskSection.appendChild(taskHeader);

         // Create two rows for assets
         const taskRow1 = document.createElement('div');
         taskRow1.classList.add('task-row');
         const taskRow2 = document.createElement('div');
         taskRow2.classList.add('task-row');

        assets.forEach((asset, index) => {
            const assetContainer = document.createElement('div');
            assetContainer.classList.add('asset-container');

            const assetHeader = document.createElement('div');
            assetHeader.classList.add('asset-header');
            assetHeader.innerHTML = `
                <h2>${asset.name}</h2>
                <div class="arrow"></div>
            `;
            assetContainer.appendChild(assetHeader);

            const description = document.createElement('div');
            description.classList.add('description');
            description.innerHTML = `<p>${asset.description}</p>`;


            // Inside the renderAssets function, within the condition for index === 0
if (index === 0) {
    const textBox = createInput('first-asset-text', '', '');

    const youtubeLink = document.createElement('div');
    youtubeLink.classList.add('youtube-link');

    const videoFrame = document.createElement('iframe');
    videoFrame.src = asset.youtubeLink;
    videoFrame.frameborder = '0';
    videoFrame.allowfullscreen = true;
    youtubeLink.appendChild(videoFrame);

    const watchOnYoutubeButton = document.createElement('button');
    watchOnYoutubeButton.textContent = 'Watch on  Youtube';
    watchOnYoutubeButton.classList.add('watch-on-youtube-button');
    youtubeLink.appendChild(watchOnYoutubeButton);


    const youtubeIcon = document.createElement('i');
    youtubeIcon.classList.add('fab', 'fa-youtube', 'youtube-icon');
    watchOnYoutubeButton.insertBefore(youtubeIcon, watchOnYoutubeButton.firstChild);

    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');

    // Technical Project Management Icon
    const tpmIcon = document.createElement('i');
    tpmIcon.classList.add('fas', 'fa-cogs', 'icon'); // Adjust the class as per your preference
    tpmIcon.title = 'Technical Project Management';
    iconsContainer.appendChild(tpmIcon);


    // Add text "Technical Project Management" below the icon
    const tpmText = document.createElement('span');
    tpmText.textContent = 'Technical Project Management';
    iconsContainer.appendChild(tpmText);

    const watchLaterIcon = document.createElement('i');
    watchLaterIcon.classList.add('fas', 'fa-clock', 'icon');
    watchLaterIcon.title = 'Watch Later';
    iconsContainer.appendChild(watchLaterIcon);

      // Add text "Watch later" below watch later icon
      const watchLaterText = document.createElement('span');
      watchLaterText.textContent = 'Watch later';
      iconsContainer.appendChild(watchLaterText);
  

    const shareIcon = document.createElement('i');
    shareIcon.classList.add('fas', 'fa-share', 'icon');
    shareIcon.title = 'Share';
    iconsContainer.appendChild(shareIcon);

    // Add text "Share" below share icon
    const shareText = document.createElement('span');
    shareText.textContent = 'Share';
    iconsContainer.appendChild(shareText);

    youtubeLink.appendChild(iconsContainer);

    description.appendChild(youtubeLink);
}

// Helper function to create input elements with titles
function createInput(id, title, placeholder) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.placeholder = placeholder;
    input.classList.add('subscribe-input');

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = title;

    const wrapper = document.createElement('div');
    wrapper.classList.add('input-wrapper');
    wrapper.appendChild(label);
    wrapper.appendChild(input);

    return wrapper;
}


 //Inside the renderAssets function, within the condition for index === 1
if (index === 1) {
    const textBoxWrapper = createInputWithLabel('Introduction', 'Introduction', 'subscribe-input');
    description.appendChild(textBoxWrapper);

    // First dropdown arrow
    const dropdownArrow1 = document.createElement('i');
    dropdownArrow1.classList.add('fas', 'fa-chevron-down', 'dropdown-arrow');
    dropdownArrow1.title = 'Expand Description 1'; // Title for the dropdown arrow
    dropdownArrow1.addEventListener('click', function() {
        const expandBox1 = document.querySelector('.expand-box-1');
        expandBox1.classList.toggle('expanded');
        dropdownArrow1.classList.toggle('expanded');
    });
    description.appendChild(dropdownArrow1);

    const expandBox1 = document.createElement('div');
    expandBox1.classList.add('expand-box', 'expand-box-1');
    description.appendChild(expandBox1);

    const descriptionText1 = document.createElement('div');
    descriptionText1.classList.add('description-text');
    descriptionText1.innerHTML = 
        

    expandBox1.appendChild(descriptionText1);

    // Second dropdown arrow
    const dropdownArrow2 = document.createElement('i');
    dropdownArrow2.classList.add('fas', 'fa-chevron-down', 'dropdown-arrow');
    dropdownArrow2.title = 'Expand Description 2'; // Title for the dropdown arrow
    dropdownArrow2.addEventListener('click', function() {
        const expandBox2 = document.querySelector('.expand-box-2');
        expandBox2.classList.toggle('expanded');
        dropdownArrow2.classList.toggle('expanded');
    });
    description.appendChild(dropdownArrow2);

    const expandBox2 = document.createElement('div');
    expandBox2.classList.add('expand-box', 'expand-box-2');
    description.appendChild(expandBox2);

    const descriptionText2 = document.createElement('div');
    descriptionText2.classList.add('description-text');
    descriptionText2.innerHTML = 
       

    expandBox2.appendChild(descriptionText2);
}

function createInputWithLabel(title, labelText, inputClass) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('input-wrapper');

    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('title', title);
    wrapper.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter Text Here';
    input.classList.add(inputClass);
    wrapper.appendChild(input);

    return wrapper;
}




           
          // Inside the renderAssets function, within the condition for index === 2
if (index === 2) {

     // Add a line (horizontal rule) below the description
     const hr = document.createElement('hr');
     description.appendChild(hr);

     
    // Add text "Thread A" below the horizontal line
    const threadText = document.createElement('p');
    threadText.textContent = 'Thread A';
    description.appendChild(threadText);

     // Add a line (horizontal rule) below the description
     const hr2 = document.createElement('hr');
     description.appendChild(hr2);

    
    
 
    const textBox1Wrapper = createInputWithLabel('Enter your email address', 'Sub Thread 1', 'subscribe-input');
    description.appendChild(textBox1Wrapper);

    const textBox2Wrapper = createInputWithLabel('Enter your name', 'Sub interpretation 1', 'subscribe-input');
    description.appendChild(textBox2Wrapper);

    const bulbIcon = document.createElement('i');
    bulbIcon.classList.add('fas', 'fa-lightbulb', 'icon');
    description.appendChild(bulbIcon);

    const messageIcon = document.createElement('i');
    messageIcon.classList.add('fas', 'fa-envelope', 'icon');
    description.appendChild(messageIcon);

    const questionIcon = document.createElement('i');
    questionIcon.classList.add('fas', 'fa-question', 'icon');
    description.appendChild(questionIcon);

    const subscribeButton = document.createElement('button');
    subscribeButton.textContent = '+ Subscribe';
    subscribeButton.classList.add('subscribe-button');
    description.appendChild(subscribeButton);

    subscribeButton.addEventListener('click', function() {
        const email = textBox1Input.value;
        const name = textBox2Input.value;
        const phoneNumber = textBox3Input.value;
        console.log(`Subscribing: Email - ${email}, Name - ${name}, Phone - ${phoneNumber}`);
        // You can add your subscription logic here
        // For demonstration, just logging the values
    });

    const textBox3Wrapper = createInputWithLabel('Enter your phone number', 'Summary for Thread A ', 'subscribe-input');
    description.appendChild(textBox3Wrapper);

   
}

function createInputWithLabel(title, labelText, inputClass) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('input-wrapper');

    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('title', title);
    wrapper.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter Text Here';
    input.classList.add(inputClass);
    wrapper.appendChild(input);

    return wrapper;
}



// If it's the fourth asset, add icons
if (index === 3) {

    // Add a line (horizontal rule) below the description
   const hr = document.createElement('hr');
   description.appendChild(hr);


   const textBox = createInput('fourth-asset-text', 'Title', '');
   description.appendChild(textBox);


   const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');


    // Left Arrow Icon
    const leftArrowIcon = document.createElement('i');
    leftArrowIcon.classList.add('fas', 'fa-arrow-left', 'icon');
    leftArrowIcon.title = 'Left Arrow';
    iconsContainer.appendChild(leftArrowIcon);

     // Right Arrow Icon
     const rightArrowIcon = document.createElement('i');
     rightArrowIcon.classList.add('fas', 'fa-arrow-right', 'icon');
     rightArrowIcon.title = 'Right Arrow';
     iconsContainer.appendChild(rightArrowIcon);
 
 // Four Arrows Icon
 const fourArrowsIcon = document.createElement('i');
 fourArrowsIcon.classList.add('fas', 'fa-expand-arrows-alt', 'icon');
 fourArrowsIcon.title = 'Four Arrows';
 iconsContainer.appendChild(fourArrowsIcon);

   
// Image Icon
const imageIcon = document.createElement('i');
imageIcon.classList.add('fas', 'fa-image', 'icon');
imageIcon.title = 'Image';
iconsContainer.appendChild(imageIcon);


// Three Dots Icon
const threeDotsIcon = document.createElement('i');
threeDotsIcon.classList.add('fas', 'fa-ellipsis-h', 'icon');
threeDotsIcon.title = 'Three Dots';
iconsContainer.appendChild(threeDotsIcon);

description.appendChild(iconsContainer);


   // Add text "Content" below the title bar
   const contentText = document.createElement('p');
   contentText.textContent = 'Content';
   description.appendChild(contentText);

    // Create a menu bar div
    const menuBar = document.createElement('div');
    menuBar.classList.add('menu-bar');


     // Menu items
     const menuItems = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Table', 'Help'];

      // Create menu items and append them to menu bar
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.textContent = item;
        menuItem.classList.add('menu-item');
        menuBar.appendChild(menuItem);
    });

    description.appendChild(menuBar);


}

assetContainer.appendChild(description);

assetHeader.addEventListener('click', function() {
   description.classList.toggle('active');
   assetHeader.querySelector('.arrow').classList.toggle('active');
});

taskSection.appendChild(assetContainer);
});

journeyBoard.appendChild(taskSection);
}

// Helper function to create input elements with titles
function createInput(id, title, placeholder) {
const input = document.createElement('input');
input.type = 'text';
input.id = id;
input.placeholder = placeholder;
input.classList.add('subscribe-input');

const label = document.createElement('label');
label.setAttribute('for', id);
label.textContent = title;

const wrapper = document.createElement('div');
wrapper.classList.add('input-wrapper');
wrapper.appendChild(label);
wrapper.appendChild(input);

return wrapper;

  // Append both rows to the task section
  taskSection.appendChild(taskRow1);
  taskSection.appendChild(taskRow2);

  // Append the task section to the journey board
  journeyBoard.appendChild(taskSection);



}








    // Render assets from JSON data
    data.forEach(task => {
        renderAssets(task.taskName, task.assets);
    });

        });