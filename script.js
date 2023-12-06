document.addEventListener('DOMContentLoaded', function () {
    // Sample data for featured articles, latest news, and categories
    const featuredArticles = [
        { id: 1, title: 'The Future of Technology', category: 'Technology' },
        { id: 2, title: 'Exploring Space: New Discoveries', category: 'Science' },
    ];

    const latestNews = [
        { id: 3, title: 'Breaking News: Important Event', category: 'News' },
        { id: 4, title: 'Economic Trends: What to Expect', category: 'Business' },
    ];

    const categories = ['Technology', 'Science', 'News', 'Business', 'Health'];

    // Function to display featured articles and latest news
    function displayHome() {
        const homeSection = document.getElementById('home');
        homeSection.innerHTML = '<h2>Featured Articles</h2>';

        featuredArticles.forEach(article => {
            const articleElement = createArticleElement(article);
            homeSection.appendChild(articleElement);
        });

        homeSection.innerHTML += '<h2>Latest News</h2>';

        latestNews.forEach(article => {
            const articleElement = createArticleElement(article);
            homeSection.appendChild(articleElement);
        });
    }

    // Function to display article categories
    function displayCategories() {
        const categoriesSection = document.getElementById('categories');
        categoriesSection.innerHTML = '<h2>Article Categories</h2>';

        categories.forEach(category => {
            const categoryElement = document.createElement('p');
            categoryElement.textContent = category;
            categoriesSection.appendChild(categoryElement);
        });
    }

    // Function to create an article element
    function createArticleElement(article) {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>Category: ${article.category}</p>
        `;
        return articleElement;
    }

    // Initial display
    displayHome();
    displayCategories();
});