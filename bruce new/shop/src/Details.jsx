import{jaggis} from './Data.js';
function Details(props)
{
    // get the product id from props
    const {Item} =props;
 
    // find the product that match product id
    const jaggi = jaggis.find(p => p.Item === Item);
return(
    <div>
        <h2>{jaggi.Item}</h2>
        <h3>Class :{jaggi.ObjectClass}</h3>
        <p>{jaggi.description}</p>
        <p><img src={jaggi.image} alt={jaggi.Item}/></p>
       
    </div>
)
}
export default Details;