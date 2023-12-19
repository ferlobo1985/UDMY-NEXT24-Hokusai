'use server'

export async function getArticles(){
    try{
        const getArticles = await fetch('http://localhost:3004/articles')
        const articles = await getArticles.json();

        if(Object.keys(articles).length === 0){
            throw new Error('We could not find any articles')
        }

        return articles;
    } catch(error){
        throw new Error(error.message)
    }

}