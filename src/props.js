//Greeting Card
export default function GreetingCard(props){
    return (
        <div>
            <h2>Good morning,{props.name}!</h2>
            <p>You are from {props.city}</p>
        </div>
    );
}