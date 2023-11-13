
export default function Landing({user}){
    console.log(user)
    return(
        <>
        <div className="text-center p-5">
        <h2>hi,{`${user?.username}`}</h2>
        <p>an app for Authentication</p>
        </div>
        </>
    )

}