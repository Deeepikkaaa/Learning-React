//functional component
import './index.css';
export default function ProfileCard(){
    return(
        <div  className="container">
            <h1>Hey I am from jsx!</h1>
            <h2>I am getting better at React!</h2>
            <p>Write anything you want here.</p>
            <p>Wow i can do!</p>
            <h3>This is my pic</h3>
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQH7jrUxzG9Urw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719282747625?e=2147483647&v=beta&t=S2SlGMSRp0roIkDxnGnmRlsHmtq9HBBcaPykmlGzQas"/>

            <div>
                <ul>
                    <li>My fav hobbies</li>
                    <ld>sports</ld>
                    <ld>games</ld>
                </ul>
            </div>
        </div>
    )
};