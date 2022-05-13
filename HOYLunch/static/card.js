class ProductCard extends React.Component {
    constructor(props){
      super(props)
    }

    image() {
        return (
        <div class="row image-row">
            <img class="card-img" src={this.props.image} alt={"Imagen " + this.props.title}></img>
        </div>
    );}

    description() {
        return (
            <div class="col-8 description-col">
                <div class="row">
                    <p>{this.props.description}</p>
                </div>
            </div>
    );}

    prize() {
        return (
            <div class="row unitary-row">
                <small>Precio unitario</small>
                <p>${this.props.prize} MXN</p>
            </div>
    );}

    location() {
        return (
            <div class="row location-row">
                <small>Ubicación</small>
                <p>Ubicación</p>
            </div>
    );}

    whatsapp() {
        return (
            <div class="row">
                <a target="_blank" href={"https://wa.me/" + this.props.phoneNumber + "?text=" + encodeURIComponent('¡Hola! Ví tu anuncio de *' + this.props.title + '* en HOYLunch.\n')} class="btn-wa-msg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Contactar
                </a>
            </div>
    );}

    render() {
        return(
            <div class="col-5">
                <div class="card card-block card-1">
                    <div class="container">
                        {this.image()}
                        <div class="row data-row">
                            {this.description()}
                            <div class="col-4">
                                {this.prize()}
                                {this.location()}
                                {this.whatsapp()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Salado
ReactDOM.render([
    <ProductCard id="1" image={imsUrls["1"]} title="Some title" description="Description" prize="10" location="Somewhere" phoneNumber="123456789" />,
    <ProductCard id="2" image={imsUrls["2"]} title="Other title" description="Another description" prize="18.00" location="IV-403" phoneNumber="123456789" />,
    <ProductCard id="3" image={logoImURL} title="Some title" description="Description" prize="10" location="Somewhere" phoneNumber="123456789" />,
    <ProductCard id="4" image={logoImURL} title="Other title" description="Another description" prize="18.00" location="IV-403" phoneNumber="123456789" />,
], document.querySelector("#saladoScrolling"));


// Dulce
ReactDOM.render([
    <ProductCard id="5" image={logoImURL} title="Dulce title" description="Description" prize="10" location="Somewhere" phoneNumber="123456789" />,
    <ProductCard id="6" image={logoImURL} title="Other title" description="Another description" prize="18.00" location="IV-403" phoneNumber="123456789" />,
    <ProductCard id="7" image={logoImURL} title="Some title" description="Description" prize="10" location="Somewhere" phoneNumber="123456789" />,
    <ProductCard id="8" image={logoImURL} title="Other title" description="Another description" prize="18.00" location="IV-403" phoneNumber="123456789" />,
], document.querySelector("#dulceScrolling"));


// Tomar
ReactDOM.render([
    <ProductCard id="9" image={logoImURL} title="Tomar title" description="Description" prize="10" location="Somewhere" phoneNumber="123456789" />,
    <ProductCard id="10" image={logoImURL} title="Other title" description="Another description" prize="18.00" location="IV-403" phoneNumber="123456789" />,
    <ProductCard id="11" image={logoImURL} title="Some title" description="Description" prize="10" location="Somewhere" phoneNumber="123456789" />,
    <ProductCard id="12" image={logoImURL} title="Other title" description="Another description" prize="18.00" location="IV-403" phoneNumber="123456789" />,
], document.querySelector("#bebidasScrolling"));