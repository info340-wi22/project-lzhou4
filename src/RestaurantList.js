export default function RestarauntList(props) {

    const restaurantArray = props.restaurants;
    console.log(restaurantArray);

    // array of <Restaurant> Components
    const componentArray = restaurantArray.map((aRestaurantObject) => {
        const restaurantElement = <Restaurant restaurantName={aRestaurantObject}></Restaurant>
        return restaurantElement
    });
    
    function Restaurant(props) {

    console.log(props);

    const {restaurantRank, 
        restaurantName, 
        restaurantText, 
        restaurantImg} = props.restaurant;
    }

    return (
        <div>
            <div>
                <img src={restaurantImg} alt={restaurantName} />
            </div>
            <div>
                <h1>
                    {restaurantRank}
                </h1>
            </div>
            <div>
                <p>{restaurantName}</p>
                <p>{}</p>
            </div>
        </div>
    )
}