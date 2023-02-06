  //Detecting Button Press

  $(document).click(function(e) {
    
    makeSound(e.target.id)

    buttonAnimation(e.target.id)
  })

  //Detecting Keyboard Press
  
  document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);
    
    buttonAnimation(event.key);
  
  })
  
  function makeSound(key) {
    
    switch (key) {
      case "a":
        let a = new Audio("sounds/a.mp3");
        a.play();
        break;
  
      case "w":
        let w = new Audio("sounds/w.mp3");
        w.play();
        break;
  
      case "s":
        let s = new Audio("sounds/s.mp3");
        s.play();
        break;
    
      case "e":
        let e = new Audio("sounds/e.mp3");
        e.play();
        break;

      case "d":
        let d = new Audio("sounds/d.mp3");
        d.play();
        break;
  
      case "f":
        let f = new Audio("sounds/f.mp3");
        f.play();
        break;
  
      case "t":
        let t = new Audio("sounds/t.mp3");
        t.play();
        break;
  
      case "g":
        let g = new Audio("sounds/g.mp3");
        g.play();
        break;
      
      case "y":
        let y = new Audio("sounds/y.mp3");
        y.play();
        break;
  
      case "h":
        let h = new Audio("sounds/h.mp3");
        h.play();
        break;
  
      case "u":
        let u = new Audio("sounds/u.mp3");
        u.play();
        break; 
      
      case "j":
        let j = new Audio("sounds/j.mp3");
        j.play();
        break;
  
      case "k":
        let k = new Audio("sounds/k.mp3");
        k.play();
        break;
  
      case "o":
        let o = new Audio("sounds/o.mp3");
        o.play();
        break;
      
      case "l":
        let l = new Audio("sounds/l.mp3");
        l.play();
        break;
  
      case "p":
        let p = new Audio("sounds/p.mp3");
        p.play();
        break;
  
      case ";":
        let m = new Audio("sounds/m.mp3");
        m.play();
        break;     
      default: console.log(key)
    }
  }
  
  function buttonAnimation(currentKey) {
  
  let activeKey = document.querySelector("." + currentKey)
    activeKey.classList.add("pressed")

    setTimeout (function() {
      activeKey.classList.remove("pressed")
    }, 100)
  }
