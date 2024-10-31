import {useState } from "react";
import './FunctionalComponent.scss'
import axios from "axios";
import UploadComponent  from "./UploadComponent";
import ButtonComponent from "./ButtonComponent";


const FunctionalComponent = () => {

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showList, setShowList] = useState(false);
    
    const dilayfetchData = () => {
        setIsLoaded(true);
        setTimeout(fetchData, 2000);
    }

    const fetchData = async () => {
         try {
            const response = await axios.get('http://localhost:3040/todos') ;
            setItems(response.data);
        } catch (error) {
            throw new Error("Проблеми при загрузці");
         } finally {
             setIsLoaded(false);  
             setShowList(true);
       }
    }
 
    return (
        <>
            <h3 className='title'>Created with Functional Components</h3>
            <div className='container' >
                {!showList ? 
                    <>
                       <p style={{margin: "0px"}}>“Наразі у вас немає ще завдань"</p>
                       <ButtonComponent
                            aditionalclassName='btn_fetch'
                            type='button'
                            text={ isLoaded ? "Loading..." :'Upload TodoList' }
                            onClick={ dilayfetchData }
                        />
                    </> 
                    :
                    <UploadComponent
                        items={ items }
                        setItems={ setItems }
                    />}
               
           </div>
        </>
    )
};

export default FunctionalComponent;