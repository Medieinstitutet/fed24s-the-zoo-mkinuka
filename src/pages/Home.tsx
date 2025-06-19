import "../styles/home.css"
import feedingTime from "../assets/feeding.jpg"
import resturant from "../assets/resturang.avif"

export const Home = () => {

    return <>
    <div className="flex-col  w-[70vw] h-[100vh]">
    <div className="info-container h-[15rem]">
    <div className="price-opening-container ">
    <div>
        <h3 className="text-3xl">Öppetider</h3>
        <h4><b>Måndag-Fredag</b></h4>
        <p>11:00-20:00</p>
        <h4><b>lördag-söndag</b></h4>
        <p>11:00-16:00</p>
    </div>
    <div className="flex fl ex-row">
        <div>
        <h3 className="text-3xl">Priser</h3>
        <h4><b>Vuxen:</b> 16-64 år</h4>
        <p>200kr</p>
        <h4><b>Barn:</b> 3-16 år</h4>
        <p>100kr</p>
        </div>               
        <div className="w-[10rem] p-3">
        <p>Det är gratis för barn under 3 år och pensionärer över 64 att besöka parken.</p>
        </div>
    </div>
    </div>
    </div>

    <article className="article-container w-[70vw] overflow-hidden flex flex-col items-center gap-4 rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm p-8 m-4 ">
    <h1 className="text-6xl">Välkommen till Nordiska djurparken</h1>
    <p className="text-2xl" >Hos oss möter du över 47 olika djurarter från världens alla hörn, allt från majestätiska Kameleonter och nyfikna kaniner till färgglada papegojor och lekfulla grisar. Vårt zoo är inte bara en plats för att se djur – här får du lära dig mer om deras naturliga miljöer, hur vi arbetar med bevarande och varför varje art är viktig för vår planet.
    Ta en promenad genom våra lummiga parker, delta i spännande matningsstunder och upptäck våra interaktiva utställningar där både stora och små kan lära sig mer om djurens liv. Missa inte vår populära barnzon där du kan komma riktigt nära våra tamdjur och kanske till och med klappa en get!
    Vi på Nordiska Djurparken brinner för djurens välmående och arbetar aktivt med att skydda hotade arter. Genom att besöka oss bidrar du till vårt viktiga arbete med djurens framtid. Välkommen till en dag fylld av upptäckter, glädje och minnen för livet!</p>
    </article>
    <section className=" flex flex-row w-[70vw] gap-[2rem] justify-between ">
        <div className="visitCard w-[34vw]  flex flex-row gap-8 ">
            <img src={feedingTime} alt="fågel som blir matad" className="img-contain w-[14rem] h-[14rem]" />
            <div className="flex-col w-[15rem]">
            <h4 className="text-3xl">Välkommen till Barnparken!</h4>
            <p className="pb-[0.5rem]">Här får du chansen att komma nära våra djur och själv vara med och mata dem. Upptäck, lek och lär tillsammans med hela familjen!</p>
            <button className="card-button">Läs mer...</button>
            </div>
        </div>
        <div className="visitCard w-[34vw]  flex flex-row gap-8 ">
            <img src={resturant} alt="fågel som blir matad" className="img-contain w-[18rem] h-[14rem]" />
            <div className="flex-col w-[15rem]">
            <h4 className="text-2xl pt-[1rem] pb-[1rem]">Välkommen till vår nyöppnade restaurang Skogsgläntan!</h4>
            <button className="card-button">Läs mer...</button>
            </div>
        </div>
    </section>
    </div>
    
    </>
}