// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHomePage()
    {
        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        //console.log(AboutUsButton);
        AboutUsButton.addEventListener("click", function()
        {
            console.log("About Us Button Clicked!!")
            location.href = "about.html";
        });

        //Step 1. Get an entry point (insertion / deletion point) reference
        let DocumentBody = document.body;
        let MainContent = document.getElementsByTagName("main")[0];
        //let MainContent = document.getElementsByTagName("body")[0];
        //console.log(MainContent);

        //Step 2. create an element to insert
        //let NewParagraph = document.createElement("p");
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

        //Step 3. configure the new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the Main Paragraph";
        Article.setAttribute("class", "container");

        //Step 4. Add / Insert the new element
        MainContent.appendChild(MainParagraph);
        //MainContent.appendChild(Footer);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
        //MainContent.innerHTML = NewParagraph;

        // to insert before
        // target a location (element) to insert
        // TargetElement.before(elementToInsert);

        // to delete
        //Article.remove();

    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Page");
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
    }


    // named function option
    function Start()
    {
        console.log("App started! Welcome to WEBD6201!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }

    // anonymous function
/*     let Start = function()
    {
        console.log("App started! Welcome to WEBD6201!");
    } */

    window.addEventListener("load", Start);
})();