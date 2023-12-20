import Image from 'next/image';
import { getArticleById } from '../../utils/actions'

export default async function ArticlePage({params}){
    const {id} = params;
    const article = await getArticleById(id)

    return(
        <div>
            <div
                style={{
                    marginTop:'20px',
                    position:'relative',
                    width:'100%',
                    height:'500px'
                }}
            >
                <Image 
                    src={`/images/arts/${article.img}`}
                    alt={article.name}
                    fill
                    style={{objectFit:"cover"}}
                />
            </div>
            <div className='article_container'>
                <h1>{article.name}</h1>
                <div dangerouslySetInnerHTML={{__html:article.content}}></div>
            </div>
        </div>
    )

}


export async function generateStaticParams(){
    const articles = await fetch(`${process.env.JSON_API}/articles`)
    .then((res)=>res.json());

    return articles.map((article)=>{
        return {
            id: article.id.toString()
        }
    })

}