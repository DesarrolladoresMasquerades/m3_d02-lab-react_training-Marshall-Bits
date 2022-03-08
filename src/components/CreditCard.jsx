import visa from "../assets/images/visa.png"
import masterCard from "../assets/images/master-card.svg"

export default function CreditCard(props){

    function creditCardTypeLogo(){
        if (props.type==="Visa") return visa
        if (props.type==="Master Card") return masterCard
    }
    return(
        <div style={{backgroundColor:props.bgColor}}>
            <img className="cc-logo" src={creditCardTypeLogo()} alt="credit-card-logo"/>
        </div>
    )
}