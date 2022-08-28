import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {newsLocalApi} from '../services/NewsService';
import Header from '../components/Header/Header';
import MainWrapper from '../components/MainWrapper';
import Footer from '../components/Footer/Footer';
import Select from '../components/SelectPage/Select';

const SelectPage = () => {
    const {id} = useParams();
    const {data: comment, isLoading, isFetching, refetch} = newsLocalApi.useFetchNewsQuery(id!, {
        pollingInterval: 60000,
    });

    const [load, setLoad] = useState(false);

    const handleLoad = () => {
        refetch();
        setLoad(true);
    };

    useEffect(() => {
        setLoad(false);
    }, [isFetching]);

    return (
        <>
            <Header refetch={handleLoad}/>
            <MainWrapper>
                <Select isFetching={isLoading || (isFetching && load)} comment={comment!}/>
            </MainWrapper>
            <Footer/>
        </>
    );
};

export default SelectPage;
