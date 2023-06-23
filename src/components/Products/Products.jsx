// import ProductSearch from "../../assets/svg component/ProductSearch";
// import ProductSmartphone from "../../assets/svg component/ProductSmartphone";
// import ProductWork from "../../assets/svg component/ProductWork";
import ProductSearch from "../../assets/svg-component/ProductSearch";
import ProductSmartphone from "../../assets/svg-component/ProductSmartphone";
import ProductWork from "../../assets/svg-component/ProductWork";

const Products = () => {
    return (
        <div className="products">
            <li className="products__discover">
                <div className="description">
                    <span>
                        Discover
                    </span>
                    <p>
                        Get information on using these
                        guidelines whenever you are using
                        therefore they have the same style
                        and quality.
                    </p>
                </div>
                <ProductSearch />
            </li>
            <li className="products__augmented">
                <div className="description">
                    <span>
                        Augmented
                    </span>
                    <p>
                        Word salad often arouses curiosity due to
                        its seemingly intelligent and tasteful play
                        on words.
                    </p>
                </div>
                <ProductSmartphone />
            </li>
            <li className="products__possibilities">
                <div className="description">
                    <span>
                        Endless Possibilities
                    </span>
                    <p>
                        Mangement Systems shouldn't be a
                        bore. Run out of words? here's some
                        lorem ipsum. Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <ProductWork />
            </li>
        </div>
    );
}

export default Products;