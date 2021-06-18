import  './profile.css'

export default function Profile() {
    return (
        <>
        <Topbar />
        <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Rightbar/>
         </div>
        
    </>
    )
}
