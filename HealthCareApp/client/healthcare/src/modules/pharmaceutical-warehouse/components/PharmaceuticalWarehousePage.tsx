import React from 'react'
import { TabsProps, Tabs } from 'antd';
import { PharmaceuticalGoodsReceiptPage } from './pharmaceutical-goods-receipt/PharmaceuticalGoodsReceiptPage';
export const PharmaceuticalWarehousePage = () => {
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: `Nhập kho`,
          children: <PharmaceuticalGoodsReceiptPage />,
        },
        {
          key: '2',
          label: `Xuất kho`,
        //   children: <StaffTicketForm />,
        },
        {
            key: '3',
            label: `Xem thông tin kho thuốc`,
            // children: <PrescriptionPage />
        }
    ];

  return (
    <Tabs defaultActiveKey="1" items={items} />
  )
}