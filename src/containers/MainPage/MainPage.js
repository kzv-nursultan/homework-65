import React, {useState, useEffect} from 'react';
import axiosPages from '../../axios-pages';
import PageInfo from '../../components/PageInfo/PageInfo';

const MainPage = props => {
    const [pageInfo, setPageInfo] = useState([]);


    useEffect(()=>{
        const fetchData = async () => {

            if(props.match.path === '/') {
                const response = await axiosPages.get("home/.json");
                setPageInfo(response.data);
            } else {
                const response = await axiosPages.get(props.match.path+"/.json");
                setPageInfo(response.data);
            }
        };
        fetchData().catch(console.error);
    },[props.match.path])


    return(
        <div>
            <PageInfo pageInfo={pageInfo}/>
        </div>
    );
};

export default MainPage;