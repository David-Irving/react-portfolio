# Portfolio
![University of Denver Logog](https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/denver-switchup-thumbnail-a/original.png?1560210160)
## Acceptance Criteria
 |When       | Then
 | --------- |--------
 | I load the portfolio | I am presented with a page containing a header, a section for content, and a footer
 | I view the header | I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
 | I view the navigation titles | I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
 | I click on a navigation title | I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
 | I load the portfolio the first time | the About Me title and section are selected by default
 | I am presented with the About Me section | I see a recent photo or avatar of the developer and a short bio about them
 | I am presented with the Portfolio section | I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
 | I am presented with the Contact section | I see a contact form with fields for a name, an email address, and a message
 | I move my cursor out of one of the form fields without entering text | I receive a notification that this field is required
 | I enter text into the email address field | I receive a notification if I have entered an invalid email address
 | I am presented with the Resume section | I see a link to a downloadable resume and a list of the developer’s proficiencies
  I view the footer | I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

### Technical Acceptance Criteria: 40%
* Satisfies all of the preceding acceptance criteria plus the following:
    * Application must use React to render content.
    * Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.
    * Application has a single `Project` component that’s used multiple times in the Portfolio section.
    * Application has a single `Footer` component that appears on multiple pages.
    * Application must be deployed to GitHub Pages.

### Deployment: 32%
* Application deployed at live URL.
* Application loads with no errors.
* Application GitHub URL submitted.
* GitHub repository contains application code.

### Application Quality: 15%
* User experience is intuitive and easy to navigate.
* User interface style is clean and polished.
* Application uses a color scheme other than the default Bootstrap color palette.

### Repository Quality: 13%
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains high-quality README file with description, screenshot, and link to deployed application.

### Website link
* https://david-irving.github.io/react-portfolio/

### Repository Link
* https://github.com/David-Irving/react-portfolio

### Website Preview
