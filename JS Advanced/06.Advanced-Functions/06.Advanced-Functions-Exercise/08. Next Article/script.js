function getArticleGenerator(articles) {
    const mainDiv = document.getElementById("content");


    function two() {

        const article = document.createElement('article')
        if (articles.length > 0) {
            article.textContent = articles.shift()
            mainDiv.appendChild(article)
        }
    }
    return two;
}
