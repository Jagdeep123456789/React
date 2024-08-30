import { Link } from "react-router-dom";
import { jaggis } from "./Data.js";
 
function Navmenu()
{
return(
    <nav className="navmenu">
        <ul>
            {
                jaggis.map(
                    jaggi =>(
                        <li key={jaggi.Item}>
                            <Link to={`/jaggi/${jaggi.Item}`}>{jaggi.Item}
                            </Link>
                        </li>
                    )
                )
 
            }
        </ul>
    </nav>
)
}
export default Navmenu;