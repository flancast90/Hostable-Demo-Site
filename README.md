# Hostable-Demo-Site
> Easily create and host a demo site from a GitHub repository.

## Getting Started
1. Fork this repo, naming it whatever you'd like
2. For each demo, create a new directory at the project root. In this directory, any html files will be shown as demos within that directory's demo page.
3. Go to ``config/config.json`` and complete the information there (GitHub username and the name of your fork of this repo)
4. Click on ``Settings``>``Pages`` within the GitHub repo GUI, and start a new GitHub Pages of the site from the ``main`` branch.
5. Navigate to ``<your name>.github.io/<repo name>`` to see your live demo site!

## Screenshots
#### Main page (root-level directories)
![Main page](/assets/screenshots/gh-demos-main.png)
#### Demo pages (directory contents)
![Demo Page](/assets/screenshots/gh-demos-demo.png)

## Customization
Besides the customization of each demo through its associated html file, there is a header component located at ``components/header.component`` which you can edit in order to have custom links and images within the header. This file can be filled with custom html code, which will be rendered as the header on page load. 

In addition to this, the profile image can be changed by changing the ``me.jpg`` file within the ``assets`` directory.

For super-users who feel experienced with JS, CSS, and HTML, there is also flexibility in the code to change some common attributes/layouts. Below, you can find the file names and what is included within them. Actual customization in this respect will be left to the user.
``assets/3rdparty/gitribbon.css`` - "Fork me on GitHub" ribbon CSS
``assets/3rdparty/tailwind.min.js`` - Tailwind CSS auto-generated code
``assets/me.jpg`` - Profile Image
``assets/script.js`` - GitHub API controllers for getting demo files
``components/header.component`` - Header HTML code (see above)
``config/config.json`` - GitHub API information (username and repo name)
``index.html`` - demo main page, shows directories uploaded to project root
``show-files.html`` - demo page (directory specific). Finds and shows the contents of a directory with the ``?dir=<directory name>`` query syntax.

## TODO
in the future, hopefully some of these will be supported (either from me coding them, or from PRs).
- better templating/components. This could include the actual demo ``div``'s, or something else entirely.
- better templating syntax. Currently, the ``.component`` files are loaded within ``script.js``, making it too-hardcoded in my opinion. Several client-side templating engines such as AlpineJS seem promising for this.

## License
MIT
