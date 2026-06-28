import Hero from "./Hero";
import TextAndImage from "./TextAndImage";
import Universe from "./Universe";
import "./ProductPage.css"
function ProductPage() {
    return ( 
        <div id="ProductPageContainer">
            <Hero/>
            <TextAndImage/>
            <Universe/>
        </div>
    );
}

export default ProductPage;