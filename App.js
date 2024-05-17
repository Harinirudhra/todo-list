import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";



function App() {
  const [items,setItems]=useState(
    [
      { id:1,
      checked:true,
      item:"practice coding"
      },
      { id:2,
        checked:false,
        item:"play"
      },
      { id:3,
        checked:false,
        item:"read"
      },
      { id:4,
        checked:true,
        item:"movie"
      },
      { id:5,
        checked:false,
        item:"series"
      },
      { id:6,
        checked:false,
        item:"watching anime"
      },
    ]);
    const handleCheck=(id)=>{
      const listItem=items.map((item)=>item.id==id?{...item,checked:!item.checked}:item)
      setItems(listItem)
      localStorage.setItem("todo_list",JSON.stringify(listItem))
      
    }
    const handleDelete=(id)=>{
      const listItem=items.filter((item)=>
      item.id!==id)
      setItems(listItem)
      localStorage.setItem("todo_list",JSON.stringify(listItem))
      
    }
   
  return (
    <div className="App">
      <Header/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
      length={items.length}
      
      />
    </div>
  );
}

export default App;
