import '../Checkout.css';

export default function Input({label, id, ...props}) {
    return <div className='Input-comp'>
                <label className="label-input" htmlFor={id}> {label} </label>
                <input className="input-input" id={id} name={id} required {...props} />
            </div>
}