
export const dynamic = 'force-dynamic';

export default async function BioPage(){
    const request = await fetch('https://baconipsum.com/api/?type=all-meat&para=5');
    const bioData = await request.json()

    return(
        <div className="row">
            <article>
                <div className="mb-4">
                    <h1 className="fw-bolder mb-1">
                        Hokusai Bio
                    </h1>
                </div>
                <section className="mb-5">
                    {bioData.map((bio,i)=>(
                        <p key={i} className="fs-5 mb-4">
                            {bio}
                        </p>
                    ))}
                </section>
            </article>
        </div>
    )


}