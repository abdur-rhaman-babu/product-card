
import Product from './Product';
import './Product.css'
const Products = () => {

    const productList = [
        {
          id:1,
          name: "VIP Cap",
          price:"$120",
          discount:'$15',
          imgURL:"https://i.postimg.cc/dDPR6Kmx/cap.jpg"
        },
        {
            id:2,
            name: "S.Clock's",
            price:"$1200",
          discount:'$150',
          imgURL:"https://i.postimg.cc/9XvsKRLv/clock.webp"
        },
        {
            id:3,
            name: "Sun Glass",
            price:"$520",
            discount:'$25',
          imgURL:"https://i.postimg.cc/13KT8WyQ/glass.jpg"
        },
        {
            id:4,
            name: "I-Box",
            price:"$1330",
            discount:'$50',
          imgURL:"https://i.postimg.cc/zXK4rzM3/sound-box.jpg"
        },
        {
            id:5,
            name: "Headphone",
            price:"$750",
            discount:'$32',
          imgURL:"https://i.postimg.cc/qBt91Xxs/headphone.webp"
        },
        {
            id:6,
            name: "Shoose",
            price:"$1700",
            discount:'$73',
          imgURL:"https://i.postimg.cc/MKMvDWxp/pexels-web-donut-19090-removebg-preview.png"
        },
        
      ];

    return (
        <div className="design-flex">
            
            {
                // users.map(user=><User key = {user.id} userInfo = {user}/>)
                productList.map((product,index)=>{
                    return <Product key = {index.toString} productInfo={product}/>
                })
            }
        </div>
    );
       
        
};
export default Products;