import CarouselComponent from "@/components/carousel";

export default async function Home() {
  const getSlides = await fetch('http://localhost:3004/carousel')
  const slides = await getSlides.json();

  return (
   <>
      <CarouselComponent data={slides}/>
   </>
  )
}
