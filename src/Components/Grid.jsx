import React, { useState,useRef } from 'react';
import Icon from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import shopify from '../Assets/svg/shopify.svg'
import Highlighter from 'react-highlight-words';
import {Form,Button, Input, Space, Table } from 'antd';
import Buttons from '../Components/Button'
import {  Dropdown,Tag} from 'antd';
import {  UserOutlined } from '@ant-design/icons';



const data = [{orderNo:'#TKN20203754',orderDate:'2022-05-04',city:'Lucknow',customerName:'Abhishek Dixit',orderValue:'0.00',status:'Pending'},
{orderNo:'#TKN20203753',orderDate:'2022-05-04',city:'Lucknow',customerName:'Abhishek Dixit',orderValue:'0.00',status:'Pending'},
{orderNo:'#TKN20203752',orderDate:'2022-05-04',city:'Lucknow',customerName:'Abhishek Dixit',orderValue:'0.00',status:'Pending'},
{orderNo:'#TKN20203751',orderDate:'2022-05-04',city:'Lucknow',customerName:'Abhishek Dixit',orderValue:'0.00',status:'Pending'},
{orderNo:'#TKN20203750',orderDate:'2022-05-04',city:'Lucknow',customerName:'Abhishek Dixit',orderValue:'0.00',status:'Pending'},
{orderNo:'#TKN20203749',orderDate:'2022-05-04',city:'Lucknow',customerName:'Abhishek Dixit',orderValue:'0.00',status:'Pending'}];


const defaultExpandable = { expandedRowRender: (record) => <p>{record.description}</p> };
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';

const Grid = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
   
  
    const searchInput = useRef(null);
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [expandable, setExpandable] = useState(
    defaultExpandable,
  );
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();



  const handleSearch = (
    selectedKeys,
    confirm,
    dataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
 
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };


const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys , confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys , confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys )[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value ).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleMenuClick = (e) => {
   
    console.log('click', e);
  };
  
  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const columns = [
    {
      title: 'Channel',
      dataIndex: 'channel',
      render: () => (
        <Icon component={() => (<img src={shopify} />)} />
      ),
      sorter:true,
      filters: [
          {
            text: 'London',
            value: 'London',
          },
          {
            text: 'New York',
            value: 'New York',
          },
        ],
        onFilter: (value, record) => record.address.indexOf(value ) === 0,
       width:"200px",
    },
    {
      title: 'Order No',
      dataIndex: 'orderNo',
      sorter: (a, b) => a.age - b.age,
      ...getColumnSearchProps('orderNo'),
      render:(text)=><a href='#'>{text}</a>,
      width:"300px",
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      sorter:true,
      ...getColumnSearchProps('orderDate'),
      width:"130px"
    },
    {
      title: 'City',
      dataIndex: 'city',
      sorter: true,
      width:"150px",
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      ...getColumnSearchProps('customerName'),
      width:"350px"
    },
    {
      title: 'Order Value',
      dataIndex: 'orderValue',
      sorter: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: true,
      render:(Text)=>{
        return(
          <Tag color="green">{Text}</Tag>
        )
      },
      width:"150px"
    },
    {
      title: 'Operation',
      key: 'operation',
      render:()=>{ return (<Dropdown menu={menuProps}>
      <Button>
        <Space>
          Action
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>)}
    },
  ];

  const handleBorderChange = (enable) => {
    setBordered(enable);
  };

  const handleLoadingChange = (enable) => {
    setLoading(enable);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleTableLayoutChange = (e) => {
    setTableLayout(e.target.value);
  };

  const handleExpandChange = (enable) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };

  const handleEllipsisChange = (enable) => {
    setEllipsis(enable);
  };

  const handleTitleChange = (enable) => {
    setShowTitle(enable);
  };

  const handleHeaderChange = (enable) => {
    setShowHeader(enable);
  };

  const handleFooterChange = (enable) => {
    setShowFooter(enable);
  };

  const handleRowSelectionChange = (enable) => {
    setRowSelection(enable ? {} : undefined);
  };

  const handleYScrollChange = (enable) => {
    setYScroll(enable);
  };

  const handleXScrollChange = (e) => {
    setXScroll(e.target.value);
  };

  const handleDataChange = (newHasData) => {
    setHasData(newHasData);
  };

  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }

  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
   
    rowSelection,
    scroll,
    tableLayout,
  };

  return (
    <div style={{backgroundColor:"white"}}>
    <Buttons/>
      <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{ marginBottom: 16}}
        
      >
        {/* Form items */}
      </Form>
      <Table
        {...tableProps}
        pagination={{ position: [top, bottom],pageSize:3,total:60}}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
       
      />
    </div>
  );
};

export default Grid;
