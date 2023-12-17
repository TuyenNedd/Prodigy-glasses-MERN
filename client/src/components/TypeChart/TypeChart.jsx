import React from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const TypeChart = (props) => {
    const {typeCounts} =props
    const renderCustomAxisTick = ({ x, y, payload }) => {
        let text = '';
        switch (payload.value) {
          case 'Light Responsive': 
            text = 'Light Responsive';
            break;
          case 'Prescription Sunglasses':
            text = 'Prescription Sunglasses';
            break;
          case 'Sun Progressives': 
            text = 'Sun Progressives';
            break;
          case  'Sunglass Readers':
            text = 'Sunglass Readers';
            break;  
          case 'Prescription Glasses':
            text = 'Prescription Glasses';
            break;
          case 'Progressive Readers': 
            text = 'Progressive Readers';
            break;
          case 'Sunglasses ': 
            text = 'Sunglasses';
            break;
          case 'Readers ': 
            text = 'Readers';
            break;
          // Thêm các case khác nếu cần
          default:
            text = '';
        }
        return (
          <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
            {text}
          </text>
        );
      };
      const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-10}>{`quantity: ${value}`}</text>;
      };
  return (
    <div>  <h1 style={{ fontWeight: 'bold', fontSize:'30px' , padding:'1% 5% 3% 5%'}}>Quantity chart of each type of product</h1>
    <BarChart
      key="product-type-chart"
      width={1200}
      height={400}
      data={typeCounts}
    >
      <XAxis dataKey="type" tick={renderCustomAxisTick} />
      <YAxis />
      <Bar
        dataKey="uv"
        barSize={60}
        fill="#1F2937"
        label={renderCustomBarLabel}
      />
    </BarChart></div>
  )
}

export default TypeChart