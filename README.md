# VUT FIT ITW 2024 - Interactive Resume Website

This repository contains the HTML, CSS, and JavaScript files for an interactive resume website. The website features a sidebar with navigation links to different sections, including Home, About, Portfolio, Education, and Contact.

## Website

The website is hosted on GitHub Pages. You can access it [here](https://xshevc02.github.io/ITW/).

## Files

- **index.html**: This is the main HTML document for the website. It serves as the base structure for the resume website.
- **style.css**: External CSS file for styling the HTML elements.
- **jscode.js**: JavaScript file containing functionality for the sidebar and dropdown menu.

## Features

- **Sidebar Navigation**: Users can navigate between different sections of the website using the sidebar navigation links.
- **Contact Form**: The Contact section includes a contact form for users to submit inquiries.
- **Responsive Design**: The sidebar can be toggled on and off for mobile versions of the website, providing a seamless user experience across devices.

## JavaScript Functionality

### toggleSidebar()

The `toggleSidebar` function is responsible for showing and hiding the sidebar on mobile versions of the website. It retrieves the sidebar and button elements by their IDs and checks the left style of the sidebar. If it's set to `-280px`, it sets it to `0` and changes the button text to "Close Sidebar". Otherwise, it sets the left style back to `-280px` and changes the button text to "Open Sidebar".

### DropDown()

The `DropDown` function toggles the visibility of the dropdown menu by adding or removing the "show" class. This class presumably controls the visibility of the menu.

### window.onclick

The `window.onclick` function listens for clicks anywhere on the webpage. If the clicked element is not the dropdown button and the dropdown menu is currently shown, it hides the menu. This ensures that clicking anywhere outside the dropdown menu will hide it.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs. Contributions are welcome!
