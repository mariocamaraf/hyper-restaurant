import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
   <header>
   <div class="container">
    <div class="logo">
    logo
    </div>
    <nav>
      <a href="#">Our Story</a>
      <a href="#">Reviews</a>
      <a href="#">Special Menu</a>
      <a href="#">Reservations</a>
      <a href="#">Contact Us</a>
      </nav>
      </div>
     </header>
  )
}
