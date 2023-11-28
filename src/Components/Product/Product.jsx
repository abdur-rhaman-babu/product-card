/* eslint-disable react/prop-types */


const Product = (props) => {
    const {name,imgURL,price,discount}= props.productInfo;
    return (
        <>
        <div className="main-content">
        <div className="card-design">
            <div className="card-img">
            <img src={imgURL} alt="image"/> 
            <h1 style={{color:"#000"}}>{name}</h1>
            <div className="price-design">
            <p style={{color:'red'}}> <span>Price:</span> {price}</p>
            <p style={{color:'red'}}><span>Discount:</span> {discount}</p>
            </div>
            </div>
            <div className="card-info">
                <div className="add-card">
                        <a href="#"> ADD TO CARD</a>
                </div>
            </div>
           
        </div>
        </div>
    
        </>
    )
};

export default Product;