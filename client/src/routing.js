

export default function getServerURL() {
    if("3000" === window.location.port)
        return "http://localhost:8080/"
    else    
        return window.location.hostname+"/"
}