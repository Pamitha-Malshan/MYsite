import "./main.css";

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 10) {
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
})

function button(){

  return(
    <div>
          <a href='#' >
                <img  className="topup" src={require('../Image/topup.jpg')} />
       </a>
    </div>
  )
}
export default button;