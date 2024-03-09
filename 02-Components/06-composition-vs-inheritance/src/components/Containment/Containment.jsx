import './Containment.css'


//ENVÍA EL JSX COMO UNA PROP LLAMADA CHILDREN
function Containment() {
    return ( 
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
     );
}

//IMPRIME UNA PROP LLAMADA CHILDREN, QUE ES EL CÓDIGO JSX CHILD 
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

export default Containment;