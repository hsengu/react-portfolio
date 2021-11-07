const exclude = [
    "adapp",
    "taskinator",
    "horiseon-webapp",
    "my-web-portfolio",
    "taskmaster-pro",
    "webapp",
    "git-it-done",
    "portfolio-generator",
    "leetCode",
    "observiumDB",
    "robot-gladiators",
    "run-buddy",
    "hsengu",
    "zookeeper",
    "u-develop-it",
    "team-profile-generator",
    "tech-blog",
    "readme-generator",
    "note-taker",
    "just-tech-news",
    "jest-another-RPG",
    "employee-tracker",
    "ecommerce-backend"
]

function getGitRepos() {
    var apiUrl = "https://api.github.com/users/hsengu/repos";
    
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                outputData(data);
            });
        } else {
            alert("Error: GitHub User Not Found");
        }
    }).catch(function(error) {
        alert("Unable to connect to GitHub");
    });
};

function outputData(data) {
    let i = 0;
    var carousel = $("#carousel").children(0);
    console.log(carousel);

    data.forEach(element => {
        if(exclude.findIndex(search => search === element.name) === -1) {
            if(i === 0) 
                var carouselItem = $("<div class='carousel-item active'>");
            else
                var carouselItem = $("<div class='carousel-item'>");
            
            var cardEl = $("<div class='card " + element.name + " '>");
            var cardContentEl = $("<div class='card-content'>");
            var contentEl = $("<div class='content has-text-centered'>");
            var pEl = $("<p class='title'>");
            pEl.text(element.description);

            pEl.appendTo(contentEl);
            contentEl.appendTo(cardContentEl);
            cardContentEl.appendTo(cardEl);

            var cardFooterEl = $("<footer class='card-footer'>");
            var aEl = $("<a class='card-footer-item'>");
            var spanEl = $("<span class='icon'>");
            var iEl = $("<i class='fab fa-github'>");
            var spanTextEl = $("<span>");

            aEl.attr("href", element.svn_url);
            spanTextEl.text("View this Project on Github");
            iEl.appendTo(spanEl);
            spanEl.appendTo(aEl);
            spanTextEl.appendTo(aEl);
            aEl.appendTo(cardFooterEl);
            cardFooterEl.appendTo(cardEl);

            cardEl.appendTo(carouselItem);

            carouselItem.prependTo(carousel);

            i++;
        }
    });
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    // $(".navbar-burger").click(function() {
    //     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //     $(".navbar-burger").toggleClass("is-active");
    //     $(".navbar-menu").toggleClass("is-active");
    // });

    getGitRepos();
});