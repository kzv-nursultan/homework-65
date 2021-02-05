import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosPages from '../../axios-pages';

const Edit = () => {
    let history = useHistory();
    const [dataResponse, setDataResponse] = useState({title:'', content:''});
    const [pageValue, setPageValue] = useState({value:''})

    const optionHandler = async e => {

        const pageNameUpdate =  {
           value: e.target.value
        };
        
        setPageValue(pageNameUpdate);
        const response = await axiosPages.get(pageNameUpdate['value']+ '/.json');
        setDataResponse(response['data']);
    };

    const inputEditer = e => {
        const name = e.target.name;
        const value = e.target.value

        setDataResponse(prevState=>({
            ...prevState,
            [name]: value
        }));
    };

    const SubmitHandler = async e => {
        e.preventDefault();

        const editted = {
            ...dataResponse
        };
        
        try {
            await axiosPages.put(pageValue.value + '/.json', editted);
        } finally {
            history.push({
                pathname: '/'
            });
        };
    };


    return(
        <form className="d-flex flex-column" onSubmit={SubmitHandler}>
            <h3>
                Edit:
            </h3>

            <h4>
              Select Page:
            </h4>
            <select style={{width:'250px'}} onChange={optionHandler}>
                <option>...</option>
                <option value='home'>Home</option>
                <option value='about'>About</option>
                <option value='contacts'>Contacts</option>
                <option value='news'>News</option>
                <option value='documentation'>Documentation</option>
            </select>

            <h4>
              Input Title:
            </h4>
            <input style={{width:'300px'}} 
            name='title'
            value={dataResponse['title']}
            onChange={inputEditer}/>

           <h4> Add Text:</h4>
            <textarea 
            style={{width:'310px', height:'300px'}} 
            name='content'
            value={dataResponse['content']}
            onChange={inputEditer}/>

            <button style={{width:'150px'}} 
            className="bg-secondary m-2 text-white"
            type="submit">
                Save
            </button>
        </form>
    );
};

export default Edit;