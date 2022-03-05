export default function Greetings(props){
    function checklanguage(language, name){
        switch (language) {
            case 'en':
                return "Hello " + name + "!"
            case 'es':
                return "Hola " + name + "!"
            case 'fr':
                return "Bonjour " + name + "!"
            case 'de':
                return "Hallo " + name + "!"
            default:
                break;
        }
    }
    return(
        <div>
            <p>{checklanguage(props.language, props.name)}</p>
        </div>
    )
}