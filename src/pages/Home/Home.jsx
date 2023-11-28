import Products from "../../Components/Product/Products";


const Home = () => {
    return (
        <div>
            <h1 style = {{textAlign:'center',fontSize:'50px',marginTop:'30px'}}>Product list</h1>
            <Products/>
        </div>
    );
};

export default Home;

