function getArticleGenerator(articles) {
    
    articles = Array.from(articles);
    let displayDiv = document.getElementById('content');

    function showNext() {
        if (articles.length > 0) {
            const article = document.createElement('article');
            displayDiv.appendChild(article).textContent = articles.shift();  

        }
    }
    return showNext;
}
