import CartWidget from "./CartWidget"

const Header = () => {
  return (
    <>
        <nav>
            <h1>BRAND</h1>
            <ul>
                <li><a href="">Item 1</a></li>            
                <li><a href="">Item 2</a></li>            
                <li><a href="">Item 3</a></li>            
                <li><a href="">Item 4</a></li>       
              <CartWidget />
            </ul>
        </nav>
    </>
  )
}

export default Header