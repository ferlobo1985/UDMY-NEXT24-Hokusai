import CarouselComponent from "@/components/carousel";
import MasonryComponent from "@/components/masonry";
import { getArticles } from "@/utils/actions";

export default async function Home() {
  const getSlides = await fetch(`${process.env.JSON_API}/carousel`)
  const slides = await getSlides.json();

  const articles = await getArticles();

  return (
   <>
      <CarouselComponent data={slides}/>
      <MasonryComponent data={articles}/>
   </>
  )
}
