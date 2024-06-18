import "./error_page.css"
import { useEffect } from "react"

export default function ErrorPage() {
    useEffect(() => {
        document.title = 'Oops...';
      }, []);
    return( 
    <div class = "error-page">
        <div class="error-header">
            <p >Oops...</p>
        </div>
        <p>Looks like something went wrong.</p>
    </div>
    )
       
}