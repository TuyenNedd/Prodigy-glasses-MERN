import React from 'react'
import * as ProductService from "../../services//ProductService"
import { useQuery } from "@tanstack/react-query";
import { Button, Modal, Input, Form, Select , Col ,Table} from 'antd';

import { useState } from 'react';

import TypeChart from '../TypeChart/TypeChart';
const AdminCategory = () => {
    const fetchAllTypeProduct = async () => {   
        const res = await ProductService.getAllTypeProduct();
        console.log('res data all type',res);
        return res;
    };
    const getAllProducts = async () => {
        const res = await ProductService.getAllProduct();
        const dataProduct = res;
        console.log('res dataTable all product',res);
        return res;
      };
    const typeProduct = useQuery({
        queryKey: ["type-product"],
        queryFn: fetchAllTypeProduct,
    });
    const queryProduct = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
      });
    const { isLoadingType, data: types } = typeProduct
    const { isLoadingAllP, data: AllP } = queryProduct

    
    const columns = [
        {
            title: 'type',
            dataIndex: 'type'
        }
    ]

    const columnsAllP = [
        {
            title: 'allP',
            dataIndex: 'allP'
        }
    ]
    const dataTable = types?.data?.length && types?.data?.map((type, index) => {
        return { type, key: index }
    })

    const dataTableAllP = AllP?.data?.length && AllP?.data?.map((AllP ,indexAllP) => {
        return { ...AllP, key: indexAllP }
    })

    
    console.log('dataTable', dataTable);
    console.log('data AllP' ,dataTableAllP);
    const [stateProduct, setStateProduct] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const calculateTypeCounts = (data) => {
        const typeCounts = {};  
        data.forEach((item) => {
          const type = item.type;
          if (typeCounts[type]) {
            typeCounts[type].uv++;
          } else {
            typeCounts[type] = { type, uv: 1 };
          }
        });
        return Object.values(typeCounts);
      };
      // Gọi hàm
      const typeCounts = calculateTypeCounts(dataTableAllP);
      console.log('TypeCounts' , typeCounts)
 
    return (
        <div>
        <TypeChart typeCounts={typeCounts}/>
         
            <Table
                columns={columns}
                isLoading={isLoadingType}
                dataSource={dataTable}   
            />
        </div>
    )
}

export default AdminCategory