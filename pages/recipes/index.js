import {createClient} from 'contentful'
import RecipesCard from '../../componet/RecipesCards'
export async function getStaticProps(){
    const client = createClient({
        space:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_KEY,
        
    })
    const res = await client.getEntries({content_type:'sample1ForWeb'})
    return {
        props:{
            datas:res.items
        }
    } 
}
 






const Recipes = ({datas}) => {
    console.log(datas)
    return ( 
        <div className="recipe-list" >
            {datas.map(data=>(//must '()' not '{}'
                <RecipesCard key={data.sys.id} data={data} />
            ))}
            <style jsx>{
            `.recipe-list{
                display:grid;
                grid-template-columns:550px  550px;
                grid-gap:20px 60px;
                padding:30px;
                margin:50px;

            }`}</style>
        </div>
     );
}
 
export default Recipes;
