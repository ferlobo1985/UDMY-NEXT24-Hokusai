"use client"
import Masonry from 'react-masonry-css'
import Button from 'react-bootstrap/Button'
import Card  from 'react-bootstrap/Card';
import Link from  'next/navigation'
import { Fade } from 'react-awesome-reveal'

export default function MasonryComponent({data}){
    const breakpoints = {
        default: 3,
        700: 2,
        500: 1
      };
  
    return(
        <>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                { data.map((article)=>(
                <Fade key={article.id}>
                    <Card style={{width:'100%'}}>
                        <Card.Img variant='top' src={`/images/arts/${article.img}`}/>
                        <Card.Body>
                            <Card.Title>{article.name}</Card.Title>
                            <Card.Text>{article.excerpt}</Card.Text>
                            <Button
                                variant='outline-primary'
                                as={Link}
                                href={`/${article.id}`}
                            >
                                See article
                            </Button>
                        </Card.Body>
                    </Card>
                </Fade>
                ))}
            </Masonry>
        </>
    )
}