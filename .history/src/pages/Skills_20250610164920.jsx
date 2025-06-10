import Navbar from "../components/Navbar"

const Skills = () => {
    {
        const shop_debts = [
        {
          'customer' : 'Daniel',
          'item' : 'Sugar',
          'Amount' : 400
        }, 
        {
          'customer' : 'Manoa',
          'item' : 'Baking',
          'Amount' : 50
        },
        {
          'customer' : 'Dinnah',
          'item' : 'Salt',
          'Amount' : 100
        }
    
      ]
    
       localStorage.setItem('shop', JSON.stringify(shop_debts))
       const storedShopData = localStorage.getItem(JSON.parse(shop))
       console.log(storedShopData)

    
    }
    
    return(
        <>
        <div>
            <Navbar/>
            <h1> Hello there !</h1>
        </div>
        </>
    )
}

export default Skills